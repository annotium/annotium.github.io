import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_ja.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const ja: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '日本語',
  lang: 'ja-JP',
  link: '/ja/',
  description: 'モダンな写真注釈アプリ Annotium のユーザーガイドです。',
  themeConfig: {
    nav: [
      { text: 'ガイド', link: '/ja/guide/getting-started' },
      { text: 'ツール', link: '/ja/tools/overview' },
      { text: 'ワークフロー', link: '/ja/workflows/projects' },
      { text: 'ヘルプ', link: '/ja/help/troubleshooting' },
      { text: '更新情報', link: '/ja/updates/' }
    ],
    sidebar: {
      '/ja/guide/': [
        {
          text: 'はじめに',
          items: [
            { text: 'クイックスタート', link: '/ja/guide/getting-started' },
            { text: 'プロジェクトと写真', link: '/ja/guide/workspaces' }
          ]
        },
        {
          text: 'ワークスペースを選ぶ',
          items: [
            { text: 'プロジェクトを管理する', link: '/ja/guide/projects' },
            { text: 'デバイスの写真を閲覧する', link: '/ja/guide/photos' }
          ]
        },
        {
          text: 'エディタを使う',
          items: [
            { text: 'エディタの概要', link: '/ja/guide/editor-overview' },
            { text: 'オブジェクトの選択と編集', link: '/ja/guide/editing-basics' },
            { text: 'プロパティを変更する', link: '/ja/guide/properties' }
          ]
        }
      ],
      '/ja/tools/': [
        {
          text: '注釈ツール',
          items: [
            { text: 'ツールの概要', link: '/ja/tools/overview' },
            { text: '線、矢印、計測', link: '/ja/tools/lines-arrows-measurements' },
            { text: '矢印', link: '/ja/tools/arrow' },
            { text: '線の計測', link: '/ja/tools/line-measure' },
            { text: '寸法線', link: '/ja/tools/dimension-line' },
            { text: '図形', link: '/ja/tools/shapes' },
            { text: 'テキストと吹き出し', link: '/ja/tools/text-callouts' },
            { text: '吹き出し(長方形)', link: '/ja/tools/callout-rectangle' },
            { text: 'アイコンとスタンプ', link: '/ja/tools/icons-stamps' },
            { text: 'フォーカスとプライバシー', link: '/ja/tools/focus-privacy' },
            { text: 'ルーペ', link: '/ja/tools/loupe' },
            { text: 'ぼかしとモザイク', link: '/ja/tools/blur-and-mosaic' },
            { text: 'フリーハンドとハイライト', link: '/ja/tools/freehand-highlight' },
            { text: '画像と合成', link: '/ja/tools/images-compose' }
          ]
        }
      ],
      '/ja/workflows/': [
        {
          text: '作業を仕上げる',
          items: [
            { text: 'プロジェクト', link: '/ja/workflows/projects' },
            { text: 'プロジェクトのメモ', link: '/ja/workflows/notes' },
            { text: '保存、書き出し、共有', link: '/ja/workflows/save-export-share' }
          ]
        }
      ],
      '/ja/help/': [
        {
          text: 'アカウントと設定',
          items: [
            { text: '設定', link: '/ja/help/settings' },
            { text: 'Premium と購入', link: '/ja/help/premium' }
          ]
        },
        {
          text: 'ヘルプ',
          items: [
            { text: 'よくある質問', link: '/ja/help/faq' },
            { text: 'トラブルシューティング', link: '/ja/help/troubleshooting' }
          ]
        }
      ],
      '/ja/updates/': [
        { text: '更新情報', items: [{ text: '新機能', link: '/ja/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: 'このページの内容' },
    footer: { message: 'Annotium ユーザーのために。', copyright: 'Copyright © Annotium' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    langMenuLabel: '言語を変更',
    returnToTopLabel: 'トップに戻る',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: '外観',
    lightModeSwitchTitle: 'ライトテーマに切り替え',
    darkModeSwitchTitle: 'ダークテーマに切り替え',
    skipToContentLabel: 'コンテンツへスキップ',
    lastUpdated: { text: '最終更新日' },
    notFound: {
      title: 'ページが見つかりません',
      quote: 'お探しのページは存在しないか、移動されました。',
      linkLabel: 'ホームへ戻る',
      linkText: 'ホームへ戻る'
    }
  }
}
