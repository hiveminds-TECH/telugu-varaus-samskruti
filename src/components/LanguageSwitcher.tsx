import { usePlan } from "@/store/plan";
import { useT } from "@/hooks/useT";
import type { Lang } from "@/i18n";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang } = useT();
  const setLanguage = usePlan((s) => s.setLanguage);

  function toggle() {
    const next: Lang = lang === "te" ? "en" : "te";
    setLanguage(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${lang === "te" ? "English" : "Telugu"}`}
      className={
        className ??
        "rounded-full bg-card px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hairline transition hover:text-foreground"
      }
    >
      {lang === "te" ? "English" : "తెలుగు"}
    </button>
  );
}
