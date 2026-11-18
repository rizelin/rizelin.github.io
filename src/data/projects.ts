import type { Localized } from "../i18n/types";

export type Project = {
  /** 将来 /projects/:slug の詳細ページを作るときに使う ID */
  slug: string;
  title: Localized;
  description: Localized;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  /** カード上部のグラデーション色（Tailwind クラス） */
  accent: string;
};

// 個人開発・公開できる成果物。追加するときはこの配列に足す。
export const projects: Project[] = [
  {
    slug: "portfolio",
    title: { ja: "ポートフォリオサイト", ko: "포트폴리오 사이트", en: "Portfolio Website" },
    description: {
      ja: "このサイトです。日本語・韓国語・英語の切り替え、ダークモード、GitHub Actions による自動デプロイに対応しています。",
      ko: "지금 보고 계신 이 사이트입니다. 일본어·한국어·영어 전환, 다크 모드, GitHub Actions 자동 배포를 지원합니다.",
      en: "This website. Supports Japanese / Korean / English, dark mode, and automatic deployment with GitHub Actions.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions"],
    repoUrl: "https://github.com/rizelin/rizelin.github.io",
    demoUrl: "https://rizelin.github.io/",
    accent: "from-blue-500 to-violet-500",
  },
];
