import { useNavigate, Link } from "react-router-dom";
import { StepShell } from "@/components/StepShell";
import { useT, pickLabel } from "@/hooks/useT";
import { usePlan, datesInRange } from "@/store/plan";
import { findDishLabel, mealOrder } from "@/lib/meals";
import { formatPlanDate } from "@/lib/formatDate";
import { Underline } from "@/components/illustrations";
import type { StringKey } from "@/i18n";

function Section({
  label,
  to,
  children,
}: {
  label: string;
  to: string;
  children: React.ReactNode;
}) {
  const { t } = useT();
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-card p-5 hairline shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <Link
          to={to}
          className="text-xs uppercase tracking-[0.15em] text-primary hover:underline"
        >
          {t("edit")}
        </Link>
      </div>
      <div className="font-serif text-lg italic text-foreground">{children}</div>
    </div>
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

export default function ReviewStep() {
  const { t, lang } = useT();
  const p = usePlan();
  const navigate = useNavigate();
  const dates = datesInRange(p.startDate, p.endDate);

  return (
    <StepShell
      kicker={t("reviewKicker")}
      title={t("reviewQ")}
      subtitle={t("reviewSub")}
      back={{ to: "/plan/venue" }}
      next={{ onClick: () => navigate("/plan/confirm"), label: t("confirmBtn") }}
    >
      <div className="flex flex-col gap-3">
        {p.name && (
          <Section label={t("nameLabel")} to="/plan/intro">
            {p.name}
          </Section>
        )}
        {p.mobile && (
          <Section label={t("mobileLabel")} to="/plan/mobile">
            {p.mobile}
          </Section>
        )}
        {p.occasion && (
          <Section label={t("occasionLabel")} to="/plan/occasion">
            {t(p.occasion as StringKey)}
          </Section>
        )}
        {p.side && p.side !== "na" && (
          <Section label={t("sideLabel")} to="/plan/side">
            {t(sideKey(p.side))}
          </Section>
        )}
        {dates.length > 0 && (
          <Section label={t("datesLabel")} to="/plan/dates">
            {dates.length === 1
              ? formatPlanDate(dates[0], lang, "long")
              : `${formatPlanDate(dates[0], lang)} → ${formatPlanDate(dates[dates.length - 1], lang)} · ${dates.length} ${t("days")}`}
          </Section>
        )}
        {dates.length > 0 && (
          <div className="flex flex-col gap-2 rounded-2xl bg-card p-5 hairline shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("menuLabel")}
              </span>
              <Link
                to="/plan/meals"
                className="text-xs uppercase tracking-[0.15em] text-primary hover:underline"
              >
                {t("edit")}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {dates.map((d, i) => {
                const day = p.mealsByDay[d];
                if (!day) return null;
                const hasAny = mealOrder.some((m) => (day[m]?.length ?? 0) > 0);
                if (!hasAny) return null;
                return (
                  <div key={d} className="flex flex-col gap-1">
                    <div className="relative inline-block font-display text-lg text-primary">
                      {t("day")} {i + 1} · {formatPlanDate(d, lang, "long")}
                      <Underline className="absolute -bottom-1 left-0 h-1.5 w-24 text-gold" />
                    </div>
                    {mealOrder.map((m) => {
                      const list = day[m] ?? [];
                      if (list.length === 0) return null;
                      return (
                        <div key={m} className="flex gap-2 text-sm">
                          <span className="w-24 shrink-0 text-muted-foreground">{t(m)}</span>
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
        <Section label={t("guestsLabel")} to="/plan/guests">
          ~{p.guests} {t("guestsUnit")}
        </Section>
        {p.venueType && (
          <Section label={t("venueLabel")} to="/plan/venue">
            {t(venueKey(p.venueType))}
            {p.address && (
              <div className="text-sm not-italic text-muted-foreground">{p.address}</div>
            )}
          </Section>
        )}
      </div>
    </StepShell>
  );
}
