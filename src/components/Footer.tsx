import { profile } from "../data/profile";
import { useLang } from "../i18n/LangContext";

export function Footer() {
  const { l } = useLang();
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-5 text-sm text-slate-500 sm:px-8 dark:text-slate-400">
        © {new Date().getFullYear()} {l(profile.name)}
      </div>
    </footer>
  );
}
