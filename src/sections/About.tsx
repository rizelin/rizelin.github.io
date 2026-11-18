import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { profile } from "../data/profile";
import { useLang } from "../i18n/LangContext";

export function About() {
  const { t, l } = useLang();

  const info = [
    { label: t("infoBase"), value: l(profile.base) },
    { label: t("infoCountries"), value: l(profile.countries) },
    { label: t("statLanguages"), value: l(profile.spokenLanguages) },
  ];

  return (
    <Section id="about" title="ABOUT" subtitle={t("aboutSub")}>
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-5 text-base text-slate-700 sm:text-lg dark:text-slate-300">
          {l(profile.about).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {info.map((item) => (
              <div key={item.label} className="px-5 py-4">
                <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
