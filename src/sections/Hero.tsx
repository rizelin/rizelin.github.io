import { Reveal } from "../components/Reveal";
import { SectionLink } from "../components/SectionLink";
import { ArrowRightIcon, DownloadIcon, GitHubIcon } from "../components/icons";
import { profile } from "../data/profile";
import { useLang } from "../i18n/LangContext";

export function Hero() {
  const { t, l } = useLang();
  const resume = l(profile.resume);

  const stats = [
    { label: t("statYears"), value: l(profile.experienceLabel) },
    { label: t("statStack"), value: profile.stackLabel },
    { label: t("statLanguages"), value: l(profile.spokenLanguages) },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* 背景のぼかしグラデーション */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400/25 via-violet-400/20 to-transparent blur-3xl dark:from-blue-600/20 dark:via-violet-600/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.18)_1px,transparent_0)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          {profile.openToWork && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t("openToWork")}
            </p>
          )}

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            {l(profile.name)}
          </h1>
          {l(profile.nameSub) && (
            <p className="mt-2 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">{l(profile.nameSub)}</p>
          )}
          <p className="mt-3 text-2xl font-bold sm:text-3xl">
            <span className="text-gradient">{l(profile.role)}</span>
          </p>
          <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">{l(profile.tagline)}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SectionLink
              to="contact"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {t("ctaContact")}
              <ArrowRightIcon width={16} height={16} className="transition-transform group-hover:translate-x-0.5" />
            </SectionLink>
            {resume && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <DownloadIcon width={16} height={16} />
                {t("ctaResume")}
              </a>
            )}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-white"
            >
              <GitHubIcon />
            </a>
          </div>
        </Reveal>

        {/* 職務要約 */}
        <Reveal delay={150}>
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-8 dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400">{t("summaryTitle")}</h2>

            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
                  <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</dt>
                  <dd className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-6 text-xs font-bold text-slate-500 dark:text-slate-400">{t("strengthsTitle")}</h3>
            <ul className="mt-3 space-y-2">
              {profile.strengths.map((strength, index) => (
                <li key={index} className="flex gap-3 text-sm text-slate-700 sm:text-base dark:text-slate-200">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                  {l(strength)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
