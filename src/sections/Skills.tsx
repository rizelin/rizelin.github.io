import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { skillGroups } from "../data/skills";
import { useLang } from "../i18n/LangContext";
import { formatMonths } from "../utils/date";

export function Skills() {
  const { t, l, lang } = useLang();

  return (
    <Section
      id="skills"
      title="SKILLS"
      subtitle={t("skillsSub")}
      className="bg-slate-50/70 dark:bg-slate-900/40"
    >
      {/* ベントグリッド */}
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 80} className={group.wide ? "md:col-span-2" : ""}>
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-bold tracking-wide text-slate-500 dark:text-slate-400">{l(group.title)}</h3>
              <ul className={`mt-4 grid gap-2.5 ${group.wide ? "sm:grid-cols-2" : ""}`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-2.5 dark:bg-slate-800/60"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{skill.name}</span>
                    {skill.months !== undefined && (
                      <span className="shrink-0 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:text-blue-300">
                        {formatMonths(skill.months, lang)}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
