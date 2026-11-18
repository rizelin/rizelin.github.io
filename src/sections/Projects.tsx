import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { ExternalIcon, GitHubIcon } from "../components/icons";
import { projects } from "../data/projects";
import { useLang } from "../i18n/LangContext";

export function Projects() {
  const { t, l } = useLang();

  return (
    <Section
      id="projects"
      title="PROJECTS"
      subtitle={t("projectsSub")}
      className="bg-slate-50/70 dark:bg-slate-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">
              <div className={`relative h-32 bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                <span className="absolute bottom-3 left-5 text-4xl font-extrabold text-white/90 transition-transform duration-500 group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{l(project.title)}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">{l(project.description)}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>

                {(project.repoUrl || project.demoUrl) && (
                  <div className="mt-5 flex gap-4 text-sm font-semibold">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                      >
                        <GitHubIcon width={16} height={16} />
                        {t("viewCode")}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                      >
                        <ExternalIcon width={16} height={16} />
                        {t("viewDemo")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
