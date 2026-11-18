import type { Localized } from "../i18n/types";

export type Certification = {
  name: Localized;
  /** 取得年月 "YYYY-MM"（任意） */
  date?: string;
};

export type Education = {
  school: Localized;
  detail: Localized;
  /** 卒業・修了年月 "YYYY-MM" */
  date: string;
};

export type LanguageSkill = {
  language: Localized;
  level: Localized;
  /** 0〜100 のバー表示 */
  proficiency: number;
};

export const certifications: Certification[] = [
  {
    name: {
      ja: "日本語能力試験（JLPT）N1",
      ko: "일본어능력시험 (JLPT) N1",
      en: "Japanese-Language Proficiency Test (JLPT) N1",
    },
    date: "2016-08",
  },
];

/** 学歴・研修（新しい順） */
export const education: Education[] = [
  {
    school: { ja: "St. Clair College（カナダ）", ko: "St. Clair College (캐나다)", en: "St. Clair College (Canada)" },
    detail: { ja: "ESL コース 修了", ko: "ESL 과정 수료", en: "ESL program — completed" },
    date: "2025-04",
  },
  {
    school: { ja: "漢陽サイバー大学校（韓国）", ko: "한양사이버대학교", en: "Hanyang Cyber University (Korea)" },
    detail: {
      ja: "国際言語文化学部 日本語学科 卒業（3年次編入）",
      ko: "국제언어문화학부 일본어학과 졸업 (3학년 편입)",
      en: "B.A. in Japanese, School of International Language & Culture (transfer)",
    },
    date: "2019-02",
  },
  {
    school: { ja: "韓国貿易協会「SMART Cloud IT Master Plus」", ko: "한국무역협회 「SMART Cloud IT Master Plus」", en: "Korea International Trade Association — SMART Cloud IT Master Plus" },
    detail: {
      ja: "日本の IT 企業就職のための IT 研修プログラム（第33期）修了",
      ko: "일본 IT 기업 취업을 위한 IT 연수 프로그램 (제33기) 수료",
      en: "IT training program for careers at Japanese IT companies (33rd cohort)",
    },
    date: "2018-01",
  },
  {
    school: { ja: "山口短期大学", ko: "야마구치 단기대학 (일본)", en: "Yamaguchi Junior College (Japan)" },
    detail: { ja: "情報メディア学科 卒業", ko: "정보미디어학과 졸업", en: "Department of Information Media" },
    date: "2013-03",
  },
];

export const languageSkills: LanguageSkill[] = [
  {
    language: { ja: "韓国語", ko: "한국어", en: "Korean" },
    level: { ja: "ネイティブ", ko: "모국어", en: "Native" },
    proficiency: 100,
  },
  {
    language: { ja: "日本語", ko: "일본어", en: "Japanese" },
    level: { ja: "ビジネスレベル（JLPT N1・実務経験約6年）", ko: "비즈니스 레벨 (JLPT N1·실무 약 6년)", en: "Business level (JLPT N1, ~6 yrs at work)" },
    proficiency: 90,
  },
  {
    language: { ja: "英語", ko: "영어", en: "English" },
    level: { ja: "基本的な日常会話が可能（学習継続中）", ko: "기본적인 일상회화 가능 (계속 학습 중)", en: "Basic conversation (still improving)" },
    proficiency: 40,
  },
];
