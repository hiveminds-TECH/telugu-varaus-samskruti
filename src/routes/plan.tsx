import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Notebook } from "@/components/Notebook";
import { SaveToast } from "@/components/SaveToast";
import { useT } from "@/hooks/useT";
import { JasmineSprig } from "@/components/illustrations";
import { usePlan } from "@/store/plan";
import type { Lang } from "@/i18n/strings";

export const Route = createFileRoute("/plan")({
  component: PlanLayout,
});

function PlanLayout() {
  const { t } = useT();
  const setLanguage = usePlan((s) => s.setLanguage);
  const language = usePlan((s) => s.language);
  const [showNote, setShowNote] = useState(false);
  const location = useRouterState({ select: (s) => s.location.pathname });

  function cycleLang() {
    const next: Lang = language === "te" ? "ting" : language === "ting" ? "en" : "te";
    setLanguage(next);
  }

  return (
    <div className="relative min-h-screen bg-background">
      <SaveToast />
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/welcome" className="flex items-center gap-2">
          <span className="font-display text-2xl text-primary">{t("brand")}</span>
          <JasmineSprig className="h-4 w-16" />
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNote((v) => !v)}
            className="rounded-full bg-card px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hairline transition hover:text-foreground md:hidden"
          >
            {t("notebookTitle")}
          </button>
          <button
            onClick={cycleLang}
            className="rounded-full bg-card px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hairline transition hover:text-foreground"
          >
            {language === "te" ? "తెలుగు" : language === "ting" ? "Tenglish" : "English"}
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-10 md:grid-cols-[minmax(0,1fr)_400px] md:gap-10">
        <main className="min-h-[calc(100vh-120px)]">
          <AnimatePresence mode="wait">
            <motion.div key={location} className="h-full">
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <div className="sticky top-6 hidden h-[calc(100vh-120px)] md:block">
          <Notebook />
        </div>
      </div>

      {/* Mobile notebook drawer */}
      <AnimatePresence>
        {showNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-foreground/30 md:hidden"
            onClick={() => setShowNote(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute inset-x-0 bottom-0 h-[80vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Notebook />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
