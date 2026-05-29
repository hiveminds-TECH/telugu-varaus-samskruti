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
const items: Array<{
  id: Occasion;
  key: "wedding" | "birthday" | "housewarming" | "religious" | "corporate" | "other";
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  blurb: { te: string; ting: string; en: string };
}> = [
  {
    id: "wedding",
    key: "wedding",
    Icon: WeddingIcon,
    blurb: { te: "ఏడేళ్ల బంధానికి మొదలు", ting: "Pelli celebrations", en: "Wedding celebrations" },
  },
  {
    id: "birthday",
    key: "birthday",
    Icon: BirthdayIcon,
    blurb: { te: "మరో ఏడాది ఆనందం", ting: "Cake, cousins, candles", en: "Cake & candles" },
  },
  {
    id: "housewarming",
    key: "housewarming",
    Icon: HousewarmingIcon,
    blurb: { te: "కొత్త ఇంటి శుభారంభం", ting: "New beginnings", en: "A fresh new home" },
  },
  {
    id: "religious",
    key: "religious",
    Icon: ReligiousIcon,
    blurb: { te: "భక్తి, ఆశీర్వాదాలు", ting: "Pooja & pandagalu", en: "Blessings at home" },
  },
  {
    id: "corporate",
    key: "corporate",
    Icon: CorporateIcon,
    blurb: { te: "ఆఫీస్ స్నేహితుల సమావేశం", ting: "Office gatherings", en: "Team get-togethers" },
  },
  {
    id: "other",
    key: "other",
    Icon: OtherIcon,
    blurb: { te: "ఇంకేదైనా ప్రత్యేకం", ting: "Something special", en: "Something special" },
  },
];

function OccasionStep() {
  const { t, lang } = useT();
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
      step={1}
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
            description={it.blurb[lang] ?? it.blurb.ting}
          />
        ))}
      </div>
    </StepShell>
  );
}
