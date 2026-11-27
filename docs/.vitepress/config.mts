import { defineConfig } from 'vitepress'
import { en } from './locales/en'
import { zhCN } from './locales/zh-CN'

export default defineConfig({
  title: 'Annotium',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#174a3a' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }]
  ],
  locales: {
    root: en,
    'zh-CN': zhCN
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Annotium',
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-CN': {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上方向键',
                  navigateDownKeyAriaLabel: '下方向键',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
