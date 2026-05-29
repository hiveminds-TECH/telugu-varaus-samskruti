import { motion } from "framer-motion";
import { format, parseISO } from "date-fns";
import { usePlan, datesInRange } from "@/store/plan";
import { useT, pickLabel } from "@/hooks/useT";
import { findDishLabel, mealOrder } from "@/lib/meals";
import { strings } from "@/i18n/strings";
import { JasmineSprig, MarigoldDot } from "@/components/illustrations";

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-1 border-b border-dashed border-border/80 py-3 last:border-0"
    >
      <div className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className="font-serif text-lg italic text-foreground">{value}</div>
    </motion.div>
  );
}

export function Notebook() {
  const { t, lang } = useT();
  const p = usePlan();

  const occasionLabel = p.occasion
    ? pickLabel(strings[p.occasion as keyof typeof strings], lang)
    : null;

  const sideLabel =
    p.side && p.side !== "na"
      ? pickLabel(
          strings[
            (p.side === "bride"
              ? "brideSide"
              : p.side === "groom"
                ? "groomSide"
                : "bothSides") as keyof typeof strings
          ],
          lang,
        )
      : null;

  const venueLabel = p.venueType
    ? pickLabel(
        strings[
          (p.venueType === "hall"
            ? "functionHall"
            : p.venueType === "home"
              ? "home"
              : p.venueType === "outdoor"
                ? "outdoor"
                : p.venueType === "temple"
                  ? "temple"
                  : "other") as keyof typeof strings
        ],
        lang,
      )
    : null;

  const dates = datesInRange(p.startDate, p.endDate);
  const hasMenu =
    dates.length > 0 &&
    dates.some((d) => mealOrder.some((m) => (p.mealsByDay[d]?.[m]?.length ?? 0) > 0));

  // Completion checklist — 6 milestones
  const checks = [
    !!p.occasion,
    !!p.name.trim(),
    dates.length > 0,
    hasMenu,
    p.guests > 0,
    !!p.venueType,
  ];
  const completed = checks.filter(Boolean).length;
  const pct = Math.round((completed / checks.length) * 100);

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

      {/* Progress bar */}
      <div className="border-b border-dashed border-border px-6 py-4">
        <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{completed} / {checks.length}</span>
          <span className="font-semibold text-primary">{pct}%</span>
        </div>
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary">
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
            {p.name && <Row label={t("nameLabel")} value={p.name} />}
            {occasionLabel && <Row label={t("occasionLabel")} value={occasionLabel} />}
            {sideLabel && <Row label={t("sideLabel")} value={sideLabel} />}
            {dates.length > 0 && (
              <Row
                label={t("datesLabel")}
                value={
                  dates.length === 1
                    ? format(parseISO(dates[0]), "EEE, MMM d")
                    : `${format(parseISO(dates[0]), "MMM d")} → ${format(
                        parseISO(dates[dates.length - 1]),
                        "MMM d",
                      )} · ${dates.length} ${t("day")}s`
                }
              />
            )}
            {p.guests > 0 && (p.venueType || dates.length > 0) && (
              <Row label={t("guestsLabel")} value={`~${p.guests} ${t("guestsUnit")}`} />
            )}
            {venueLabel && (
              <Row
                label={t("venueLabel")}
                value={
                  <span>
                    {venueLabel}
                    {p.address && (
                      <span className="block text-sm not-italic text-muted-foreground">
                        {p.address}
                      </span>
                    )}
                  </span>
                }
              />
            )}
            {hasMenu && (
              <div className="pt-4">
                <div className="mb-2 text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {t("menuLabel")}
                </div>
                <div className="flex flex-col gap-4">
                  {dates.map((d, di) => {
                    const day = p.mealsByDay[d];
                    const hasMeals = day && mealOrder.some((m) => (day[m]?.length ?? 0) > 0);
                    if (!hasMeals) return null;
                    return (
                      <div key={d} className="flex flex-col gap-1.5">
                        <div className="font-display text-base text-primary">
                          {t("day")} {di + 1} · {format(parseISO(d), "EEE, MMM d")}
                        </div>
                        {mealOrder.map((m) => {
                          const list = day[m] ?? [];
                          if (list.length === 0) return null;
                          return (
                            <div key={m} className="flex gap-2 text-sm">
                              <span className="w-20 shrink-0 text-muted-foreground">
                                {t(m)}
                              </span>
                              <span className="font-serif italic text-foreground">
                                {list
                                  .map((id) => {
                                    const lbl = findDishLabel(m, id);
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
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
