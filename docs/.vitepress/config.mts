import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Annotium',
  description: 'The user guide for Annotium, a modern photo annotation app.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#174a3a' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Annotium Guide',
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
            { text: 'Shapes', link: '/tools/shapes' },
            { text: 'Text and callouts', link: '/tools/text-callouts' },
            { text: 'Icons and stamps', link: '/tools/icons-stamps' },
            { text: 'Focus and privacy', link: '/tools/focus-privacy' },
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
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/annotium/annotium.github.io/edit/main/docs/:path',
      text: 'Suggest an edit'
    },
    footer: { message: 'Built for Annotium users.', copyright: 'Copyright © Annotium' },
    docFooter: { prev: 'Previous', next: 'Next' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/annotium' }]
  }
})
