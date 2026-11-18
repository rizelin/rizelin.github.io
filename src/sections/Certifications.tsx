import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { certifications, education, languageSkills } from "../data/certifications";
import { useLang } from "../i18n/LangContext";
import { formatYearMonth } from "../utils/date";

const card = "h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900";
const cardTitle = "text-sm font-bold tracking-wide text-slate-500 dark:text-slate-400";

export function Certifications() {
  const { t, l, lang } = useLang();

  return (
    <Section id="certifications" title="QUALIFICATIONS" subtitle={t("certificationsSub")}>
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="md:col-span-2">
          <article className={card}>
            <h3 className={cardTitle}>{t("educationTitle")}</h3>
            <ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
              {education.map((item, index) => (
                <li key={index} className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{formatYearMonth(item.date, lang)}</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{l(item.school)}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{l(item.detail)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal>
          <article className={card}>
            <h3 className={cardTitle}>{t("certificationsTitle")}</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-slate-900 dark:text-white">{l(cert.name)}</span>
                  {cert.date && (
                    <span className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
                      {formatYearMonth(cert.date, lang)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className={card}>
            <h3 className={cardTitle}>{t("languagesTitle")}</h3>
            <ul className="mt-4 space-y-5">
              {languageSkills.map((item, index) => (
                <li key={index}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="font-semibold text-slate-900 dark:text-white">{l(item.language)}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{l(item.level)}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                      style={{ width: `${item.proficiency}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
