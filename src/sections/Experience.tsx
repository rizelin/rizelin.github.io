import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { experiences, type Experience as ExperienceItem, type WorkProject } from "../data/experience";
import { useLang } from "../i18n/LangContext";
import type { Lang } from "../i18n/types";
import { formatDuration, formatPeriod, formatYearMonth, wrapParen } from "../utils/date";

function formatTeam(team: number, dev: number, lang: Lang): string {
  if (lang === "ja") return `チーム${team}名（開発${dev}名）`;
  if (lang === "ko") return `팀 ${team}명 (개발 ${dev}명)`;
  return `Team of ${team} (${dev} developers)`;
}

function ProjectRow({ project, index }: { project: WorkProject; index: number }) {
  const { t, l, lang } = useLang();

  return (
    <li className="grid gap-3 py-6 first:pt-0 last:pb-0 md:grid-cols-[150px_1fr] md:gap-6">
      <div className="text-sm text-slate-500 dark:text-slate-400">
        <p className="font-semibold whitespace-nowrap text-slate-700 dark:text-slate-300">
          {formatYearMonth(project.start, lang)} {lang === "ja" ? "〜" : "–"}
          <br className="hidden md:block" /> {formatYearMonth(project.end, lang)}
        </p>
        <p>{wrapParen(formatDuration(project.start, project.end, lang), lang)}</p>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">
          <span className="mr-2 text-sm text-blue-600 dark:text-blue-400">{String(index + 1).padStart(2, "0")}</span>
          {l(project.title)}
        </h4>

        <dl className="mt-2 space-y-1 text-sm">
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 text-slate-500 dark:text-slate-400">{t("phases")}</dt>
            <dd className="text-slate-700 dark:text-slate-300">{l(project.phases)}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 text-slate-500 dark:text-slate-400">{t("teamSize")}</dt>
            <dd className="text-slate-700 dark:text-slate-300">{formatTeam(project.team, project.dev, lang)}</dd>
          </div>
        </dl>

        <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-300">
          {l(project.tasks).map((task, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-blue-500">・</span>
              {task}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap gap-1.5" aria-label={t("techStack")}>
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </li>
  );
}

function ExperienceCard({ job }: { job: ExperienceItem }) {
  const { t, l, lang } = useLang();
  const isBreak = job.kind === "break";

  return (
    <article
      className={`rounded-3xl border p-6 sm:p-8 ${
        isBreak
          ? "border-dashed border-slate-300 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/40"
          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      }`}
    >
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        {formatPeriod(job.start, job.end, lang, t("present"))}
        <span className="ml-2 font-normal">{wrapParen(formatDuration(job.start, job.end, lang), lang)}</span>
      </p>

      <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">{l(job.company)}</h3>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span
          className={`rounded-full px-2.5 py-1 ${
            isBreak
              ? "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              : "bg-blue-500/10 text-blue-700 dark:text-blue-300"
          }`}
        >
          {l(job.employment)}
        </span>
        {job.department && <span className="text-slate-500 dark:text-slate-400">{l(job.department)}</span>}
        {job.projects && (
          <span className="text-slate-500 dark:text-slate-400">
            · {t("projectCount")} {job.projects.length}
          </span>
        )}
      </div>

      {job.summary && <p className="mt-4 text-slate-700 dark:text-slate-300">{l(job.summary)}</p>}

      {job.notes && (
        <ul className="mt-4 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
          {l(job.notes).map((note, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-slate-400">・</span>
              {note}
            </li>
          ))}
        </ul>
      )}

      {job.projects && (
        <ol className="mt-6 divide-y divide-slate-200 border-t border-slate-200 pt-6 dark:divide-slate-800 dark:border-slate-800">
          {job.projects.map((project, index) => (
            <ProjectRow key={`${project.start}-${index}`} project={project} index={index} />
          ))}
        </ol>
      )}
    </article>
  );
}

export function Experience() {
  const { t } = useLang();
  // 直近の職歴のドットだけ強調する
  const latestWorkIndex = experiences.findIndex((job) => job.kind === "work");

  return (
    <Section id="experience" title="EXPERIENCE" subtitle={t("experienceSub")}>
      <ol className="relative space-y-8 border-l border-slate-200 pl-6 sm:pl-10 dark:border-slate-800">
        {experiences.map((job, index) => (
          <li key={`${job.start}-${index}`} className="relative">
            <span
              aria-hidden
              className={`absolute top-2 -left-[31px] h-3 w-3 rounded-full ring-4 ring-white sm:-left-[47px] dark:ring-slate-950 ${
                job.kind === "break"
                  ? "border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-950"
                  : index === latestWorkIndex
                    ? "bg-gradient-to-r from-blue-500 to-violet-500"
                    : "bg-slate-300 dark:bg-slate-600"
              }`}
            />
            <Reveal delay={Math.min(index, 3) * 60}>
              <ExperienceCard job={job} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
