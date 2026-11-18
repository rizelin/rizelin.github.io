import type { Localized } from "../i18n/types";

/** プロフィール情報 — 履歴書・職務経歴書（2026年10月20日現在）より */
export const profile = {
  name: {
    ja: "白 旼昊",
    ko: "백민호",
    en: "Baek Minho",
  } satisfies Localized,

  /** 名前の下に小さく表示する読み・別表記（空文字なら非表示） */
  nameSub: {
    ja: "ベク ミンホ · Baek Minho",
    ko: "白旼昊 · Baek Minho",
    en: "",
  } satisfies Localized,

  role: {
    ja: "フロントエンドエンジニア",
    ko: "프론트엔드 엔지니어",
    en: "Frontend Engineer",
  } satisfies Localized,

  tagline: {
    ja: "Vue.js／Nuxt.js と TypeScript を中心に、要件定義から実装・保守運用まで一貫して担当してきたフロントエンドエンジニアです。",
    ko: "Vue.js / Nuxt.js와 TypeScript를 중심으로 요건 정의부터 구현, 유지보수까지 일관되게 담당해 온 프론트엔드 엔지니어입니다.",
    en: "Frontend engineer working mainly with Vue.js / Nuxt.js and TypeScript, from requirements through implementation and maintenance.",
  } satisfies Localized,

  /** 求職中バッジを表示するか */
  openToWork: true,

  /** 職務要約の「実務経験」 */
  experienceLabel: {
    ja: "約6年",
    ko: "약 6년",
    en: "~6 years",
  } satisfies Localized,

  /** 職務要約の「主要技術」 */
  stackLabel: "Vue / Nuxt / TypeScript",

  spokenLanguages: {
    ja: "日本語・韓国語・英語",
    ko: "일본어·한국어·영어",
    en: "Japanese · Korean · English",
  } satisfies Localized,

  strengths: [
    {
      ja: "Vue.js（Vue2／Vue3）・Nuxt.js を用いた SPA・業務システムの設計、実装、テスト、保守",
      ko: "Vue.js (Vue2/Vue3)·Nuxt.js를 활용한 SPA·업무 시스템의 설계, 구현, 테스트, 유지보수",
      en: "Design, implementation, testing and maintenance of SPAs and business systems with Vue.js (Vue 2/3) and Nuxt.js",
    },
    {
      ja: "要件定義から UI 実装、保守運用までの一貫した開発経験",
      ko: "요건 정의부터 UI 구현, 유지보수·운영까지의 일관된 개발 경험",
      en: "End-to-end experience from requirements definition to UI implementation and operation",
    },
    {
      ja: "教育・福祉・通信・金融など複数業界、最大30名規模のチームでの開発経験",
      ko: "교육·복지·통신·금융 등 여러 업계, 최대 30명 규모 팀에서의 개발 경험",
      en: "Projects across education, welfare, telecom, finance and more, in teams of up to 30",
    },
    {
      ja: "課題を早めに共有し、タスクを停滞させないチームコミュニケーション",
      ko: "문제를 빠르게 공유해 작업이 정체되지 않게 하는 팀 커뮤니케이션",
      en: "Raising issues early and connecting teammates so tasks never stall",
    },
  ] satisfies Localized[],

  about: {
    ja: [
      "フロントエンドエンジニアとして約6年間、日本国内の Web サイト・業務システム・モバイル関連アプリケーションの開発に携わってきました。Vue.js／Nuxt.js と TypeScript を中心に、UI 実装、API 連携、共通コンポーネント開発、テスト、保守運用まで幅広く担当しています。",
      "正社員として要件定義から実装までを一貫して担当した後、フリーランスとして教育・福祉・電子名刺・通信・金融など複数業界のプロジェクトに参画しました。分からないことや気になる技術は、納得できるまで調べて自ら手を動かして検証することを大切にしています。",
      "英語力を高めるため 2024年からカナダに滞在し、ESL コースを修了しました。今後はフロントエンドを軸にバックエンド・インフラ・設計へと対応領域を広げ、将来的にはフルスタックエンジニア、そして PM を目指しています。",
    ],
    ko: [
      "프론트엔드 엔지니어로서 약 6년간 일본에서 웹사이트, 업무 시스템, 모바일 관련 애플리케이션 개발에 참여해 왔습니다. Vue.js / Nuxt.js와 TypeScript를 중심으로 UI 구현, API 연동, 공통 컴포넌트 개발, 테스트, 유지보수까지 폭넓게 담당했습니다.",
      "정규직으로 요건 정의부터 구현까지 일관되게 담당한 뒤, 프리랜서로서 교육·복지·전자명함·통신·금융 등 여러 업계의 프로젝트에 참여했습니다. 모르는 것이나 궁금한 기술은 납득할 때까지 찾아보고 직접 손을 움직여 검증하는 자세를 중요하게 생각합니다.",
      "영어 실력을 키우기 위해 2024년부터 캐나다에 체류하며 ESL 과정을 수료했습니다. 앞으로는 프론트엔드를 축으로 백엔드·인프라·설계까지 영역을 넓혀, 풀스택 엔지니어를 거쳐 PM이 되는 것을 목표로 하고 있습니다.",
    ],
    en: [
      "I'm a frontend engineer with about six years of experience building websites, business systems and mobile-related applications in Japan. Working mainly with Vue.js / Nuxt.js and TypeScript, I've handled UI implementation, API integration, shared components, testing and maintenance.",
      "After working full-time on projects from requirements through implementation, I worked freelance across education, welfare, digital business cards, telecom and finance. When I don't understand something, I dig in until I do and verify it hands-on.",
      "To strengthen my English, I moved to Canada in 2024 and completed an ESL program. Going forward I want to grow from frontend into backend, infrastructure and design work — and eventually into full-stack and project management roles.",
    ],
  } satisfies Localized<string[]>,

  base: {
    ja: "韓国（日本での就業を希望）",
    ko: "한국 (일본 취업 희망)",
    en: "South Korea (seeking a role in Japan)",
  } satisfies Localized,

  countries: {
    ja: "韓国・日本（約6年）・カナダ",
    ko: "한국·일본 (약 6년)·캐나다",
    en: "Korea · Japan (~6 yrs) · Canada",
  } satisfies Localized,

  links: {
    github: "https://github.com/rizelin",
    // メールアドレス（空文字ならボタン非表示）。公開サイトに載るので注意
    email: "",
    // LinkedIn などの URL（空文字なら非表示）
    linkedin: "",
  },

  /**
   * 職務経歴書 PDF。public/resume/ に置いて "/resume/xxx.pdf" と書く。
   * 空文字ならボタン非表示。※住所・生年月日などを消した公開用を置くこと
   */
  resume: {
    ja: "",
    ko: "",
    en: "",
  } satisfies Localized,
};
