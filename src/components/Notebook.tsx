import { motion } from "framer-motion";
import { usePlan, datesInRange } from "@/store/plan";
import { useT, pickLabel } from "@/hooks/useT";
import { findDishLabel, mealOrder } from "@/lib/meals";
import { formatPlanDate } from "@/lib/formatDate";
import { JasmineSprig, MarigoldDot } from "@/components/illustrations";
import type { StringKey } from "@/i18n";

function Row({ label, value, done }: { label: string; value: React.ReactNode; done?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-1 border-b border-dashed border-border/80 py-3 last:border-0"
    >
      <div className="flex items-center gap-2">
        <span
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] ${
            done ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          }`}
        >
          {done ? "✓" : ""}
        </span>
        <div className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </div>
      </div>
      <div className="pl-6 font-serif text-lg italic text-foreground">{value}</div>
    </motion.div>
  );
}

function venueKey(venueType: string): StringKey {
  if (venueType === "hall") return "functionHall";
  if (venueType === "home") return "home";
  if (venueType === "outdoor") return "outdoor";
  if (venueType === "temple") return "temple";
  return "other";
}

function sideKey(side: string): StringKey {
  if (side === "bride") return "brideSide";
  if (side === "groom") return "groomSide";
  return "bothSides";
}

export function Notebook() {
  const { t, lang } = useT();
  const p = usePlan();

  const dates = datesInRange(p.startDate, p.endDate);
  const hasMenu =
    dates.length > 0 &&
    dates.some((d) => mealOrder.some((m) => (p.mealsByDay[d]?.[m]?.length ?? 0) > 0));

  const milestones = [
    { key: "occasionLabel" as const, done: !!p.occasion, value: p.occasion ? t(p.occasion as StringKey) : null },
    { key: "sideLabel" as const, done: !!p.side && p.side !== "na", value: p.side && p.side !== "na" ? t(sideKey(p.side)) : null },
    { key: "nameLabel" as const, done: !!p.name.trim(), value: p.name.trim() || null },
    { key: "mobileLabel" as const, done: p.mobile.length === 10, value: p.mobile || null },
    { key: "datesLabel" as const, done: dates.length > 0, value: dates.length > 0
      ? dates.length === 1
        ? formatPlanDate(dates[0], lang, "long")
        : `${formatPlanDate(dates[0], lang)} → ${formatPlanDate(dates[dates.length - 1], lang)} · ${dates.length} ${t("days")}`
      : null },
    { key: "guestsLabel" as const, done: p.guests > 0, value: p.guests > 0 ? `~${p.guests} ${t("guestsUnit")}` : null },
    { key: "venueLabel" as const, done: !!p.venueType, value: p.venueType ? t(venueKey(p.venueType)) : null },
    { key: "menuLabel" as const, done: hasMenu, value: hasMenu ? t("menuLabel") : null },
  ];

  const completed = milestones.filter((m) => m.done).length;
  const pct = Math.round((completed / milestones.length) * 100);
  const hasAny = completed > 0;

  return (
    <aside
      className="paper-grain relative flex h-full flex-col overflow-hidden rounded-3xl shadow-lifted"
      style={{
        backgroundColor: "var(--cream)",
        border: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
      }}
    >
      <div className="flex items-start justify-between gap-3 border-b border-dashed border-border px-6 pt-5 pb-4">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/80">
            {t("brand")}
          </span>
          <span className="font-display text-[1.6rem] leading-tight text-foreground">
            {t("notebookTitle")}
          </span>
        </div>
        <MarigoldDot className="mt-1 h-5 w-5 shrink-0" />
      </div>

      <div className="border-b border-dashed border-border px-6 py-4">
        <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{t("notebookProgress")}</span>
          <span>
            {t("progressComplete", { completed, total: milestones.length })} ·{" "}
            <span className="font-semibold text-primary">{pct}%</span>
          </span>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-gold to-marigold"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {!hasAny ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <JasmineSprig className="h-8 w-32 opacity-70" />
            <p className="max-w-xs font-serif italic text-muted-foreground">
              {t("notebookEmpty")}
            </p>
            <JasmineSprig className="h-8 w-32 rotate-180 opacity-70" />
          </div>
        ) : (
          <div>
            {milestones.map((m) => {
              if (!m.value && !m.done) return null;
              if (m.key === "menuLabel" && hasMenu) {
                return (
                  <div key={m.key} className="border-b border-dashed border-border/80 py-3">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[9px] text-primary-foreground">
                        ✓
                      </span>
                      <div className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        {t(m.key)}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 pl-6 pt-2">
                      {dates.map((d, di) => {
                        const day = p.mealsByDay[d];
                        const hasMeals = day && mealOrder.some((me) => (day[me]?.length ?? 0) > 0);
                        if (!hasMeals) return null;
                        return (
                          <div key={d} className="flex flex-col gap-1.5">
                            <div className="font-display text-base text-primary">
                              {t("day")} {di + 1} · {formatPlanDate(d, lang, "long")}
                            </div>
                            {mealOrder.map((me) => {
                              const list = day[me] ?? [];
                              if (list.length === 0) return null;
                              return (
                                <div key={me} className="flex gap-2 text-sm">
                                  <span className="w-20 shrink-0 text-muted-foreground">
                                    {t(me)}
                                  </span>
                                  <span className="font-serif italic text-foreground">
                                    {list
                                      .map((id) => {
                                        const lbl = findDishLabel(me, id);
                                        return lbl ? pickLabel(lbl, lang) : id;
                                      })
                                      .join(", ")}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              if (m.key === "menuLabel") return null;
              if (m.key === "venueLabel" && p.venueType) {
                return (
                  <Row
                    key={m.key}
                    label={t(m.key)}
                    done={m.done}
                    value={
                      <span>
                        {t(venueKey(p.venueType!))}
                        {p.address && (
                          <span className="block text-sm not-italic text-muted-foreground">
                            {p.address}
                          </span>
                        )}
                      </span>
                    }
                  />
                );
              }
              if (!m.value) return null;
              return <Row key={m.key} label={t(m.key)} value={m.value} done={m.done} />;
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
