import type { MealKey } from "@/store/plan";

export type Label = { te: string; en: string };

export type Dish = {
  id: string;
  label: Label;
  isVeg?: boolean;
  popular?: boolean;
};
export type DishCategory = { id: string; label: Label; dishes: Dish[] };

const v = (
  id: string,
  te: string,
  en: string,
  extra: { isVeg?: boolean; popular?: boolean } = {},
): Dish => ({ id, label: { te, en }, isVeg: extra.isVeg ?? true, popular: extra.popular });

export const mealCatalog: Record<MealKey, DishCategory[]> = {
  breakfast: [
    {
      id: "tiffin-classics",
      label: { te: "Classic tiffin", en: "Classic tiffin" },
      dishes: [
        v("idli", "Idli", "Idli", { popular: true }),
        v("vada", "Vada", "Vada", { popular: true }),
        v("dosa", "Dosa", "Dosa", { popular: true }),
        v("upma", "Upma", "Upma"),
        v("pongal", "Pongal", "Pongal"),
      ],
    },
    {
      id: "tiffin-special",
      label: { te: "Special", en: "Special" },
      dishes: [
        v("puri", "Puri", "Puri"),
        v("poha", "Atukulu", "Poha"),
        v("bonda", "Mysore bonda", "Mysore bonda"),
      ],
    },
  ],
  lunch: [
    {
      id: "traditional",
      label: { te: "Traditional", en: "Traditional" },
      dishes: [
        v("rice", "Annam", "Rice", { popular: true }),
        v("sambar", "Sambar", "Sambar", { popular: true }),
        v("rasam", "Rasam", "Rasam"),
        v("curd", "Perugu", "Curd"),
        v("papad", "Appadam", "Papad"),
      ],
    },
    {
      id: "andhra",
      label: { te: "Andhra special", en: "Andhra special" },
      dishes: [
        v("gongura", "Gongura pachadi", "Gongura pachadi", { popular: true }),
        v("avakaya", "Avakaya", "Avakaya"),
        v("pulihora", "Pulihora", "Pulihora"),
        v("kodi-pulusu", "Kodi pulusu", "Chicken pulusu", { isVeg: false }),
      ],
    },
    {
      id: "telangana",
      label: { te: "Telangana special", en: "Telangana special" },
      dishes: [
        v("sakinalu", "Sakinalu", "Sakinalu"),
        v("jonna-rotte", "Jonna rotte", "Jowar roti"),
        v("mutton-curry", "Mutton curry", "Mutton curry", { isVeg: false }),
      ],
    },
    {
      id: "biryani",
      label: { te: "Biryani", en: "Biryani" },
      dishes: [
        v("veg-biryani", "Veg biryani", "Veg biryani"),
        v("chicken-biryani", "Chicken biryani", "Chicken biryani", { isVeg: false, popular: true }),
        v("mutton-biryani", "Mutton biryani", "Mutton biryani", { isVeg: false }),
        v("raita", "Raita", "Raita"),
        v("salan", "Mirchi ka salan", "Mirchi ka salan"),
      ],
    },
    {
      id: "sweets",
      label: { te: "Sweets", en: "Sweets" },
      dishes: [
        v("bobbatlu", "Bobbatlu", "Bobbatlu", { popular: true }),
        v("payasam", "Payasam", "Payasam"),
        v("gulab-jamun", "Gulab jamun", "Gulab jamun", { popular: true }),
        v("double-meetha", "Double ka meetha", "Double ka meetha"),
      ],
    },
  ],
  snacks: [
    {
      id: "tea-time",
      label: { te: "Tea time", en: "Tea time" },
      dishes: [
        v("tea", "Tea", "Tea", { popular: true }),
        v("coffee", "Filter coffee", "Filter coffee"),
        v("samosa", "Samosa", "Samosa", { popular: true }),
        v("mirchi-bajji", "Mirchi bajji", "Mirchi bajji"),
        v("punugulu", "Punugulu", "Punugulu"),
      ],
    },
  ],
  dinner: [
    {
      id: "north",
      label: { te: "North Indian", en: "North Indian" },
      dishes: [
        v("roti", "Roti", "Roti"),
        v("paneer", "Paneer butter masala", "Paneer butter masala", { popular: true }),
        v("dal", "Dal tadka", "Dal tadka"),
        v("naan", "Naan", "Naan"),
      ],
    },
    {
      id: "south-dinner",
      label: { te: "South Indian", en: "South Indian" },
      dishes: [
        v("chapati", "Chapati", "Chapati"),
        v("kurma", "Kurma", "Kurma"),
        v("veg-curry", "Veg curry", "Veg curry"),
      ],
    },
  ],
};

export const mealOrder: MealKey[] = ["breakfast", "lunch", "snacks", "dinner"];

export function findDish(meal: MealKey, dishId: string): Dish | null {
  for (const cat of mealCatalog[meal]) {
    const d = cat.dishes.find((x) => x.id === dishId);
    if (d) return d;
  }
  return null;
}

export function findDishLabel(meal: MealKey, dishId: string): Label | null {
  return findDish(meal, dishId)?.label ?? null;
}
