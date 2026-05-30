import { useNavigate } from "react-router-dom";
import { StepShell } from "@/components/StepShell";
import { ChoiceCard } from "@/components/ChoiceCard";
import { useT } from "@/hooks/useT";
import { usePlan, type Occasion } from "@/store/plan";
import type { StringKey } from "@/i18n";
import {
  WeddingIcon,
  BirthdayIcon,
  HousewarmingIcon,
  ReligiousIcon,
  CorporateIcon,
  OtherIcon,
} from "@/components/illustrations";

const items: Array<{
  id: Occasion;
  key: StringKey;
  blurbKey: StringKey;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}> = [
  { id: "wedding", key: "wedding", blurbKey: "occasionBlurbWedding", Icon: WeddingIcon },
  { id: "birthday", key: "birthday", blurbKey: "occasionBlurbBirthday", Icon: BirthdayIcon },
  { id: "housewarming", key: "housewarming", blurbKey: "occasionBlurbHousewarming", Icon: HousewarmingIcon },
  { id: "religious", key: "religious", blurbKey: "occasionBlurbReligious", Icon: ReligiousIcon },
  { id: "corporate", key: "corporate", blurbKey: "occasionBlurbCorporate", Icon: CorporateIcon },
  { id: "other", key: "other", blurbKey: "occasionBlurbOther", Icon: OtherIcon },
];

export default function OccasionStep() {
  const { t } = useT();
  const occasion = usePlan((s) => s.occasion);
  const setOccasion = usePlan((s) => s.setOccasion);
  const navigate = useNavigate();

  function pick(o: Occasion) {
    setOccasion(o);
    setTimeout(() => {
      navigate(o === "wedding" ? "/plan/side" : "/plan/intro");
    }, 220);
  }

  return (
    <StepShell
      kicker={t("stepKicker", { step: 1 })}
      step={1}
      totalSteps={8}
      title={t("occasionQ")}
      subtitle={t("occasionSub")}
      back={{ to: "/welcome" }}
      next={{
        onClick: () =>
          navigate(occasion === "wedding" ? "/plan/side" : "/plan/intro"),
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
            description={t(it.blurbKey)}
          />
        ))}
      </div>
    </StepShell>
  );
}
