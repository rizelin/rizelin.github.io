export const LANGS = ["ja", "ko", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** 言語ごとの値。データファイルではこの形で文言を書く */
export type Localized<T = string> = Record<Lang, T>;

export const DEFAULT_LANG: Lang = "ja";

export const LANG_LABELS: Record<Lang, string> = {
  ja: "JA",
  ko: "KO",
  en: "EN",
};

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}
