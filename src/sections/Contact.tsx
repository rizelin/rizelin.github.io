import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../components/icons";
import { profile } from "../data/profile";
import { useLang } from "../i18n/LangContext";

export function Contact() {
  const { t, l } = useLang();
  const { email, github, linkedin } = profile.links;
  const resume = l(profile.resume);

  const secondaryButton =
    "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20";

  return (
    <Section id="contact" title="CONTACT" subtitle={t("contactSub")}>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-12">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          />
          <p className="relative max-w-xl text-lg font-medium sm:text-xl">{t("contactLead")}</p>

          <div className="relative mt-8 flex flex-wrap gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                <MailIcon width={16} height={16} />
                {t("sendEmail")}
              </a>
            )}
            <a href={github} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
              <GitHubIcon width={16} height={16} />
              GitHub
            </a>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                <LinkedInIcon width={16} height={16} />
                LinkedIn
              </a>
            )}
            {resume && (
              <a href={resume} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                <DownloadIcon width={16} height={16} />
                {t("ctaResume")}
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
