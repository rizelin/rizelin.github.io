import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useLang } from "../i18n/LangContext";
import type { UiKey } from "../i18n/ui";
import { CloseIcon, MenuIcon } from "./icons";
import { LangSwitch } from "./LangSwitch";
import { SectionLink } from "./SectionLink";
import { ThemeToggle } from "./ThemeToggle";

/**
 * ナビゲーション項目。
 * 将来ページを追加したら、ここに { type: "page", path: "/blog", label: ... } のような形で追加する。
 */
const NAV_ITEMS: { id: string; label: UiKey }[] = [
  { id: "about", label: "navAbout" },
  { id: "skills", label: "navSkills" },
  { id: "experience", label: "navExperience" },
  { id: "projects", label: "navProjects" },
  { id: "certifications", label: "navCertifications" },
  { id: "contact", label: "navContact" },
];

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const glass = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        glass
          ? "border-b border-slate-200/70 bg-white/75 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/75"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
          Minho<span className="text-gradient">.</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <SectionLink
              key={item.id}
              to={item.id}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {t(item.label)}
            </SectionLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("menuClose") : t("menuOpen")}
            className="grid h-8 w-8 place-items-center rounded-full text-slate-700 lg:hidden dark:text-slate-200"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200/70 px-5 pb-4 lg:hidden dark:border-slate-800/70" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <SectionLink
                  to={item.id}
                  onNavigate={() => setMenuOpen(false)}
                  className="block py-3 text-base font-medium text-slate-700 dark:text-slate-200"
                >
                  {t(item.label)}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
