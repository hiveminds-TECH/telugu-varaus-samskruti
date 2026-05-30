import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StepShell } from "@/components/StepShell";
import { useT } from "@/hooks/useT";
import { usePlan } from "@/store/plan";

export default function MobileStep() {
  const { t } = useT();
  const mobile = usePlan((s) => s.mobile);
  const setMobile = usePlan((s) => s.setMobile);
  const occasion = usePlan((s) => s.occasion);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const stepNum = occasion === "wedding" ? 4 : 3;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(val);
    setError("");
  }

  function handleNext() {
    setTouched(true);
    if (mobile.length !== 10) {
      setError(t("mobileError"));
      return;
    }
    navigate("/plan/dates");
  }

  const showError = touched && mobile.length > 0 && mobile.length !== 10;

  return (
    <StepShell
      kicker={t("stepKicker", { step: stepNum })}
      step={stepNum}
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
            onBlur={() => setTouched(true)}
            placeholder={t("mobilePlaceholder")}
            aria-label={t("mobilePlaceholder")}
            aria-invalid={showError || !!error}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="tel"
            maxLength={10}
            className={`w-full rounded-2xl bg-card px-6 py-5 text-2xl font-display tracking-widest text-foreground placeholder:text-muted-foreground/60 placeholder:tracking-normal hairline shadow-soft focus:outline-none focus:ring-2 ${
              showError || error ? "ring-2 ring-red-500/60" : "focus:ring-primary"
            }`}
            autoFocus
          />
          {(error || showError) && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {error || t("mobileError")}
            </p>
          )}
          {mobile.length === 10 && !error && (
            <p className="font-serif italic text-muted-foreground">{t("mobileConfirmation")}</p>
          )}
        </div>
      </div>
    </StepShell>
  );
}
