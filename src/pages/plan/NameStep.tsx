import { useNavigate } from "react-router-dom";
import { StepShell } from "@/components/StepShell";
import { useT } from "@/hooks/useT";
import { usePlan } from "@/store/plan";

export default function NameStep() {
  const { t } = useT();
  const name = usePlan((s) => s.name);
  const setName = usePlan((s) => s.setName);
  const occasion = usePlan((s) => s.occasion);
  const navigate = useNavigate();

  return (
    <StepShell
      kicker="Step 3"
      step={3}
      totalSteps={8}
      title={t("introQ")}
      subtitle={t("introSub")}
      back={{ to: occasion === "wedding" ? "/plan/side" : "/plan/occasion" }}
      next={{
        onClick: () => navigate("/plan/mobile"),
        disabled: !name.trim(),
      }}
    >
      <div className="mx-auto max-w-lg">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("namePlaceholder")}
          className="w-full rounded-2xl bg-card px-6 py-5 text-2xl font-display text-foreground placeholder:text-muted-foreground/60 hairline shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
          autoFocus
        />
        {name.trim() && (
          <p className="mt-4 font-serif italic text-muted-foreground">
            చాలా బాగుంది, {name.trim()} 🌿 — next step lo mobile number cheppandi.
          </p>
        )}
      </div>
    </StepShell>
  );
}
