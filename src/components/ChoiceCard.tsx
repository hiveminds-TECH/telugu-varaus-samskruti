import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  selected?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function ChoiceCard({
  selected,
  onClick,
  icon,
  title,
  subtitle,
  description,
  className,
}: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative flex w-full flex-col items-center gap-3 overflow-hidden rounded-3xl bg-card p-5 text-center transition-all",
        "hairline shadow-soft hover:shadow-lifted hover:bg-gradient-to-b hover:from-card hover:to-[color-mix(in_oklab,var(--gold)_8%,var(--card))]",
        selected &&
          "ring-2 ring-primary ring-offset-2 ring-offset-background bg-gradient-to-b from-card to-gold-soft/40",
        className,
      )}
    >
      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground shadow-soft"
        >
          ✓
        </motion.span>
      )}
      {icon && (
        <div className="flex h-20 w-20 items-center justify-center text-foreground transition-transform group-hover:scale-105">
          {icon}
        </div>
      )}
      <div className="flex flex-col items-center gap-1">
        <div className="font-display text-xl leading-tight text-foreground">{title}</div>
        {subtitle && (
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        )}
        {description && (
          <div className="mt-0.5 max-w-[18ch] font-serif text-[0.92rem] italic leading-snug text-muted-foreground">
            {description}
          </div>
        )}
      </div>
    </motion.button>
  );
}
