import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { detectInitialLang, LANG_STORAGE_KEY } from "./detect";
import type { Lang, Localized } from "./types";
import { ui, type UiKey } from "./ui";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** 固定文言を取得: t("navAbout") */
  t: (key: UiKey) => string;
  /** データの多言語値を取得: l(profile.role) */
  l: <T>(value: Localized<T>) => T;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui.siteTitle[lang];
    document.querySelector('meta[name="description"]')?.setAttribute("content", ui.siteDescription[lang]);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // 保存できなくても表示は切り替える
    }
    // URL に ?lang= が付いている場合は、選択した言語に書き換える
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", next);
      window.history.replaceState(window.history.state, "", url);
    }
  }, []);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      t: (key) => ui[key][lang],
      l: (localized) => localized[lang],
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
