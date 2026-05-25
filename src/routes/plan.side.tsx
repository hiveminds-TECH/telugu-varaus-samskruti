import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { StepShell } from "@/components/StepShell";
import { ChoiceCard } from "@/components/ChoiceCard";
import { useT } from "@/hooks/useT";
import { usePlan, type Side } from "@/store/plan";

export const Route = createFileRoute("/plan/side")({
  head: () => ({
    meta: [{ title: "Which side? — CaterFlow" }],
  }),
  component: SideStep,
});

function SideStep() {
  const { t } = useT();
  const side = usePlan((s) => s.side);
  const setSide = usePlan((s) => s.setSide);
  const navigate = useNavigate();

  function pick(s: Side) {
    setSide(s);
    setTimeout(() => navigate({ to: "/plan/intro" }), 220);
  }

  const items: Array<{ id: Side; key: "brideSide" | "groomSide" | "bothSides" }> = [
    { id: "bride", key: "brideSide" },
    { id: "groom", key: "groomSide" },
    { id: "both", key: "bothSides" },
  ];

  return (
    <StepShell
      kicker="Step 2"
      title={t("sideQ")}
      subtitle={t("sideSub")}
      back={{ to: "/plan/occasion" }}
      next={{ onClick: () => navigate({ to: "/plan/intro" }), disabled: !side || side === "na" }}
      skip={{ onClick: () => navigate({ to: "/plan/intro" }) }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it) => (
          <ChoiceCard
            key={it.id}
            selected={side === it.id}
            onClick={() => pick(it.id)}
            title={t(it.key)}
          />
        ))}
      </div>
    </StepShell>
  );
}
