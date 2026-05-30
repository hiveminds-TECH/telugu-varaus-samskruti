import { create } from "zustand";
import { persist } from "zustand/middleware";
import { normalizeLang, type Lang } from "@/i18n";

export type Occasion =
  | "wedding"
  | "birthday"
  | "housewarming"
  | "religious"
  | "corporate"
  | "other";

export type Side = "bride" | "groom" | "both" | "na";
export type MealKey = "breakfast" | "lunch" | "snacks" | "dinner";
export type VenueType = "hall" | "home" | "outdoor" | "temple" | "other";

export type DayMeal = Record<MealKey, string[]>;

export interface PlanState {
  language: Lang;
  occasion: Occasion | null;
  side: Side | null;
  name: string;
  mobile: string;
  startDate: string | null;
  endDate: string | null;
  mealsByDay: Record<string, DayMeal>;
  guests: number;
  venueType: VenueType | null;
  address: string;
  updatedAt: number | null;
  hydrated: boolean;

  setLanguage: (l: Lang) => void;
  setOccasion: (o: Occasion) => void;
  setSide: (s: Side) => void;
  setName: (n: string) => void;
  setMobile: (m: string) => void;
  setDates: (start: string, end: string) => void;
  toggleDish: (date: string, meal: MealKey, dish: string) => void;
  addCustomDish: (date: string, meal: MealKey, dish: string) => void;
  setGuests: (g: number) => void;
  setVenue: (v: VenueType, address?: string) => void;
  setAddress: (a: string) => void;
  reset: () => void;
  markHydrated: () => void;
}

const initial = {
  language: "te" as Lang,
  occasion: null,
  side: null,
  name: "",
  mobile: "",
  startDate: null,
  endDate: null,
  mealsByDay: {},
  guests: 50,
  venueType: null,
  address: "",
  updatedAt: null,
};

const emptyDay = (): DayMeal => ({
  breakfast: [],
  lunch: [],
  snacks: [],
  dinner: [],
});

export const usePlan = create<PlanState>()(
  persist(
    (set) => ({
      ...initial,
      hydrated: false,
      setLanguage: (language) => set({ language, updatedAt: Date.now() }),
      setOccasion: (occasion) =>
        set((s) => ({
          occasion,
          side: occasion === "wedding" ? s.side : "na",
          updatedAt: Date.now(),
        })),
      setSide: (side) => set({ side, updatedAt: Date.now() }),
      setName: (name) => set({ name, updatedAt: Date.now() }),
      setMobile: (mobile) => set({ mobile, updatedAt: Date.now() }),
      setDates: (startDate, endDate) =>
        set({ startDate, endDate, updatedAt: Date.now() }),
      toggleDish: (date, meal, dish) =>
        set((s) => {
          const day = s.mealsByDay[date] ?? emptyDay();
          const list = day[meal] ?? [];
          const next = list.includes(dish)
            ? list.filter((d) => d !== dish)
            : [...list, dish];
          return {
            mealsByDay: { ...s.mealsByDay, [date]: { ...day, [meal]: next } },
            updatedAt: Date.now(),
          };
        }),
      addCustomDish: (date, meal, dish) =>
        set((s) => {
          const trimmed = dish.trim();
          if (!trimmed) return s;
          const day = s.mealsByDay[date] ?? emptyDay();
          const list = day[meal] ?? [];
          if (list.includes(trimmed)) return s;
          return {
            mealsByDay: {
              ...s.mealsByDay,
              [date]: { ...day, [meal]: [...list, trimmed] },
            },
            updatedAt: Date.now(),
          };
        }),
      setGuests: (guests) => set({ guests, updatedAt: Date.now() }),
      setVenue: (venueType, address) =>
        set((s) => ({
          venueType,
          address: address ?? s.address,
          updatedAt: Date.now(),
        })),
      setAddress: (address) => set({ address, updatedAt: Date.now() }),
      reset: () => set({ ...initial, hydrated: true }),
      markHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "caterflow:v1",
      merge: (persisted, current) => {
        const p = persisted as Partial<PlanState> | undefined;
        return {
          ...current,
          ...p,
          language: normalizeLang(p?.language),
        };
      },
      onRehydrateStorage: () => (state) => {
        state?.markHydrated();
      },
    },
  ),
);

export function datesInRange(start: string | null, end: string | null): string[] {
  if (!start || !end) return [];
  const s = new Date(start);
  const e = new Date(end);
  if (isNaN(s.getTime()) || isNaN(e.getTime()) || e < s) return [];
  const out: string[] = [];
  const cur = new Date(s);
  while (cur <= e) {
    out.push(cur.toISOString().slice(0, 10));
    cur.setDate(cur.getDate() + 1);
    if (out.length > 14) break;
  }
  return out;
}
