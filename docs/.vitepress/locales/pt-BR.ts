import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_pt.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const ptBR: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'Português (Brasil)',
  lang: 'pt-BR',
  link: '/pt-BR/',
  description: 'O guia do usuário do Annotium, um app moderno de anotação de fotos.',
  themeConfig: {
    nav: [
      { text: 'Guia', link: '/pt-BR/guide/getting-started' },
      { text: 'Ferramentas', link: '/pt-BR/tools/overview' },
      { text: 'Fluxos de trabalho', link: '/pt-BR/workflows/projects' },
      { text: 'Ajuda', link: '/pt-BR/help/troubleshooting' },
      { text: 'Novidades', link: '/pt-BR/updates/' }
    ],
    sidebar: {
      '/pt-BR/guide/': [
        {
          text: 'Comece aqui',
          items: [
            { text: 'Primeiros passos', link: '/pt-BR/guide/getting-started' },
            { text: 'Projetos e Fotos', link: '/pt-BR/guide/workspaces' }
          ]
        },
        {
          text: 'Escolha um espaço de trabalho',
          items: [
            { text: 'Gerenciar projetos', link: '/pt-BR/guide/projects' },
            { text: 'Navegar pelas fotos do dispositivo', link: '/pt-BR/guide/photos' }
          ]
        },
        {
          text: 'Use o editor',
          items: [
            { text: 'Visão geral do editor', link: '/pt-BR/guide/editor-overview' },
            { text: 'Selecionar e editar objetos', link: '/pt-BR/guide/editing-basics' },
            { text: 'Alterar propriedades', link: '/pt-BR/guide/properties' }
          ]
        }
      ],
      '/pt-BR/tools/': [
        {
          text: 'Ferramentas de anotação',
          items: [
            { text: 'Visão geral das ferramentas', link: '/pt-BR/tools/overview' },
            { text: 'Linhas, setas e medidas', link: '/pt-BR/tools/lines-arrows-measurements' },
            { text: 'Seta', link: '/pt-BR/tools/arrow' },
            { text: 'Medir linha', link: '/pt-BR/tools/line-measure' },
            { text: 'Linha de cota', link: '/pt-BR/tools/dimension-line' },
            { text: 'Formas', link: '/pt-BR/tools/shapes' },
            { text: 'Texto e balões', link: '/pt-BR/tools/text-callouts' },
            { text: 'Balão (retângulo)', link: '/pt-BR/tools/callout-rectangle' },
            { text: 'Ícones e carimbos', link: '/pt-BR/tools/icons-stamps' },
            { text: 'Foco e privacidade', link: '/pt-BR/tools/focus-privacy' },
            { text: 'Lupa', link: '/pt-BR/tools/loupe' },
            { text: 'Desfoque e mosaico', link: '/pt-BR/tools/blur-and-mosaic' },
            { text: 'Mão livre e destaque', link: '/pt-BR/tools/freehand-highlight' },
            { text: 'Imagens e composição', link: '/pt-BR/tools/images-compose' }
          ]
        }
      ],
      '/pt-BR/workflows/': [
        {
          text: 'Conclua seu trabalho',
          items: [
            { text: 'Projetos', link: '/pt-BR/workflows/projects' },
            { text: 'Notas do projeto', link: '/pt-BR/workflows/notes' },
            { text: 'Salvar, exportar e compartilhar', link: '/pt-BR/workflows/save-export-share' }
          ]
        }
      ],
      '/pt-BR/help/': [
        {
          text: 'Conta e preferências',
          items: [
            { text: 'Configurações', link: '/pt-BR/help/settings' },
            { text: 'Premium e compras', link: '/pt-BR/help/premium' }
          ]
        },
        {
          text: 'Ajuda',
          items: [
            { text: 'Perguntas frequentes', link: '/pt-BR/help/faq' },
            { text: 'Solução de problemas', link: '/pt-BR/help/troubleshooting' }
          ]
        }
      ],
      '/pt-BR/updates/': [
        { text: 'Novidades', items: [{ text: 'O que há de novo', link: '/pt-BR/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próxima' },
    langMenuLabel: 'Mudar idioma',
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Aparência',
    lightModeSwitchTitle: 'Mudar para o tema claro',
    darkModeSwitchTitle: 'Mudar para o tema escuro',
    skipToContentLabel: 'Ir para o conteúdo',
    lastUpdated: { text: 'Última atualização' },
    notFound: {
      title: 'PÁGINA NÃO ENCONTRADA',
      quote: 'A página que você procura não existe ou foi movida.',
      linkLabel: 'ir para o início',
      linkText: 'Voltar ao início'
    }
  }
}
