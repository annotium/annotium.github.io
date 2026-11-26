import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(
      DefaultTheme.Layout,
      null,
      {
        'home-hero-before': () =>
          h('img', {
            class: 'home-hero-banner',
            src: '/images/homepage/annotium-header-v2.webp',
            alt: 'Annotated garage photo showing a Check clearance callout, a highlighted hinge, and a 2.40 m dimension line.',
            width: 5244,
            height: 2950,
            fetchpriority: 'high',
          }),
      },
    ),
}
