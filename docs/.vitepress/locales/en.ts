import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const en: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en-US',
  description: 'The user guide for Annotium, a modern photo annotation app.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Tools', link: '/tools/overview' },
      { text: 'Workflows', link: '/workflows/projects' },
      { text: 'Help', link: '/help/troubleshooting' },
      { text: 'Updates', link: '/updates/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Start here',
          items: [
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'Projects and Photos', link: '/guide/workspaces' }
          ]
        },
        {
          text: 'Choose a workspace',
          items: [
            { text: 'Manage projects', link: '/guide/projects' },
            { text: 'Browse device photos', link: '/guide/photos' }
          ]
        },
        {
          text: 'Use the editor',
          items: [
            { text: 'Editor overview', link: '/guide/editor-overview' },
            { text: 'Select and edit objects', link: '/guide/editing-basics' },
            { text: 'Change properties', link: '/guide/properties' }
          ]
        }
      ],
      '/tools/': [
        {
          text: 'Annotation tools',
          items: [
            { text: 'Tool overview', link: '/tools/overview' },
            { text: 'Lines, arrows, and measurements', link: '/tools/lines-arrows-measurements' },
            { text: 'Arrow', link: '/tools/arrow' },
            { text: 'Line Measure', link: '/tools/line-measure' },
            { text: 'Dimension Line', link: '/tools/dimension-line' },
            { text: 'Shapes', link: '/tools/shapes' },
            { text: 'Text and callouts', link: '/tools/text-callouts' },
            { text: 'Callout (Rectangle)', link: '/tools/callout-rectangle' },
            { text: 'Icons and stamps', link: '/tools/icons-stamps' },
            { text: 'Focus and privacy', link: '/tools/focus-privacy' },
            { text: 'Loupe', link: '/tools/loupe' },
            { text: 'Blur and Mosaic', link: '/tools/blur-and-mosaic' },
            { text: 'Freehand and highlight', link: '/tools/freehand-highlight' },
            { text: 'Images and composition', link: '/tools/images-compose' }
          ]
        }
      ],
      '/workflows/': [
        {
          text: 'Finish your work',
          items: [
            { text: 'Projects', link: '/workflows/projects' },
            { text: 'Project notes', link: '/workflows/notes' },
            { text: 'Save, export, and share', link: '/workflows/save-export-share' }
          ]
        }
      ],
      '/help/': [
        {
          text: 'Account and preferences',
          items: [
            { text: 'Settings', link: '/help/settings' },
            { text: 'Premium and purchases', link: '/help/premium' }
          ]
        },
        {
          text: 'Help',
          items: [
            { text: 'FAQ', link: '/help/faq' },
            { text: 'Troubleshooting', link: '/help/troubleshooting' }
          ]
        }
      ],
      '/updates/': [
        { text: 'Updates', items: [{ text: 'What’s new', link: '/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: 'On this page' },
    footer: { message: 'Built for Annotium users.', copyright: 'Copyright © Annotium' },
    docFooter: { prev: 'Previous', next: 'Next' }
  }
}
