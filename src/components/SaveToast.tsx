import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePlan } from "@/store/plan";
import { useT } from "@/hooks/useT";

export function SaveToast() {
  const updatedAt = usePlan((s) => s.updatedAt);
  const hydrated = usePlan((s) => s.hydrated);
  const [show, setShow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const first = useRef(true);
  const { t } = useT();

  useEffect(() => {
    if (!hydrated) return;
    if (first.current) {
      first.current = false;
      return;
    }
    if (!updatedAt) return;
    setShow(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 1600);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [updatedAt, hydrated]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-card px-4 py-2 text-sm text-foreground shadow-lifted hairline"
        >
          <span className="font-serif italic">{t("saved")}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
