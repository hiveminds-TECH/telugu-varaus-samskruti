import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { usePlan } from "@/store/plan";
import { useT } from "@/hooks/useT";
import type { Lang } from "@/i18n";
import { HeroIllustration, Underline, JasmineSprig } from "@/components/illustrations";
import { SaveToast } from "@/components/SaveToast";

const langs: Array<{ id: Lang; primaryKey: "langTelugu" | "langEnglish"; helperKey: "langTeluguHelper" | "langEnglishHelper"; sampleKey: "langTeluguSample" | "langEnglishSample" }> = [
  { id: "te", primaryKey: "langTelugu", helperKey: "langTeluguHelper", sampleKey: "langTeluguSample" },
  { id: "en", primaryKey: "langEnglish", helperKey: "langEnglishHelper", sampleKey: "langEnglishSample" },
];

export default function LanguagePicker() {
  const setLanguage = usePlan((s) => s.setLanguage);
  const current = usePlan((s) => s.language);
  const navigate = useNavigate();
  const { t } = useT();

  function choose(l: Lang) {
    setLanguage(l);
    navigate("/welcome");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <SaveToast />
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-2 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-primary">{t("brand")}</span>
            <JasmineSprig className="h-4 w-20" />
          </div>
          <h1 className="relative inline-block font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
            {t("pickLang")}
            <Underline className="absolute -bottom-3 left-0 h-3 w-40 text-gold" />
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">{t("pickLangSub")}</p>

          <div className="mt-4 flex flex-col gap-3">
            {langs.map((l) => (
              <motion.button
                key={l.id}
                type="button"
                onClick={() => choose(l.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`group flex items-center justify-between gap-4 rounded-2xl bg-card p-5 text-left transition-shadow hairline shadow-soft hover:shadow-lifted ${
                  current === l.id ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-display text-2xl text-foreground">{t(l.primaryKey)}</span>
                  <span className="font-serif italic text-muted-foreground">{t(l.sampleKey)}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t(l.helperKey)}
                  </span>
                </div>
                <span className="text-2xl text-primary transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="hidden items-center justify-center md:flex"
        >
          <div className="relative w-full max-w-md rounded-[2rem] bg-card p-8 paper-grain hairline shadow-lifted">
            <HeroIllustration className="w-full" />
            <p className="mt-4 text-center font-serif text-lg italic text-muted-foreground">
              {t("tagline")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
