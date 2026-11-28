import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_zh_CN.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const zhCN: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh-CN/',
  description: 'Annotium 用户指南。Annotium 是一款现代化的照片标注应用。',
  themeConfig: {
    nav: [
      { text: '指南', link: '/zh-CN/guide/getting-started' },
      { text: '工具', link: '/zh-CN/tools/overview' },
      { text: '工作流程', link: '/zh-CN/workflows/projects' },
      { text: '帮助', link: '/zh-CN/help/troubleshooting' },
      { text: '更新', link: '/zh-CN/updates/' }
    ],
    sidebar: {
      '/zh-CN/guide/': [
        {
          text: '从这里开始',
          items: [
            { text: '快速入门', link: '/zh-CN/guide/getting-started' },
            { text: '项目与照片', link: '/zh-CN/guide/workspaces' }
          ]
        },
        {
          text: '选择工作区',
          items: [
            { text: '管理项目', link: '/zh-CN/guide/projects' },
            { text: '浏览设备照片', link: '/zh-CN/guide/photos' }
          ]
        },
        {
          text: '使用编辑器',
          items: [
            { text: '编辑器概览', link: '/zh-CN/guide/editor-overview' },
            { text: '选择与编辑对象', link: '/zh-CN/guide/editing-basics' },
            { text: '更改属性', link: '/zh-CN/guide/properties' }
          ]
        }
      ],
      '/zh-CN/tools/': [
        {
          text: '标注工具',
          items: [
            { text: '工具概览', link: '/zh-CN/tools/overview' },
            { text: '线条、箭头与测量', link: '/zh-CN/tools/lines-arrows-measurements' },
            { text: '箭头', link: '/zh-CN/tools/arrow' },
            { text: '线段测量', link: '/zh-CN/tools/line-measure' },
            { text: '尺寸线', link: '/zh-CN/tools/dimension-line' },
            { text: '形状', link: '/zh-CN/tools/shapes' },
            { text: '文字与标注框', link: '/zh-CN/tools/text-callouts' },
            { text: '标注(矩形)', link: '/zh-CN/tools/callout-rectangle' },
            { text: '图标与印章', link: '/zh-CN/tools/icons-stamps' },
            { text: '聚焦与隐私', link: '/zh-CN/tools/focus-privacy' },
            { text: '放大镜', link: '/zh-CN/tools/loupe' },
            { text: '模糊与马赛克', link: '/zh-CN/tools/blur-and-mosaic' },
            { text: '手绘与高亮', link: '/zh-CN/tools/freehand-highlight' },
            { text: '图片与合成', link: '/zh-CN/tools/images-compose' }
          ]
        }
      ],
      '/zh-CN/workflows/': [
        {
          text: '完成你的工作',
          items: [
            { text: '项目', link: '/zh-CN/workflows/projects' },
            { text: '项目备注', link: '/zh-CN/workflows/notes' },
            { text: '保存、导出与分享', link: '/zh-CN/workflows/save-export-share' }
          ]
        }
      ],
      '/zh-CN/help/': [
        {
          text: '账户与偏好',
          items: [
            { text: '设置', link: '/zh-CN/help/settings' },
            { text: '高级版与购买', link: '/zh-CN/help/premium' }
          ]
        },
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/zh-CN/help/faq' },
            { text: '故障排除', link: '/zh-CN/help/troubleshooting' }
          ]
        }
      ],
      '/zh-CN/updates/': [
        { text: '更新', items: [{ text: '最新动态', link: '/zh-CN/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: '本页内容' },
    docFooter: { prev: '上一页', next: '下一页' },
    langMenuLabel: '切换语言',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    lastUpdated: { text: '最后更新于' },
    notFound: {
      title: '页面未找到',
      quote: '你访问的页面不存在，或已被移动。',
      linkLabel: '返回首页',
      linkText: '返回首页'
    }
  }
}
