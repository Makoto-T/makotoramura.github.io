# makototamura.com — Claude Code ガイド

## プロジェクト概要

田村 誠（MAKOTO TAMURA）の個人Webサイト。3DCGフリーランサー / Cinema 4D MAXON認定マスタートレーナーとしてのポートフォリオ兼コンタクトサイト。

- **ドメイン**: makototamura.com
- **ホスティング**: GitHub Pages（`makotoramura.github.io` リポジトリ）
- **デプロイ**: `main` ブランチへの push で GitHub Actions が自動ビルド＆デプロイ

## 技術スタック

- **フレームワーク**: Astro v6（静的サイト生成）
- **スタイル**: Tailwind CSS v4（`@tailwindcss/vite` プラグイン）
- **フォント**: Inter（Google Fonts）
- **コンタクトフォーム**: Formspree（ID: `mzdqyjdz`）

## ファイル構成

```
src/
├── layouts/
│   └── BaseLayout.astro   # 共通HTML・head・フォント読み込み
├── components/
│   ├── Header.astro        # 固定ナビゲーション（スクロールでblur効果）
│   └── Footer.astro        # フッター
├── pages/
│   ├── index.astro         # TOP: ヒーロー・サービス3種・CTA
│   ├── works.astro         # WORKS: 制作カテゴリ（NDA説明付き）
│   ├── profile.astro       # PROFILE: バイオ・スキル・MAXON認定
│   └── contact.astro       # CONTACT: お問い合わせフォーム
└── styles/
    └── global.css          # Tailwind v4 @import・カスタムテーマ・カスタムCSS

public/
├── favicon.svg             # MTモノグラム（SVG）
└── MakotoTamura_Profile.jpg # プロフィール写真（1000×1000px）

.github/
└── workflows/
    └── deploy.yml          # GitHub Actions: ビルド→GitHub Pagesデプロイ
```

## デザインシステム

### カラーパレット（和モダン・ライトテーマ）

| トークン名      | 色名       | HEX       | 用途                        |
|----------------|-----------|-----------|----------------------------|
| `ink`          | 深藍墨     | `#1E2730` | メインテキスト・見出し        |
| `ink-mid`      | 中藍墨     | `#4A5568` | 本文・サブテキスト            |
| `ink-faint`    | 淡藍墨     | `#8A8A8A` | ミュートテキスト・ラベル      |
| `cream`        | 明るめ生成り| `#FBF8F2` | ページ背景                  |
| `cream-mid`    | 生成り     | `#F0EBE3` | カードホバー・サーフェス      |
| `seam`         | 薄灰       | `#DDD8D0` | ボーダー・区切り線            |
| `accent`       | 錆朱       | `#8B4040` | アクセント・CTA・ラベル       |
| `accent-light` | 淡錆朱     | `#9C4848` | アクセントホバー             |

### タイポグラフィ

- **フォント**: Inter（sans-serif）
- **見出し**: `font-black tracking-tighter`（9xl/7xl/5xl）
- **セクションラベル**: `text-xs tracking-[0.35em] text-accent font-medium`（uppercase）
- **本文**: `text-sm text-ink-mid leading-relaxed`

### コンポーネントパターン

- **CTAボタン（塗り）**: `bg-accent text-white rounded hover:bg-accent-light`
- **ボタン（枠線）**: `border border-seam text-ink rounded hover:border-ink`
- **セクション区切り線**: `w-12 h-px bg-seam`
- **カードグリッド間隔**: `gap-px bg-seam/40`（1pxセパレーター効果）
- **ページヘッダー**: `pt-40 pb-20`（固定ヘッダー分を確保）

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動 → http://localhost:4321
npm run build    # 本番ビルド → dist/
npm run preview  # ビルド結果のプレビュー
```

## デプロイ手順

1. `git push origin main` するだけで自動デプロイ
2. GitHub リポジトリ Settings → Pages → Source を「GitHub Actions」に設定済みであること

## コンテンツ更新メモ

### プロフィール写真の差し替え
`public/MakotoTamura_Profile.jpg` を上書き（1000×1000px 推奨）

### スキル一覧の編集
`src/pages/profile.astro` の `skills` 配列（現在: Cinema 4D / Redshift / After Effects / Octane Render）

### SNSリンクの追加
`src/pages/profile.astro` のコメントアウト部分を解除して URL を設定

### コンタクトフォームの変更
Formspree ID `mzdqyjdz` は `src/pages/contact.astro` の `form[action]` で設定済み
