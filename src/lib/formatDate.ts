import { format, parseISO } from "date-fns";
import type { Lang } from "@/i18n";

export function formatPlanDate(iso: string, lang: Lang, style: "short" | "long" | "weekday" = "short") {
  const d = parseISO(iso);
  if (lang === "te") {
    if (style === "weekday") return format(d, "dd/MM");
    return format(d, "dd/MM/yyyy");
  }
  if (style === "long") return format(d, "EEEE, MMMM d");
  if (style === "weekday") return format(d, "EEE");
  return format(d, "MMM d");
}

export function formatPlanDateRange(
  dates: string[],
  lang: Lang,
  t: (key: "datesSingleSummary" | "datesMultiSummary", params?: Record<string, string | number>) => string,
) {
  if (dates.length === 0) return "";
  if (dates.length === 1) {
    return t("datesSingleSummary", { date: formatPlanDate(dates[0], lang, "long") });
  }
  return t("datesMultiSummary", {
    count: dates.length,
    start: formatPlanDate(dates[0], lang),
    end: formatPlanDate(dates[dates.length - 1], lang),
  });
}
