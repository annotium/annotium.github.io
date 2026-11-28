import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_es.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const es: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'Español',
  lang: 'es-ES',
  link: '/es/',
  description: 'La guía de usuario de Annotium, una app moderna para anotar fotos.',
  themeConfig: {
    nav: [
      { text: 'Guía', link: '/es/guide/getting-started' },
      { text: 'Herramientas', link: '/es/tools/overview' },
      { text: 'Flujos de trabajo', link: '/es/workflows/projects' },
      { text: 'Ayuda', link: '/es/help/troubleshooting' },
      { text: 'Novedades', link: '/es/updates/' }
    ],
    sidebar: {
      '/es/guide/': [
        {
          text: 'Empieza aquí',
          items: [
            { text: 'Primeros pasos', link: '/es/guide/getting-started' },
            { text: 'Proyectos y Fotos', link: '/es/guide/workspaces' }
          ]
        },
        {
          text: 'Elige un espacio de trabajo',
          items: [
            { text: 'Gestionar proyectos', link: '/es/guide/projects' },
            { text: 'Explorar las fotos del dispositivo', link: '/es/guide/photos' }
          ]
        },
        {
          text: 'Usa el editor',
          items: [
            { text: 'Descripción del editor', link: '/es/guide/editor-overview' },
            { text: 'Seleccionar y editar objetos', link: '/es/guide/editing-basics' },
            { text: 'Cambiar propiedades', link: '/es/guide/properties' }
          ]
        }
      ],
      '/es/tools/': [
        {
          text: 'Herramientas de anotación',
          items: [
            { text: 'Resumen de herramientas', link: '/es/tools/overview' },
            { text: 'Líneas, flechas y medidas', link: '/es/tools/lines-arrows-measurements' },
            { text: 'Flecha', link: '/es/tools/arrow' },
            { text: 'Medir línea', link: '/es/tools/line-measure' },
            { text: 'Línea de cota', link: '/es/tools/dimension-line' },
            { text: 'Formas', link: '/es/tools/shapes' },
            { text: 'Texto y llamadas', link: '/es/tools/text-callouts' },
            { text: 'Llamada (rectángulo)', link: '/es/tools/callout-rectangle' },
            { text: 'Iconos y sellos', link: '/es/tools/icons-stamps' },
            { text: 'Enfoque y privacidad', link: '/es/tools/focus-privacy' },
            { text: 'Lupa', link: '/es/tools/loupe' },
            { text: 'Desenfoque y mosaico', link: '/es/tools/blur-and-mosaic' },
            { text: 'Mano alzada y resaltado', link: '/es/tools/freehand-highlight' },
            { text: 'Imágenes y composición', link: '/es/tools/images-compose' }
          ]
        }
      ],
      '/es/workflows/': [
        {
          text: 'Termina tu trabajo',
          items: [
            { text: 'Proyectos', link: '/es/workflows/projects' },
            { text: 'Notas del proyecto', link: '/es/workflows/notes' },
            { text: 'Guardar, exportar y compartir', link: '/es/workflows/save-export-share' }
          ]
        }
      ],
      '/es/help/': [
        {
          text: 'Cuenta y preferencias',
          items: [
            { text: 'Ajustes', link: '/es/help/settings' },
            { text: 'Premium y compras', link: '/es/help/premium' }
          ]
        },
        {
          text: 'Ayuda',
          items: [
            { text: 'Preguntas frecuentes', link: '/es/help/faq' },
            { text: 'Solución de problemas', link: '/es/help/troubleshooting' }
          ]
        }
      ],
      '/es/updates/': [
        { text: 'Novedades', items: [{ text: 'Qué hay de nuevo', link: '/es/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: 'En esta página' },
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    langMenuLabel: 'Cambiar idioma',
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar al tema claro',
    darkModeSwitchTitle: 'Cambiar al tema oscuro',
    skipToContentLabel: 'Saltar al contenido',
    lastUpdated: { text: 'Última actualización' },
    notFound: {
      title: 'PÁGINA NO ENCONTRADA',
      quote: 'La página que buscas no existe o se ha movido.',
      linkLabel: 'ir al inicio',
      linkText: 'Volver al inicio'
    }
  }
}
