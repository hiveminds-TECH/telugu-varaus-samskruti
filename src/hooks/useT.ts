import { usePlan } from "@/store/plan";
import { translate, pickLabel, type Lang, type StringKey } from "@/i18n";

export function useT() {
  const lang = usePlan((s) => s.language);
  const t = (key: StringKey, params?: Record<string, string | number>) =>
    translate(lang, key, params);
  return { t, lang: lang as Lang };
}

export { pickLabel };
