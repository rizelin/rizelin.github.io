import type { Localized } from "./types";

/** 画面上の固定文言（ボタン・見出しなど） */
export const ui = {
  siteTitle: {
    ja: "Baek Minho | フロントエンドエンジニア",
    ko: "Baek Minho | 프론트엔드 엔지니어",
    en: "Baek Minho | Frontend Engineer",
  },
  siteDescription: {
    ja: "フロントエンドエンジニア Baek Minho のポートフォリオ。Vue.js / React / TypeScript。",
    ko: "프론트엔드 엔지니어 Baek Minho의 포트폴리오. Vue.js / React / TypeScript.",
    en: "Portfolio of Baek Minho, Frontend Engineer. Vue.js / React / TypeScript.",
  },

  // ナビゲーション
  navAbout: { ja: "自己紹介", ko: "소개", en: "About" },
  navSkills: { ja: "スキル", ko: "기술", en: "Skills" },
  navExperience: { ja: "職務経歴", ko: "경력", en: "Experience" },
  navProjects: { ja: "プロジェクト", ko: "프로젝트", en: "Projects" },
  navCertifications: { ja: "学歴・資格", ko: "학력·자격", en: "Education" },
  navContact: { ja: "お問い合わせ", ko: "연락처", en: "Contact" },
  menuOpen: { ja: "メニューを開く", ko: "메뉴 열기", en: "Open menu" },
  menuClose: { ja: "メニューを閉じる", ko: "메뉴 닫기", en: "Close menu" },
  languageLabel: { ja: "表示言語", ko: "표시 언어", en: "Language" },
  themeToDark: { ja: "ダークモードに切り替え", ko: "다크 모드로 전환", en: "Switch to dark mode" },
  themeToLight: { ja: "ライトモードに切り替え", ko: "라이트 모드로 전환", en: "Switch to light mode" },

  // Hero / 職務要約
  openToWork: {
    ja: "新しいポジションを探しています",
    ko: "새로운 포지션을 찾고 있습니다",
    en: "Open to new opportunities",
  },
  ctaContact: { ja: "お問い合わせ", ko: "연락하기", en: "Get in touch" },
  ctaResume: { ja: "職務経歴書 (PDF)", ko: "이력서 (PDF)", en: "Résumé (PDF)" },
  summaryTitle: { ja: "職務要約", ko: "경력 요약", en: "Summary" },
  statYears: { ja: "実務経験", ko: "실무 경력", en: "Experience" },
  statStack: { ja: "主要技術", ko: "주요 기술", en: "Main stack" },
  statLanguages: { ja: "対応言語", ko: "사용 언어", en: "Languages" },
  strengthsTitle: { ja: "強み", ko: "강점", en: "Strengths" },

  // セクション見出し（英語タイトル + 各言語のサブタイトル）
  aboutSub: { ja: "自己紹介", ko: "자기소개", en: "About me" },
  skillsSub: { ja: "スキル", ko: "기술 스택", en: "Tech stack" },
  experienceSub: { ja: "職務経歴", ko: "경력", en: "Work history" },
  projectsSub: { ja: "プロジェクト", ko: "프로젝트", en: "Selected work" },
  certificationsSub: { ja: "学歴・資格・語学", ko: "학력·자격·어학", en: "Education, certifications & languages" },
  contactSub: { ja: "お問い合わせ", ko: "연락처", en: "Get in touch" },

  // About
  infoBase: { ja: "拠点", ko: "거주지", en: "Based in" },
  infoCountries: { ja: "生活・就業経験", ko: "생활·근무 경험", en: "Lived & worked in" },

  // Experience
  present: { ja: "現在", ko: "현재", en: "Present" },
  phases: { ja: "担当工程", ko: "담당 공정", en: "Phases" },
  teamSize: { ja: "規模", ko: "규모", en: "Team" },
  techStack: { ja: "開発環境", ko: "개발 환경", en: "Tech stack" },
  responsibilities: { ja: "担当業務", ko: "담당 업무", en: "Responsibilities" },
  projectCount: { ja: "参画プロジェクト", ko: "참여 프로젝트", en: "Projects" },

  // Projects
  viewCode: { ja: "コード", ko: "코드", en: "Code" },
  viewDemo: { ja: "デモ", ko: "데모", en: "Live" },

  // Certifications
  certificationsTitle: { ja: "資格", ko: "자격증", en: "Certifications" },
  educationTitle: { ja: "学歴・研修", ko: "학력·연수", en: "Education & training" },
  languagesTitle: { ja: "語学", ko: "어학", en: "Languages" },

  // Contact
  contactLead: {
    ja: "お仕事のご相談・カジュアル面談など、お気軽にご連絡ください。",
    ko: "채용 제안이나 커피챗 등 편하게 연락 주세요.",
    en: "Feel free to reach out for job opportunities or a casual chat.",
  },
  sendEmail: { ja: "メールを送る", ko: "이메일 보내기", en: "Send an email" },

  // 404
  notFoundTitle: { ja: "ページが見つかりません", ko: "페이지를 찾을 수 없습니다", en: "Page not found" },
  backHome: { ja: "トップへ戻る", ko: "홈으로 돌아가기", en: "Back to home" },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;
