import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_fr.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const fr: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'Français',
  lang: 'fr-FR',
  link: '/fr/',
  description: 'Le guide de l’utilisateur d’Annotium, une application moderne d’annotation de photos.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/fr/guide/getting-started' },
      { text: 'Outils', link: '/fr/tools/overview' },
      { text: 'Flux de travail', link: '/fr/workflows/projects' },
      { text: 'Aide', link: '/fr/help/troubleshooting' },
      { text: 'Nouveautés', link: '/fr/updates/' }
    ],
    sidebar: {
      '/fr/guide/': [
        {
          text: 'Pour commencer',
          items: [
            { text: 'Premiers pas', link: '/fr/guide/getting-started' },
            { text: 'Projets et Photos', link: '/fr/guide/workspaces' }
          ]
        },
        {
          text: 'Choisir un espace de travail',
          items: [
            { text: 'Gérer les projets', link: '/fr/guide/projects' },
            { text: 'Parcourir les photos de l’appareil', link: '/fr/guide/photos' }
          ]
        },
        {
          text: 'Utiliser l’éditeur',
          items: [
            { text: 'Présentation de l’éditeur', link: '/fr/guide/editor-overview' },
            { text: 'Sélectionner et modifier des objets', link: '/fr/guide/editing-basics' },
            { text: 'Modifier les propriétés', link: '/fr/guide/properties' }
          ]
        }
      ],
      '/fr/tools/': [
        {
          text: 'Outils d’annotation',
          items: [
            { text: 'Aperçu des outils', link: '/fr/tools/overview' },
            { text: 'Lignes, flèches et mesures', link: '/fr/tools/lines-arrows-measurements' },
            { text: 'Flèche', link: '/fr/tools/arrow' },
            { text: 'Mesure de ligne', link: '/fr/tools/line-measure' },
            { text: 'Ligne de cote', link: '/fr/tools/dimension-line' },
            { text: 'Formes', link: '/fr/tools/shapes' },
            { text: 'Texte et bulles', link: '/fr/tools/text-callouts' },
            { text: 'Bulle (rectangle)', link: '/fr/tools/callout-rectangle' },
            { text: 'Icônes et tampons', link: '/fr/tools/icons-stamps' },
            { text: 'Focus et confidentialité', link: '/fr/tools/focus-privacy' },
            { text: 'Loupe', link: '/fr/tools/loupe' },
            { text: 'Flou et mosaïque', link: '/fr/tools/blur-and-mosaic' },
            { text: 'Dessin à main levée et surlignage', link: '/fr/tools/freehand-highlight' },
            { text: 'Images et composition', link: '/fr/tools/images-compose' }
          ]
        }
      ],
      '/fr/workflows/': [
        {
          text: 'Terminer votre travail',
          items: [
            { text: 'Projets', link: '/fr/workflows/projects' },
            { text: 'Notes de projet', link: '/fr/workflows/notes' },
            { text: 'Enregistrer, exporter et partager', link: '/fr/workflows/save-export-share' }
          ]
        }
      ],
      '/fr/help/': [
        {
          text: 'Compte et préférences',
          items: [
            { text: 'Réglages', link: '/fr/help/settings' },
            { text: 'Premium et achats', link: '/fr/help/premium' }
          ]
        },
        {
          text: 'Aide',
          items: [
            { text: 'FAQ', link: '/fr/help/faq' },
            { text: 'Dépannage', link: '/fr/help/troubleshooting' }
          ]
        }
      ],
      '/fr/updates/': [
        { text: 'Nouveautés', items: [{ text: 'Quoi de neuf', link: '/fr/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: 'Sur cette page' },
    docFooter: { prev: 'Précédent', next: 'Suivant' },
    langMenuLabel: 'Changer de langue',
    returnToTopLabel: 'Retour en haut',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre',
    skipToContentLabel: 'Aller au contenu',
    lastUpdated: { text: 'Dernière mise à jour' },
    notFound: {
      title: 'PAGE INTROUVABLE',
      quote: 'La page demandée n’existe pas ou a été déplacée.',
      linkLabel: 'retour à l’accueil',
      linkText: 'Retour à l’accueil'
    }
  }
}
