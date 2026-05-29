import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { format, parseISO } from "date-fns";
import { StepShell } from "@/components/StepShell";
import { DishCard } from "@/components/DishCard";
import { useT, pickLabel } from "@/hooks/useT";
import { usePlan, datesInRange, type MealKey } from "@/store/plan";
import { mealCatalog, mealOrder } from "@/lib/meals";
import {
  IdliIcon,
  DosaIcon,
  VadaIcon,
  PongalIcon,
  PuriIcon,
  ThaliIcon,
  BiryaniIcon,
  SamosaIcon,
  TeaIcon,
  RotiIcon,
  SweetIcon,
  GenericDishIcon,
} from "@/components/illustrations";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  idli: IdliIcon,
  dosa: DosaIcon,
  vada: VadaIcon,
  pongal: PongalIcon,
  upma: PongalIcon,
  puri: PuriIcon,
  poha: PongalIcon,
  bonda: VadaIcon,
  rice: ThaliIcon,
  sambar: ThaliIcon,
  rasam: ThaliIcon,
  curd: ThaliIcon,
  papad: ThaliIcon,
  gongura: ThaliIcon,
  avakaya: ThaliIcon,
  pulihora: ThaliIcon,
  "kodi-pulusu": ThaliIcon,
  sakinalu: SamosaIcon,
  "jonna-rotte": RotiIcon,
  "mutton-curry": ThaliIcon,
  "veg-biryani": BiryaniIcon,
  "chicken-biryani": BiryaniIcon,
  "mutton-biryani": BiryaniIcon,
  raita: ThaliIcon,
  salan: ThaliIcon,
  bobbatlu: SweetIcon,
  payasam: SweetIcon,
  "gulab-jamun": SweetIcon,
  "double-meetha": SweetIcon,
  tea: TeaIcon,
  coffee: TeaIcon,
  samosa: SamosaIcon,
  "mirchi-bajji": SamosaIcon,
  punugulu: VadaIcon,
  roti: RotiIcon,
  paneer: ThaliIcon,
  dal: ThaliIcon,
  naan: RotiIcon,
  chapati: RotiIcon,
  kurma: ThaliIcon,
  "veg-curry": ThaliIcon,
};

export default function MealsStep() {
  const { t, lang } = useT();
  const startDate = usePlan((s) => s.startDate);
  const endDate = usePlan((s) => s.endDate);
  const mealsByDay = usePlan((s) => s.mealsByDay);
  const toggleDish = usePlan((s) => s.toggleDish);
  const addCustomDish = usePlan((s) => s.addCustomDish);
  const navigate = useNavigate();

  const days = datesInRange(startDate, endDate);
  const [activeDay, setActiveDay] = useState(days[0] ?? "");
  const [openMeal, setOpenMeal] = useState<MealKey | null>("lunch");
  const [activeCategory, setActiveCategory] = useState<Record<MealKey, string>>({
    breakfast: mealCatalog.breakfast[0].id,
    lunch: mealCatalog.lunch[0].id,
    snacks: mealCatalog.snacks[0].id,
    dinner: mealCatalog.dinner[0].id,
  });
  const [custom, setCustom] = useState<Record<MealKey, string>>({
    breakfast: "",
    lunch: "",
    snacks: "",
    dinner: "",
  });

  if (days.length === 0) {
    return (
      <StepShell
        title={t("mealsQ")}
        back={{ to: "/plan/dates" }}
        next={{ onClick: () => navigate("/plan/dates"), label: t("startDate") }}
      >
        <p className="text-muted-foreground">పహిల dates select cheyandi.</p>
      </StepShell>
    );
  }

  const day = activeDay || days[0];
  const dayMeals = mealsByDay[day] ?? {
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: [],
  };

  return (
    <StepShell
      kicker="Step 6"
      step={6}
      totalSteps={8}
      title={t("mealsQ")}
      subtitle={t("mealsSub")}
      back={{ to: "/plan/dates" }}
      next={{ onClick: () => navigate("/plan/guests") }}
    >
      <div className="flex flex-col gap-5">
        {days.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {days.map((d, i) => (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  day === d
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-foreground hairline hover:shadow-soft"
                }`}
              >
                రోజు {i + 1} · {format(parseISO(d), "EEE")}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3">
          {mealOrder.map((meal) => {
            const isOpen = openMeal === meal;
            const selected = dayMeals[meal] ?? [];
            const categories = mealCatalog[meal];
            const activeCat =
              categories.find((c) => c.id === activeCategory[meal]) ?? categories[0];
            return (
              <div
                key={meal}
                className="overflow-hidden rounded-2xl bg-card hairline shadow-soft"
              >
                <button
                  onClick={() => setOpenMeal(isOpen ? null : meal)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <div className="flex flex-col">
                    <span className="font-display text-xl text-foreground">{t(meal)}</span>
                    {selected.length > 0 && (
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {selected.length} selected
                      </span>
                    )}
                  </div>
                  <span className="text-xl text-primary">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="border-t border-dashed border-border"
                    >
                      <div className="flex flex-col gap-4 p-5">
                        {categories.length > 1 && (
                          <div className="flex flex-wrap gap-2">
                            {categories.map((c) => (
                              <button
                                key={c.id}
                                onClick={() =>
                                  setActiveCategory((prev) => ({ ...prev, [meal]: c.id }))
                                }
                                className={`rounded-full px-3 py-1.5 text-xs transition ${
                                  activeCategory[meal] === c.id
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-foreground hover:bg-gold-soft"
                                }`}
                              >
                                {pickLabel(c.label, lang)}
                              </button>
                            ))}
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                          {activeCat.dishes.map((d) => {
                            const Icon = iconMap[d.id] ?? GenericDishIcon;
                            return (
                              <DishCard
                                key={d.id}
                                selected={selected.includes(d.id)}
                                onClick={() => toggleDish(day, meal, d.id)}
                                icon={<Icon className="h-16 w-16" />}
                                label={pickLabel(d.label, lang)}
                                isVeg={d.isVeg ?? true}
                                popular={d.popular}
                              />
                            );
                          })}
                        </div>

                        <div className="flex flex-col gap-2 rounded-xl bg-secondary/60 p-3 sm:flex-row sm:items-center">
                          <input
                            value={custom[meal]}
                            onChange={(e) =>
                              setCustom((p) => ({ ...p, [meal]: e.target.value }))
                            }
                            placeholder={t("customPlaceholder")}
                            className="flex-1 rounded-lg bg-card px-3 py-2 text-sm text-foreground hairline focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <button
                            onClick={() => {
                              if (!custom[meal].trim()) return;
                              addCustomDish(day, meal, custom[meal]);
                              setCustom((p) => ({ ...p, [meal]: "" }));
                            }}
                            className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:shadow-soft"
                          >
                            {t("add")}
                          </button>
                        </div>

                        {selected.filter((s) =>
                          !categories.some((c) => c.dishes.some((d) => d.id === s)),
                        ).length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {selected
                              .filter(
                                (s) =>
                                  !categories.some((c) => c.dishes.some((d) => d.id === s)),
                              )
                              .map((custom) => (
                                <button
                                  key={custom}
                                  onClick={() => toggleDish(day, meal, custom)}
                                  className="group flex items-center gap-2 rounded-full bg-gold-soft px-3 py-1.5 text-sm text-foreground"
                                >
                                  {custom} <span className="text-muted-foreground">×</span>
                                </button>
                              ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </StepShell>
  );
}
