import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useT } from "@/hooks/useT";
import { usePlan } from "@/store/plan";
import { HeroIllustration, Underline } from "@/components/illustrations";

export const Route = createFileRoute("/plan/confirm")({
  head: () => ({ meta: [{ title: "Plan ready — CaterFlow" }] }),
  component: ConfirmStep,
});

function ConfirmStep() {
  const { t } = useT();
  const name = usePlan((s) => s.name);
  const reset = usePlan((s) => s.reset);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-16 text-center"
    >
      <div className="w-full max-w-sm rounded-[2rem] bg-card p-6 paper-grain hairline shadow-lifted">
        <HeroIllustration className="w-full" />
      </div>
      <span className="font-serif italic text-primary">
        {name ? `${name},` : ""}
      </span>
      <h1 className="relative inline-block font-display text-4xl text-foreground md:text-5xl">
        {t("confirmTitle")}
        <Underline className="absolute -bottom-3 left-1/2 h-3 w-40 -translate-x-1/2 text-gold" />
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">{t("confirmBody")}</p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => navigate({ to: "/plan/review" })}
          className="rounded-full bg-card px-5 py-2.5 text-sm text-foreground hairline transition hover:shadow-soft"
        >
          {t("edit")}
        </button>
        <button
          onClick={() => {
            reset();
            navigate({ to: "/plan/occasion" });
          }}
          className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground shadow-soft transition hover:shadow-lifted"
        >
          {t("newPlan")} →
        </button>
      </div>
    </motion.div>
  );
}
