import type { Localized } from "../i18n/types";

/** 会社ごとに参画したプロジェクト（職務経歴書の表に対応） */
export type WorkProject = {
  title: Localized;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM" */
  end: string;
  /** 担当工程 */
  phases: Localized;
  /** チーム人数 / うち開発人数 */
  team: number;
  dev: number;
  /** 担当業務 */
  tasks: Localized<string[]>;
  /** 開発環境 */
  tech: string[];
};

export type Experience = {
  /** work: 職歴 / break: 離職期間（留学など） */
  kind: "work" | "break";
  company: Localized;
  /** 雇用形態（正社員・フリーランスなど） */
  employment: Localized;
  department?: Localized;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM"。在職中なら省略 */
  end?: string;
  summary?: Localized;
  projects?: WorkProject[];
  /** break のときの補足 */
  notes?: Localized<string[]>;
};

/** 職務経歴（新しい順）— 職務経歴書（2026年10月20日現在）より */
export const experiences: Experience[] = [
  {
    kind: "break",
    company: { ja: "カナダ滞在（語学留学）", ko: "캐나다 체류 (어학연수)", en: "Canada — language study" },
    employment: { ja: "キャリアブレイク", ko: "커리어 브레이크", en: "Career break" },
    start: "2024-09",
    end: "2026-06",
    notes: {
      ja: [
        "英語力向上を目的として渡航し、St. Clair College の ESL コースを修了（2025年1月〜4月）",
        "多国籍な環境で生活し、異なる文化的背景を持つ人々とのコミュニケーションを経験",
        "帰国後、日本国内でフロントエンドエンジニアとしての転職活動を開始",
      ],
      ko: [
        "영어 실력 향상을 위해 캐나다로 건너가 St. Clair College ESL 과정 수료 (2025년 1월~4월)",
        "다국적 환경에서 생활하며 다양한 문화적 배경을 가진 사람들과 소통",
        "귀국 후 일본 내 프론트엔드 엔지니어 정규직 이직 활동 시작",
      ],
      en: [
        "Moved to Canada to improve my English; completed the ESL program at St. Clair College (Jan–Apr 2025)",
        "Lived in a multinational environment, communicating with people from many cultural backgrounds",
        "Now looking for a full-time frontend engineering role in Japan",
      ],
    },
  },
  {
    kind: "work",
    company: { ja: "フリーランス", ko: "프리랜서", en: "Freelance" },
    employment: { ja: "業務委託", ko: "업무위탁", en: "Contract" },
    start: "2021-11",
    end: "2024-04",
    summary: {
      ja: "教育・福祉・電子名刺・通信・金融など複数業界のプロジェクトに参画し、Vue.js／Nuxt.js を中心としたフロントエンド開発を担当。",
      ko: "교육·복지·전자명함·통신·금융 등 여러 업계의 프로젝트에 참여하여 Vue.js / Nuxt.js 중심의 프론트엔드 개발을 담당.",
      en: "Worked on projects across education, welfare, digital business cards, telecom and finance, focusing on frontend development with Vue.js / Nuxt.js.",
    },
    projects: [
      {
        title: { ja: "金融管理システム", ko: "금융 관리 시스템", en: "Financial management system" },
        start: "2024-02",
        end: "2024-04",
        phases: { ja: "保守・運用", ko: "유지보수·운영", en: "Maintenance & operation" },
        team: 9,
        dev: 9,
        tasks: {
          ja: ["システムの保守・運用", "クライアントからの依頼による画面修正"],
          ko: ["시스템 유지보수·운영", "클라이언트 요청에 따른 화면 수정"],
          en: ["Maintenance and operation of the system", "UI changes requested by the client"],
        },
        tech: ["TypeScript", "React", "HTML", "CSS", "Tabulator", "Swagger", "Docker", "Nginx", "MySQL", "GitLab"],
      },
      {
        title: { ja: "モバイル申し込みフォームアプリ", ko: "모바일 신청 폼 앱", en: "Mobile plan application app" },
        start: "2023-08",
        end: "2023-12",
        phases: {
          ja: "実装・単体テスト・結合テスト・総合テスト・保守運用",
          ko: "구현·단위 테스트·통합 테스트·종합 테스트·유지보수",
          en: "Implementation, unit / integration / system testing, maintenance",
        },
        team: 8,
        dev: 5,
        tasks: {
          ja: [
            "新規プラン・新規オプションの追加実装",
            "受付状況一覧機能・申し込みページの追加実装",
            "API 結合",
            "テスト仕様書作成、単体・結合テスト",
          ],
          ko: ["신규 요금제·옵션 추가 구현", "접수 현황 목록 기능·신청 페이지 추가 구현", "API 연동", "테스트 사양서 작성, 단위·통합 테스트"],
          en: [
            "Added new plans and options",
            "Built the application status list and new application pages",
            "API integration",
            "Wrote test specifications; unit and integration testing",
          ],
        },
        tech: ["TypeScript", "Nuxt.js", "HTML", "SCSS", "Jest", "Adobe XD", "Nginx", "MySQL", "GitLab"],
      },
      {
        title: { ja: "電子名刺管理アプリ", ko: "전자명함 관리 앱", en: "Digital business card app" },
        start: "2023-03",
        end: "2023-07",
        phases: {
          ja: "実装・単体テスト・結合テスト・総合テスト・保守運用",
          ko: "구현·단위 테스트·통합 테스트·종합 테스트·유지보수",
          en: "Implementation, unit / integration / system testing, maintenance",
        },
        team: 10,
        dev: 8,
        tasks: {
          ja: ["個人名刺管理リストの UI 修正と API 結合", "ビジネス名刺管理リストの UI 修正と API 結合", "iOS・Android アプリの保守"],
          ko: ["개인 명함 관리 리스트 UI 수정 및 API 연동", "비즈니스 명함 관리 리스트 UI 수정 및 API 연동", "iOS·Android 앱 유지보수"],
          en: [
            "UI updates and API integration for the personal card list",
            "UI updates and API integration for the business card list",
            "Maintenance of the iOS and Android apps",
          ],
        },
        tech: ["TypeScript", "Vue.js", "Vuex", "HTML", "SCSS", "Shopify", "Adobe XD", "MySQL", "GitLab"],
      },
      {
        title: { ja: "福祉サービス管理サイト", ko: "복지 서비스 관리 사이트", en: "Welfare service management site" },
        start: "2022-10",
        end: "2023-02",
        phases: { ja: "実装・単体テスト・保守運用", ko: "구현·단위 테스트·유지보수", en: "Implementation, unit testing, maintenance" },
        team: 7,
        dev: 5,
        tasks: {
          ja: [
            "共通コンポーネントの作成・バグ対応",
            "共通コンポーネント管理のための Storybook 導入",
            "スケジュールカレンダーページの API 結合",
            "ゲスト情報一覧ページの設定、追加開発・保守",
          ],
          ko: ["공통 컴포넌트 제작·버그 대응", "공통 컴포넌트 관리를 위한 Storybook 도입", "스케줄 캘린더 페이지 API 연동", "게스트 정보 목록 페이지 설정, 추가 개발·유지보수"],
          en: [
            "Built shared components and fixed their bugs",
            "Introduced Storybook to manage shared components",
            "API integration for the schedule calendar page",
            "Guest list page setup, additional development and maintenance",
          ],
        },
        tech: ["JavaScript", "Vue.js", "Nuxt.js", "SCSS", "Bootstrap", "Storybook", "Webpack", "Figma", "MySQL", "GitHub"],
      },
      {
        title: { ja: "教育サービスアプリケーション", ko: "교육 서비스 애플리케이션", en: "Online education service" },
        start: "2022-03",
        end: "2022-09",
        phases: {
          ja: "実装・単体テスト・結合テスト・総合テスト・保守運用",
          ko: "구현·단위 테스트·통합 테스트·종합 테스트·유지보수",
          en: "Implementation, unit / integration / system testing, maintenance",
        },
        team: 30,
        dev: 22,
        tasks: {
          ja: [
            "ヘッダー・フッターのコンポーネント実装",
            "検索メニュー・ユーザーメニュー・コースメニューの実装",
            "講座詳細・ショッピングカート・購入履歴ページの実装",
            "Vuetify によるマテリアルデザインの実装、結合テスト",
          ],
          ko: ["헤더·푸터 컴포넌트 구현", "검색·사용자·코스 메뉴 구현", "강좌 상세·장바구니·구매 이력 페이지 구현", "Vuetify를 활용한 머티리얼 디자인 구현, 통합 테스트"],
          en: [
            "Header and footer components",
            "Search, user and course menus",
            "Course detail, shopping cart and purchase history pages",
            "Material Design UI with Vuetify; integration testing",
          ],
        },
        tech: ["TypeScript", "Vue.js", "Pinia", "Vuetify", "GraphQL", "Node.js", "Python", "Docker", "AWS", "ESLint", "Adobe XD", "MySQL", "GitHub"],
      },
      {
        title: { ja: "Web イベントサイト", ko: "웹 이벤트 사이트", en: "Online event website" },
        start: "2021-11",
        end: "2022-02",
        phases: { ja: "実装・単体テスト・結合テスト", ko: "구현·단위 테스트·통합 테스트", en: "Implementation, unit & integration testing" },
        team: 13,
        dev: 10,
        tasks: {
          ja: ["トップ・LIVE 配信・お問い合わせページの実装", "機能競技会・優良施策 WS・展示デモページの実装"],
          ko: ["메인·라이브 방송·문의 페이지 구현", "기능경기대회·우수시책 WS·전시 데모 페이지 구현"],
          en: ["Top, live-streaming and contact pages", "Competition, workshop and exhibition/demo pages"],
        },
        tech: ["JavaScript", "HTML", "CSS", "MySQL"],
      },
    ],
  },
  {
    kind: "work",
    company: {
      ja: "株式会社アウトソーシングテクノロジー（現・株式会社BREXA Technology）",
      ko: "아웃소싱테크놀로지 (현 BREXA Technology)",
      en: "Outsourcing Technology Inc. (now BREXA Technology Inc.)",
    },
    employment: { ja: "正社員", ko: "정규직", en: "Full-time" },
    department: { ja: "アドバンストエンジニアリング課", ko: "어드밴스드 엔지니어링과", en: "Advanced Engineering Section" },
    start: "2019-11",
    end: "2021-10",
    summary: {
      ja: "複数名の開発チームに参画し、大規模な社内システムの開発・保守を担当。",
      ko: "다수 인원의 개발팀에 참여하여 대규모 사내 시스템의 개발·유지보수를 담당.",
      en: "Joined multi-member teams developing and maintaining large-scale internal systems.",
    },
    projects: [
      {
        title: { ja: "社内掲示板サイト", ko: "사내 게시판 사이트", en: "Internal bulletin board site" },
        start: "2021-03",
        end: "2021-10",
        phases: {
          ja: "要件定義・基本設計・詳細設計・実装・単体〜総合テスト・保守運用",
          ko: "요건 정의·기본 설계·상세 설계·구현·단위~종합 테스트·유지보수",
          en: "Requirements, basic & detailed design, implementation, testing, maintenance",
        },
        team: 14,
        dev: 12,
        tasks: {
          ja: ["新規バージョンへの移行作業", "UI とバージョンのマイグレーション"],
          ko: ["신규 버전으로의 이전 작업", "UI 및 버전 마이그레이션"],
          en: ["Migration to a new platform version", "UI and version migration"],
        },
        tech: ["JavaScript", "PHP", "Drupal", "HTML", "CSS", "AWS (EC2)", "Linux", "VirtualBox", "MySQL", "GitHub"],
      },
      {
        title: { ja: "社内ページの新規開発", ko: "사내 페이지 신규 개발", en: "New internal pages" },
        start: "2019-11",
        end: "2021-02",
        phases: { ja: "詳細設計・実装・単体テスト・結合テスト", ko: "상세 설계·구현·단위 테스트·통합 테스트", en: "Detailed design, implementation, unit & integration testing" },
        team: 8,
        dev: 7,
        tasks: {
          ja: ["新規ページ作成、既存 UI の修正", "リスト管理機能の実装", "データ負荷テスト"],
          ko: ["신규 페이지 제작, 기존 UI 수정", "리스트 관리 기능 구현", "데이터 부하 테스트"],
          en: ["Built new pages and updated existing UI", "Implemented list management features", "Data load testing"],
        },
        tech: ["JavaScript", "PHP", "Drupal", "HTML", "CSS", "Linux", "VirtualBox", "MySQL", "GitHub"],
      },
    ],
  },
  {
    kind: "work",
    company: { ja: "株式会社ワールドブレインズ", ko: "월드브레인즈", en: "World Brains Co., Ltd." },
    employment: { ja: "正社員", ko: "정규직", en: "Full-time" },
    department: { ja: "本部 IT部門", ko: "본부 IT 부문", en: "IT Department" },
    start: "2018-07",
    end: "2019-07",
    summary: {
      ja: "要件定義・基本設計・詳細設計から実装まで一貫して担当。",
      ko: "요건 정의·기본 설계·상세 설계부터 구현까지 일관되게 담당.",
      en: "Handled projects end to end, from requirements and design through implementation.",
    },
    projects: [
      {
        title: { ja: "社内勤怠管理アプリ", ko: "사내 근태 관리 앱", en: "Attendance management app" },
        start: "2019-05",
        end: "2019-07",
        phases: {
          ja: "要件定義・基本設計・詳細設計・実装・単体テスト・結合テスト",
          ko: "요건 정의·기본 설계·상세 설계·구현·단위 테스트·통합 테스트",
          en: "Requirements, basic & detailed design, implementation, unit & integration testing",
        },
        team: 3,
        dev: 3,
        tasks: {
          ja: ["勤怠機能の実装", "勤怠打刻 UI の実装", "勤怠管理画面の UI 設定と API 結合"],
          ko: ["근태 기능 구현", "출퇴근 기록 UI 구현", "근태 관리 화면 UI 설정 및 API 연동"],
          en: ["Attendance features", "Clock-in / clock-out UI", "Attendance admin UI and API integration"],
        },
        tech: ["JavaScript", "jQuery", "PHP", "HTML", "CSS", "FileZilla", "MySQL"],
      },
      {
        title: { ja: "グループ会社ホームページ", ko: "그룹사 홈페이지", en: "Group company websites" },
        start: "2018-07",
        end: "2019-04",
        phases: {
          ja: "要件定義・基本設計・詳細設計・実装・単体〜総合テスト・保守運用",
          ko: "요건 정의·기본 설계·상세 설계·구현·단위~종합 테스트·유지보수",
          en: "Requirements, basic & detailed design, implementation, testing, maintenance",
        },
        team: 3,
        dev: 3,
        tasks: {
          ja: [
            "会社トップ・会社概要・経営者セミナー・お問い合わせページの実装",
            "商品管理システムの実装",
            "LINE Chat Bot を利用した勤怠管理システムの実装",
          ],
          ko: ["회사 메인·회사 소개·경영자 세미나·문의 페이지 구현", "상품 관리 시스템 구현", "LINE Chat Bot을 활용한 근태 관리 시스템 구현"],
          en: [
            "Top, company profile, executive seminar and contact pages",
            "Product management system",
            "Attendance system using a LINE chatbot",
          ],
        },
        tech: ["JavaScript", "jQuery", "PHP", "WordPress", "HTML", "CSS", "ESLint", "MySQL", "GitHub"],
      },
    ],
  },
];
