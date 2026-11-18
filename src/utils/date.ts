import type { Lang } from "../i18n/types";

const EN_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseYearMonth(value: string): { year: number; month: number } {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

function currentYearMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

/** "2021-04" → 2021年4月 / 2021.04 / Apr 2021 */
export function formatYearMonth(value: string, lang: Lang): string {
  const { year, month } = parseYearMonth(value);
  if (lang === "ja") return `${year}年${month}月`;
  if (lang === "ko") return `${year}.${String(month).padStart(2, "0")}`;
  return `${EN_MONTHS[month - 1]} ${year}`;
}

export function formatPeriod(start: string, end: string | undefined, lang: Lang, presentLabel: string): string {
  const from = formatYearMonth(start, lang);
  const to = end ? formatYearMonth(end, lang) : presentLabel;
  return lang === "ja" ? `${from} 〜 ${to}` : `${from} – ${to}`;
}

/** 月数 → 2年3ヶ月 / 2년 3개월 / 2 yrs 3 mos */
export function formatMonths(total: number, lang: Lang): string {
  const years = Math.floor(total / 12);
  const months = total % 12;

  if (lang === "ja") return `${years ? `${years}年` : ""}${months ? `${months}ヶ月` : ""}`;
  if (lang === "ko") return [years && `${years}년`, months && `${months}개월`].filter(Boolean).join(" ");
  return [years && `${years} yr${years > 1 ? "s" : ""}`, months && `${months} mo${months > 1 ? "s" : ""}`]
    .filter(Boolean)
    .join(" ");
}

/** 在籍期間（開始月と終了月を含む） */
export function formatDuration(start: string, end: string | undefined, lang: Lang): string {
  const s = parseYearMonth(start);
  const e = parseYearMonth(end ?? currentYearMonth());
  const total = Math.max(1, (e.year - s.year) * 12 + (e.month - s.month) + 1);
  return formatMonths(total, lang);
}

/** 括弧付きの期間表示（日本語は全角括弧） */
export function wrapParen(text: string, lang: Lang): string {
  return lang === "ja" ? `（${text}）` : `(${text})`;
}
