import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { StepShell } from "@/components/StepShell";
import { useT } from "@/hooks/useT";
import { usePlan, datesInRange } from "@/store/plan";
import { format, parseISO } from "date-fns";

export const Route = createFileRoute("/plan/dates")({
  head: () => ({ meta: [{ title: "Dates — CaterFlow" }] }),
  component: DatesStep,
});

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function DatesStep() {
  const { t } = useT();
  const startDate = usePlan((s) => s.startDate);
  const endDate = usePlan((s) => s.endDate);
  const setDates = usePlan((s) => s.setDates);
  const navigate = useNavigate();

  const min = todayISO();
  const days = datesInRange(startDate, endDate);

  function update(s: string | null, e: string | null) {
    setDates(s ?? "", e ?? "");
  }

  return (
    <StepShell
      kicker="Step 4"
      title={t("datesQ")}
      subtitle={t("datesSub")}
      back={{ to: "/plan/intro" }}
      next={{
        onClick: () => navigate({ to: "/plan/meals" }),
        disabled: !startDate || !endDate || days.length === 0,
      }}
    >
      <div className="mx-auto flex max-w-xl flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 rounded-2xl bg-card p-5 hairline shadow-soft">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("startDate")}
            </span>
            <input
              type="date"
              min={min}
              value={startDate ?? ""}
              onChange={(e) => update(e.target.value, endDate ?? e.target.value)}
              className="bg-transparent font-display text-2xl text-foreground focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 rounded-2xl bg-card p-5 hairline shadow-soft">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("endDate")}
            </span>
            <input
              type="date"
              min={startDate ?? min}
              value={endDate ?? ""}
              onChange={(e) => update(startDate, e.target.value)}
              className="bg-transparent font-display text-2xl text-foreground focus:outline-none"
            />
          </label>
        </div>

        {days.length > 0 && (
          <div className="rounded-2xl bg-gold-soft/40 p-4 paper-grain">
            <p className="font-serif italic text-foreground">
              {days.length === 1
                ? `Okka roju — ${format(parseISO(days[0]), "EEEE, MMMM d")} 🌿`
                : `${days.length} rojulu — ${format(parseISO(days[0]), "MMM d")} nundi ${format(
                    parseISO(days[days.length - 1]),
                    "MMM d",
                  )} varaku 🌿`}
            </p>
          </div>
        )}
      </div>
    </StepShell>
  );
}
