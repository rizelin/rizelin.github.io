# rizelin.github.io

フロントエンドエンジニア Baek Minho のポートフォリオサイトです。

🔗 https://rizelin.github.io/

## 技術スタック

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- GitHub Actions → GitHub Pages（自動デプロイ）

## 機能

- 日本語 / 韓国語 / 英語の切り替え（デフォルト: 日本語、ヨーロッパのタイムゾーンからのアクセスは英語）
- `?lang=ja` / `?lang=ko` / `?lang=en` で表示言語を指定可能
- ダークモード
- レスポンシブ対応

## 開発

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ に出力
npm run preview  # ビルド結果の確認
```

## 内容の編集

表示内容はすべて `src/data/` 以下のファイルで管理しています。

| ファイル | 内容 |
| --- | --- |
| `profile.ts` | 名前・自己紹介・職務要約・リンク・職務経歴書 PDF |
| `skills.ts` | スキルと使用年数 |
| `experience.ts` | 職務経歴 |
| `projects.ts` | プロジェクト |
| `certifications.ts` | 資格・語学 |

ボタンや見出しなどの固定文言は `src/i18n/ui.ts` にあります。
