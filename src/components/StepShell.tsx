import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useT } from "@/hooks/useT";
import { Underline } from "@/components/illustrations";

interface Props {
  kicker?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  back?: { to: string };
  next?: { onClick: () => void; disabled?: boolean; label?: string };
  skip?: { onClick: () => void; label?: string };
  step?: number;
  totalSteps?: number;
}

export function StepShell({
  kicker,
  title,
  subtitle,
  children,
  back,
  next,
  skip,
  step,
  totalSteps = 8,
}: Props) {
  const { t } = useT();
  const pct =
    typeof step === "number"
      ? Math.min(100, Math.round((step / totalSteps) * 100))
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-3xl flex-col gap-7 px-5 py-8 md:py-12"
    >
      {pct !== null && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>
              {t("day").toLowerCase() === "day" ? "Step" : "Step"} {step} / {totalSteps}
            </span>
            <span className="font-medium text-primary">{pct}%</span>
          </div>
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-gold"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <header className="flex flex-col gap-3">
        {kicker && (
          <span className="font-serif text-base italic text-primary">{kicker}</span>
        )}
        <h1 className="relative inline-block font-display text-[2.25rem] leading-[1.08] text-foreground md:text-5xl">
          {title}
          <Underline className="absolute -bottom-2 left-0 h-2 w-32 text-gold" />
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
      </header>

      <div className="flex-1">{children}</div>

      <nav className="mt-2 flex items-center justify-between gap-3 pt-4">
        {back ? (
          <Link
            to={back.to}
            className="rounded-full px-4 py-2.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            ← {t("back")}
          </Link>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-2">
          {skip && (
            <button
              onClick={skip.onClick}
              className="rounded-full px-4 py-2.5 text-sm text-muted-foreground transition hover:text-foreground"
            >
              {skip.label ?? t("skip")}
            </button>
          )}
          {next && (
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={next.onClick}
              disabled={next.disabled}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-lifted transition hover:shadow-[0_24px_50px_-20px_oklch(0.54_0.11_234/0.55)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-soft"
            >
              {next.label ?? t("next")} →
            </motion.button>
          )}
        </div>
      </nav>
    </motion.div>
  );
}
