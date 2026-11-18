import { useTheme } from "../hooks/useTheme";
import { useLang } from "../i18n/LangContext";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLang();
  const label = theme === "dark" ? t("themeToLight") : t("themeToDark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition-colors hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-white"
    >
      {theme === "dark" ? <SunIcon width={16} height={16} /> : <MoonIcon width={16} height={16} />}
    </button>
  );
}
