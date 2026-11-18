import { Link } from "react-router";
import { useLang } from "../i18n/LangContext";

export function NotFound() {
  const { t } = useLang();
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-16 text-center">
      <div>
        <p className="text-gradient text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{t("notFoundTitle")}</h1>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
        >
          {t("backHome")}
        </Link>
      </div>
    </section>
  );
}
