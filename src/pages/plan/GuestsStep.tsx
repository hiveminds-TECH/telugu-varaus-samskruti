import { useNavigate } from "react-router-dom";
import { StepShell } from "@/components/StepShell";
import { useT } from "@/hooks/useT";
import { usePlan } from "@/store/plan";

export default function GuestsStep() {
  const { t } = useT();
  const guests = usePlan((s) => s.guests);
  const setGuests = usePlan((s) => s.setGuests);
  const occasion = usePlan((s) => s.occasion);
  const navigate = useNavigate();

  const stepNum = occasion === "wedding" ? 7 : 6;

  function bump(delta: number) {
    setGuests(Math.max(10, Math.min(2000, guests + delta)));
  }

  const playful =
    guests < 50
      ? t("guestsSmall")
      : guests < 150
        ? t("guestsMedium")
        : guests < 400
          ? t("guestsLarge")
          : t("guestsMega");

  return (
    <StepShell
      kicker={t("stepKicker", { step: stepNum })}
      step={stepNum}
      totalSteps={8}
      title={t("guestsQ")}
      subtitle={t("guestsSub")}
      back={{ to: "/plan/meals" }}
      next={{ onClick: () => navigate("/plan/venue") }}
    >
      <div className="mx-auto flex max-w-md flex-col items-center gap-6">
        <div className="flex w-full items-center justify-center gap-4 rounded-3xl bg-card p-6 paper-grain hairline shadow-soft">
          <button
            type="button"
            onClick={() => bump(-10)}
            aria-label="-10"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl text-foreground transition hover:shadow-soft"
          >
            −
          </button>
          <div className="flex flex-1 flex-col items-center">
            <span className="font-display text-6xl text-foreground">{guests}</span>
            <span className="font-serif italic text-muted-foreground">{t("guestsUnit")}</span>
          </div>
          <button
            type="button"
            onClick={() => bump(10)}
            aria-label="+10"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground transition hover:shadow-soft"
          >
            +
          </button>
        </div>

        <input
          type="range"
          min={10}
          max={1000}
          step={10}
          value={Math.min(guests, 1000)}
          onChange={(e) => setGuests(Number(e.target.value))}
          aria-label={t("guestsQ")}
          className="w-full accent-primary"
        />

        <p className="font-serif text-lg italic text-primary">{playful}</p>
      </div>
    </StepShell>
  );
}
