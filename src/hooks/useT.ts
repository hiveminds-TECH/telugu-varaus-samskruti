import { usePlan } from "@/store/plan";
import { strings, type Lang, type StringKey } from "@/i18n/strings";

export function useT() {
  const lang = usePlan((s) => s.language);
  const t = (key: StringKey) => {
    const entry = strings[key];
    if (!entry) return String(key);
    return entry[lang] ?? entry.ting;
  };
  return { t, lang: lang as Lang };
}

export function pickLabel<T extends { te: string; ting: string; en: string }>(
  obj: T,
  lang: Lang,
): string {
  return obj[lang] ?? obj.ting;
}
