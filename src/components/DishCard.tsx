import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  selected: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
  isVeg?: boolean;
  popular?: boolean;
}

function VegBadge({ veg }: { veg: boolean }) {
  const color = veg ? "var(--leaf)" : "var(--destructive)";
  return (
    <span
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className="flex h-3.5 w-3.5 items-center justify-center border"
      style={{ borderColor: color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}

export function DishCard({ selected, onClick, icon, label, isVeg = true, popular }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col items-center gap-2 rounded-2xl bg-card p-3 text-center transition-shadow",
        "hairline shadow-soft hover:shadow-lifted",
        selected && "ring-2 ring-primary ring-offset-2 ring-offset-background bg-gold-soft/40",
      )}
    >
      <div className="absolute left-2 top-2">
        <VegBadge veg={isVeg} />
      </div>
      {popular && (
        <span className="absolute right-2 top-2 rounded-full bg-marigold/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white shadow-soft">
          Popular
        </span>
      )}
      {selected && (
        <span className="absolute right-2 bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
          ✓
        </span>
      )}
      <div className="h-16 w-16 transition-transform group-hover:scale-105">{icon}</div>
      <div className="text-sm font-medium leading-tight text-foreground">{label}</div>
    </motion.button>
  );
}
