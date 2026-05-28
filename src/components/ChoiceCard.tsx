import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  selected?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export function ChoiceCard({ selected, onClick, icon, title, subtitle, className }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group flex w-full flex-col items-center gap-3 rounded-3xl bg-card p-5 text-center transition-shadow",
        "hairline shadow-soft hover:shadow-lifted",
        selected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
        className,
      )}
    >
      {icon && (
        <div className="flex h-20 w-20 items-center justify-center text-foreground">
          {icon}
        </div>
      )}
      <div className="flex flex-col items-center gap-0.5">
        <div className="font-display text-xl leading-tight text-foreground">{title}</div>
        {subtitle && (
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        )}
      </div>
    </motion.button>
  );
}
