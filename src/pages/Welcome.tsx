import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useT } from "@/hooks/useT";
import { usePlan } from "@/store/plan";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { HeroIllustration, JasmineSprig, Underline } from "@/components/illustrations";
import { SaveToast } from "@/components/SaveToast";

export default function Welcome() {
  const { t } = useT();
  const updatedAt = usePlan((s) => s.updatedAt);
  const hydrated = usePlan((s) => s.hydrated);
  const reset = usePlan((s) => s.reset);
  const navigate = useNavigate();

  const hasSaved = hydrated && updatedAt !== null;

  return (
    <div className="relative min-h-screen bg-background">
      <SaveToast />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl text-primary">{t("brand")}</span>
          <JasmineSprig className="h-4 w-16" />
        </Link>
        <LanguageSwitcher />
      </header>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-2 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="font-serif text-lg italic text-primary">{t("welcomeKicker")}</span>
          <h1 className="relative inline-block font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            {t("welcomeTitle")}
            <Underline className="absolute -bottom-3 left-0 h-3 w-48 text-gold" />
          </h1>
          <p className="max-w-lg text-xl text-muted-foreground">{t("welcomeBody")}</p>

          {hasSaved ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-4 flex flex-col gap-3 rounded-2xl bg-card p-5 paper-grain hairline shadow-soft"
            >
              <div className="font-serif italic text-muted-foreground">{t("planSavedPrompt")}</div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/plan/review")}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:shadow-lifted"
                >
                  {t("continueBtn")} →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    reset();
                    navigate("/plan/occasion");
                  }}
                  className="rounded-full bg-card px-5 py-2.5 text-sm text-foreground hairline transition hover:shadow-soft"
                >
                  {t("startFresh")}
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="mt-4">
              <motion.button
                type="button"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/plan/occasion")}
                className="rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-lifted"
              >
                {t("startBtn")} →
              </motion.button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-md rounded-[2rem] bg-card p-8 paper-grain hairline shadow-lifted">
            <HeroIllustration className="w-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
