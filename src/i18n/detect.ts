import { DEFAULT_LANG, isLang, type Lang } from "./types";

export const LANG_STORAGE_KEY = "lang";

/**
 * 初期表示言語の決定ルール
 * 1. URL パラメータ (?lang=ja / ko / en)
 * 2. 訪問者が選択した言語 (localStorage)
 * 3. タイムゾーンがヨーロッパ (Europe/*) → 英語
 * 4. それ以外 → 日本語
 */
export function detectInitialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (isLang(param)) return param;

  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // localStorage が使えない環境（プライベートモード等）は無視
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  if (timeZone.startsWith("Europe/")) return "en";

  return DEFAULT_LANG;
}
