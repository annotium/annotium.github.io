import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_ru.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const ru: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'Русский',
  lang: 'ru-RU',
  link: '/ru/',
  description: 'Руководство пользователя Annotium — современного приложения для аннотирования фотографий.',
  themeConfig: {
    nav: [
      { text: 'Руководство', link: '/ru/guide/getting-started' },
      { text: 'Инструменты', link: '/ru/tools/overview' },
      { text: 'Рабочие процессы', link: '/ru/workflows/projects' },
      { text: 'Справка', link: '/ru/help/troubleshooting' },
      { text: 'Обновления', link: '/ru/updates/' }
    ],
    sidebar: {
      '/ru/guide/': [
        {
          text: 'С чего начать',
          items: [
            { text: 'Начало работы', link: '/ru/guide/getting-started' },
            { text: 'Проекты и Фото', link: '/ru/guide/workspaces' }
          ]
        },
        {
          text: 'Выбор рабочего пространства',
          items: [
            { text: 'Управление проектами', link: '/ru/guide/projects' },
            { text: 'Просмотр фото на устройстве', link: '/ru/guide/photos' }
          ]
        },
        {
          text: 'Работа в редакторе',
          items: [
            { text: 'Обзор редактора', link: '/ru/guide/editor-overview' },
            { text: 'Выбор и редактирование объектов', link: '/ru/guide/editing-basics' },
            { text: 'Изменение свойств', link: '/ru/guide/properties' }
          ]
        }
      ],
      '/ru/tools/': [
        {
          text: 'Инструменты аннотирования',
          items: [
            { text: 'Обзор инструментов', link: '/ru/tools/overview' },
            { text: 'Линии, стрелки и измерения', link: '/ru/tools/lines-arrows-measurements' },
            { text: 'Стрелка', link: '/ru/tools/arrow' },
            { text: 'Измерение линии', link: '/ru/tools/line-measure' },
            { text: 'Размерная линия', link: '/ru/tools/dimension-line' },
            { text: 'Фигуры', link: '/ru/tools/shapes' },
            { text: 'Текст и выноски', link: '/ru/tools/text-callouts' },
            { text: 'Выноска (прямоугольник)', link: '/ru/tools/callout-rectangle' },
            { text: 'Значки и штампы', link: '/ru/tools/icons-stamps' },
            { text: 'Фокус и конфиденциальность', link: '/ru/tools/focus-privacy' },
            { text: 'Лупа', link: '/ru/tools/loupe' },
            { text: 'Размытие и мозаика', link: '/ru/tools/blur-and-mosaic' },
            { text: 'Рисование от руки и выделение', link: '/ru/tools/freehand-highlight' },
            { text: 'Изображения и композиция', link: '/ru/tools/images-compose' }
          ]
        }
      ],
      '/ru/workflows/': [
        {
          text: 'Завершение работы',
          items: [
            { text: 'Проекты', link: '/ru/workflows/projects' },
            { text: 'Заметки проекта', link: '/ru/workflows/notes' },
            { text: 'Сохранение, экспорт и отправка', link: '/ru/workflows/save-export-share' }
          ]
        }
      ],
      '/ru/help/': [
        {
          text: 'Аккаунт и настройки',
          items: [
            { text: 'Настройки', link: '/ru/help/settings' },
            { text: 'Premium и покупки', link: '/ru/help/premium' }
          ]
        },
        {
          text: 'Справка',
          items: [
            { text: 'Частые вопросы', link: '/ru/help/faq' },
            { text: 'Устранение неполадок', link: '/ru/help/troubleshooting' }
          ]
        }
      ],
      '/ru/updates/': [
        { text: 'Обновления', items: [{ text: 'Что нового', link: '/ru/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: 'На этой странице' },
    footer: { message: 'Создано для пользователей Annotium.', copyright: 'Copyright © Annotium' },
    docFooter: { prev: 'Назад', next: 'Далее' },
    langMenuLabel: 'Изменить язык',
    returnToTopLabel: 'Вернуться наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    skipToContentLabel: 'Перейти к содержимому',
    lastUpdated: { text: 'Последнее обновление' },
    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote: 'Страница, которую вы ищете, не существует или была перемещена.',
      linkLabel: 'перейти на главную',
      linkText: 'Вернуться на главную'
    }
  }
}
