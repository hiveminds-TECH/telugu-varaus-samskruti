import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { StepShell } from "@/components/StepShell";
import { ChoiceCard } from "@/components/ChoiceCard";
import { useT } from "@/hooks/useT";
import { usePlan, type Occasion } from "@/store/plan";
import {
  WeddingIcon,
  BirthdayIcon,
  HousewarmingIcon,
  ReligiousIcon,
  CorporateIcon,
  OtherIcon,
} from "@/components/illustrations";

export const Route = createFileRoute("/plan/occasion")({
  head: () => ({
    meta: [
      { title: "Pick the occasion — CaterFlow" },
      { name: "description", content: "Tell us what you're celebrating." },
    ],
  }),
  component: OccasionStep,
});

const items: Array<{ id: Occasion; key: "wedding" | "birthday" | "housewarming" | "religious" | "corporate" | "other"; Icon: React.FC<React.SVGProps<SVGSVGElement>> }> = [
  { id: "wedding", key: "wedding", Icon: WeddingIcon },
  { id: "birthday", key: "birthday", Icon: BirthdayIcon },
  { id: "housewarming", key: "housewarming", Icon: HousewarmingIcon },
  { id: "religious", key: "religious", Icon: ReligiousIcon },
  { id: "corporate", key: "corporate", Icon: CorporateIcon },
  { id: "other", key: "other", Icon: OtherIcon },
];

function OccasionStep() {
  const { t } = useT();
  const occasion = usePlan((s) => s.occasion);
  const setOccasion = usePlan((s) => s.setOccasion);
  const navigate = useNavigate();

  function pick(o: Occasion) {
    setOccasion(o);
    setTimeout(() => {
      navigate({ to: o === "wedding" ? "/plan/side" : "/plan/intro" });
    }, 220);
  }

  return (
    <StepShell
      kicker="Step 1"
      title={t("occasionQ")}
      subtitle={t("occasionSub")}
      back={{ to: "/welcome" }}
      next={{
        onClick: () =>
          navigate({ to: occasion === "wedding" ? "/plan/side" : "/plan/intro" }),
        disabled: !occasion,
      }}
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((it) => (
          <ChoiceCard
            key={it.id}
            selected={occasion === it.id}
            onClick={() => pick(it.id)}
            icon={<it.Icon className="h-20 w-20" />}
            title={t(it.key)}
          />
        ))}
      </div>
    </StepShell>
  );
}
