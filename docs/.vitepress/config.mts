import { defineConfig } from 'vitepress'
import { en } from './locales/en'
import { zhCN } from './locales/zh-CN'
import { fr } from './locales/fr'
import { es } from './locales/es'
import { ptBR } from './locales/pt-BR'
import { ru } from './locales/ru'
import { ja } from './locales/ja'
import { th } from './locales/th'
import { ko } from './locales/ko'

const siteUrl = 'https://annotium.github.io'
const localeLanguages: Record<string, string> = {
  'zh-CN': 'zh-CN', fr: 'fr', es: 'es', 'pt-BR': 'pt-BR',
  ru: 'ru', ja: 'ja', th: 'th', ko: 'ko'
}

function pageUrl(page: string) {
  return `${siteUrl}/${page.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')}`
}

export default defineConfig({
  title: 'Annotium',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: siteUrl },
  head: [
    ['meta', { name: 'theme-color', content: '#c2410c' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }]
  ],
  transformHead({ title, description, pageData, siteConfig }) {
    const image = `${siteUrl}/images/homepage/annotium-social.jpg`
    const page = pageData.relativePath
    const segments = page.split('/')
    if (segments[0] in localeLanguages) segments.shift()
    const topic = segments.join('/')
    const variants = [
      { lang: 'en-US', page: topic },
      ...Object.entries(localeLanguages).map(([dir, lang]) => ({ lang, page: `${dir}/${topic}` }))
    ].filter((variant) => siteConfig.pages.includes(variant.page))
    return [
      ['link', { rel: 'canonical', href: pageUrl(page) }],
      ...(variants.length > 1 ? variants.map((variant) =>
        ['link', { rel: 'alternate', hreflang: variant.lang, href: pageUrl(variant.page) }] as ['link', Record<string, string>]
      ) : []),
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Annotium' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '675' }],
      ['meta', { property: 'og:image:alt', content: 'Garage door annotated with a 2.40 m dimension line and a Check clearance callout' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }]
    ]
  },
  locales: {
    root: en,
    'zh-CN': zhCN,
    fr,
    es,
    'pt-BR': ptBR,
    ru,
    ja,
    th,
    ko
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Annotium',
    lastUpdated: {
      formatOptions: { dateStyle: 'medium', timeZone: 'UTC', forceLocale: true },
    },
    footer: {
      copyright: `Copyright © ${new Date().getUTCFullYear()} Annotium`,
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          ko: {
            translations: {
              button: { buttonText: '검색', buttonAriaLabel: '검색' },
              modal: {
                displayDetails: '상세 목록 표시',
                resetButtonTitle: '검색 지우기',
                backButtonTitle: '검색 닫기',
                noResultsText: '결과를 찾을 수 없습니다',
                footer: {
                  selectText: '선택',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: '이동',
                  navigateUpKeyAriaLabel: '위쪽 화살표',
                  navigateDownKeyAriaLabel: '아래쪽 화살표',
                  closeText: '닫기',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          },
          th: {
            translations: {
              button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหา' },
              modal: {
                displayDetails: 'แสดงรายการแบบละเอียด',
                resetButtonTitle: 'ล้างการค้นหา',
                backButtonTitle: 'ปิดการค้นหา',
                noResultsText: 'ไม่พบผลลัพธ์สำหรับ',
                footer: {
                  selectText: 'เลือก',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'เลื่อน',
                  navigateUpKeyAriaLabel: 'ลูกศรขึ้น',
                  navigateDownKeyAriaLabel: 'ลูกศรลง',
                  closeText: 'ปิด',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          ja: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                displayDetails: '詳細リストを表示',
                resetButtonTitle: '検索をクリア',
                backButtonTitle: '検索を閉じる',
                noResultsText: '次の検索結果はありません:',
                footer: {
                  selectText: '選択',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: '移動',
                  navigateUpKeyAriaLabel: '上矢印',
                  navigateDownKeyAriaLabel: '下矢印',
                  closeText: '閉じる',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          },
          ru: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов для',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          'pt-BR': {
            translations: {
              button: { buttonText: 'Pesquisar', buttonAriaLabel: 'Pesquisar' },
              modal: {
                displayDetails: 'Mostrar lista detalhada',
                resetButtonTitle: 'Limpar pesquisa',
                backButtonTitle: 'Fechar pesquisa',
                noResultsText: 'Nenhum resultado para',
                footer: {
                  selectText: 'selecionar',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'navegar',
                  navigateUpKeyAriaLabel: 'seta para cima',
                  navigateDownKeyAriaLabel: 'seta para baixo',
                  closeText: 'fechar',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          es: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                displayDetails: 'Mostrar lista detallada',
                resetButtonTitle: 'Borrar búsqueda',
                backButtonTitle: 'Cerrar búsqueda',
                noResultsText: 'No se encontraron resultados para',
                footer: {
                  selectText: 'seleccionar',
                  selectKeyAriaLabel: 'intro',
                  navigateText: 'navegar',
                  navigateUpKeyAriaLabel: 'flecha arriba',
                  navigateDownKeyAriaLabel: 'flecha abajo',
                  closeText: 'cerrar',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          fr: {
            translations: {
              button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
              modal: {
                displayDetails: 'Afficher la liste détaillée',
                resetButtonTitle: 'Réinitialiser la recherche',
                backButtonTitle: 'Fermer la recherche',
                noResultsText: 'Aucun résultat pour',
                footer: {
                  selectText: 'sélectionner',
                  selectKeyAriaLabel: 'entrée',
                  navigateText: 'naviguer',
                  navigateUpKeyAriaLabel: 'flèche haut',
                  navigateDownKeyAriaLabel: 'flèche bas',
                  closeText: 'fermer',
                  closeKeyAriaLabel: 'échap'
                }
              }
            }
          },
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
