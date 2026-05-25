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
}

export function StepShell({ kicker, title, subtitle, children, back, next, skip }: Props) {
  const { t } = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-10 md:py-16"
    >
      <header className="flex flex-col gap-3">
        {kicker && (
          <span className="font-serif text-base italic text-primary">{kicker}</span>
        )}
        <h1 className="relative inline-block font-display text-4xl leading-tight text-foreground md:text-5xl">
          {title}
          <Underline className="absolute -bottom-2 left-0 h-2 w-32 text-gold" />
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        )}
      </header>

      <div className="flex-1">{children}</div>

      <nav className="mt-2 flex items-center justify-between gap-3 pt-4">
        {back ? (
          <Link
            to={back.to}
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
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
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              {skip.label ?? t("skip")}
            </button>
          )}
          {next && (
            <button
              onClick={next.onClick}
              disabled={next.disabled}
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-lifted disabled:cursor-not-allowed disabled:opacity-40"
            >
              {next.label ?? t("next")} →
            </button>
          )}
        </div>
      </nav>
    </motion.div>
  );
}
