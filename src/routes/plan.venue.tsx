import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { StepShell } from "@/components/StepShell";
import { ChoiceCard } from "@/components/ChoiceCard";
import { useT } from "@/hooks/useT";
import { usePlan, type VenueType } from "@/store/plan";
import {
  HallIcon,
  HomeIcon,
  OutdoorIcon,
  TempleIcon,
  OtherIcon,
} from "@/components/illustrations";

export const Route = createFileRoute("/plan/venue")({
  head: () => ({ meta: [{ title: "Venue — CaterFlow" }] }),
  component: VenueStep,
});

const items: Array<{
  id: VenueType;
  key: "functionHall" | "home" | "outdoor" | "temple" | "other";
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}> = [
  { id: "hall", key: "functionHall", Icon: HallIcon },
  { id: "home", key: "home", Icon: HomeIcon },
  { id: "outdoor", key: "outdoor", Icon: OutdoorIcon },
  { id: "temple", key: "temple", Icon: TempleIcon },
  { id: "other", key: "other", Icon: OtherIcon },
];

function VenueStep() {
  const { t } = useT();
  const venueType = usePlan((s) => s.venueType);
  const setVenue = usePlan((s) => s.setVenue);
  const address = usePlan((s) => s.address);
  const setAddress = usePlan((s) => s.setAddress);
  const navigate = useNavigate();

  return (
    <StepShell
      kicker="Step 7"
      step={7}
      title={t("venueQ")}
      subtitle={t("venueSub")}
      back={{ to: "/plan/guests" }}
      next={{
        onClick: () => navigate({ to: "/plan/review" }),
        disabled: !venueType,
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((it) => (
            <ChoiceCard
              key={it.id}
              selected={venueType === it.id}
              onClick={() => setVenue(it.id, address)}
              icon={<it.Icon className="h-20 w-20" />}
              title={t(it.key)}
            />
          ))}
        </div>

        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder={t("addressPlaceholder")}
          rows={3}
          className="w-full rounded-2xl bg-card px-5 py-4 text-base text-foreground hairline shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </StepShell>
  );
}
