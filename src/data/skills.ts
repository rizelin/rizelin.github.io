import type { Localized } from "../i18n/types";

export type Skill = {
  name: string;
  /** 実務での使用期間（月数）。不明なら省略 */
  months?: number;
};

export type SkillGroup = {
  id: string;
  title: Localized;
  /** ベントグリッドで横幅を広く取るか */
  wide?: boolean;
  skills: Skill[];
};

/**
 * 職務経歴書「テクニカルスキル」の使用期間をもとにしています。
 * 期間の記載がないもの（プロジェクトで使用した技術）は期間なしで表示します。
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { ja: "フロントエンド", ko: "프론트엔드", en: "Frontend" },
    wide: true,
    skills: [
      { name: "Vue.js (Vue2 / Vue3)", months: 36 },
      { name: "TypeScript", months: 36 },
      { name: "JavaScript", months: 36 },
      { name: "HTML / CSS", months: 36 },
      { name: "Nuxt.js", months: 12 },
      { name: "React", months: 3 },
      { name: "Bootstrap", months: 72 },
      { name: "SCSS" },
      { name: "Vuex / Pinia" },
      { name: "Vuetify" },
    ],
  },
  {
    id: "backend",
    title: { ja: "バックエンド・DB", ko: "백엔드·DB", en: "Backend & DB" },
    skills: [
      { name: "MySQL", months: 60 },
      { name: "PHP", months: 36 },
      { name: "Drupal", months: 24 },
      { name: "WordPress", months: 12 },
      { name: "GraphQL" },
    ],
  },
  {
    id: "infra",
    title: { ja: "インフラ・ツール", ko: "인프라·도구", en: "Infra & Tools" },
    skills: [
      { name: "Git / GitHub / GitLab", months: 72 },
      { name: "AWS (EC2)", months: 12 },
      { name: "FileZilla", months: 12 },
      { name: "Docker" },
      { name: "Storybook" },
      { name: "Jest" },
    ],
  },
  {
    id: "design",
    title: { ja: "デザインツール", ko: "디자인 도구", en: "Design tools" },
    wide: true,
    skills: [
      { name: "Adobe XD", months: 17 },
      { name: "Figma", months: 4 },
      { name: "Zeplin", months: 4 },
    ],
  },
];
