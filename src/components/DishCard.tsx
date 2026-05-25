import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  selected: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

export function DishCard({ selected, onClick, icon, label }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center gap-2 rounded-2xl bg-card p-3 text-center transition-shadow",
        "hairline shadow-soft hover:shadow-lifted",
        selected && "ring-2 ring-primary ring-offset-2 ring-offset-background bg-gold-soft/40",
      )}
    >
      <div className="h-16 w-16">{icon}</div>
      <div className="text-sm font-medium text-foreground">{label}</div>
    </motion.button>
  );
}
