import te from "@/locales/te/common.json";
import en from "@/locales/en/common.json";

export type Lang = "te" | "en";

const locales = { te, en } as const;

export type StringKey = keyof typeof te;

export function normalizeLang(value: unknown): Lang {
  if (value === "en") return "en";
  return "te";
}

export function translate(
  lang: Lang,
  key: StringKey,
  params?: Record<string, string | number>,
): string {
  const entry = locales[lang]?.[key] ?? locales.te[key];
  if (!entry) return String(key);
  if (!params) return entry;
  return Object.entries(params).reduce(
    (str, [k, v]) => str.replace(new RegExp(`\\{\\{${k}\\}\\}`, "g"), String(v)),
    entry,
  );
}

export function pickLabel(obj: { te: string; en: string }, lang: Lang): string {
  return obj[lang] ?? obj.te;
}
