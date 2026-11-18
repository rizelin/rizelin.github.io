import { useLang } from "../i18n/LangContext";
import { LANG_LABELS, LANGS } from "../i18n/types";

/** JA | KO | EN のセグメントボタン */
export function LangSwitch() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t("languageLabel")}
      className="flex items-center rounded-full border border-slate-200 bg-white/70 p-0.5 text-xs font-semibold dark:border-slate-700 dark:bg-slate-900/70"
    >
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            lang={code}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            {LANG_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
