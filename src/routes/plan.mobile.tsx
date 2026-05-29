import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { StepShell } from "@/components/StepShell";
import { useT } from "@/hooks/useT";
import { usePlan } from "@/store/plan";

export const Route = createFileRoute("/plan/mobile")({
  head: () => ({ meta: [{ title: "Mobile — CaterFlow" }] }),
  component: MobileStep,
});

function MobileStep() {
  const { t } = useT();
  const mobile = usePlan((s) => s.mobile);
  const setMobile = usePlan((s) => s.setMobile);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(val);
    setError("");
  }

  function handleNext() {
    if (mobile.length !== 10) {
      setError(t("mobileError"));
      return;
    }
    navigate({ to: "/plan/dates" });
  }

  return (
    <StepShell
      kicker="Step 4"
      step={4}
      totalSteps={8}
      title={t("mobileQ")}
      subtitle={t("mobileSub")}
      back={{ to: "/plan/intro" }}
      next={{
        onClick: handleNext,
        disabled: mobile.length !== 10,
      }}
    >
      <div className="mx-auto max-w-lg">
        <div className="flex flex-col gap-3">
          <input
            type="tel"
            value={mobile}
            onChange={handleChange}
            placeholder={t("mobilePlaceholder")}
            inputMode="numeric"
            maxLength={10}
            className="w-full rounded-2xl bg-card px-6 py-5 text-2xl font-display text-foreground placeholder:text-muted-foreground/60 hairline shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
            autoFocus
          />
          {error && (
            <p className="text-sm text-red-600 font-medium">{error}</p>
          )}
          {mobile.length === 10 && !error && (
            <p className="font-serif italic text-muted-foreground">
              Chala bagundi 🌿 — next step lo dates select cheskondi.
            </p>
          )}
        </div>
      </div>
    </StepShell>
  );
}
