import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { h } from 'vue'
import './custom.css'

const heroAlt: Record<string, string> = {
  'en-US':
    'Annotated garage photo showing a Check clearance callout, a highlighted hinge, and a 2.40 m dimension line.',
  'pt-BR':
    'Foto anotada de uma garagem com um balão “Verificar folga”, uma dobradiça destacada e uma linha de cota de 2,40 m.',
  'es-ES':
    'Foto anotada de un garaje con una llamada «Comprobar holgura», una bisagra resaltada y una línea de cota de 2,40 m.',
  'fr-FR':
    'Photo annotée d’un garage avec une bulle « Vérifier le dégagement », une charnière surlignée et une ligne de cote de 2,40 m.',
  'zh-CN':
    '带标注的车库照片：包含“检查间隙”标注框、高亮的铰链，以及一条 2.40 米的尺寸线。',
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { lang } = useData()
    return h(
      DefaultTheme.Layout,
      null,
      {
        'home-hero-before': () =>
          h('img', {
            class: 'home-hero-banner',
            src: '/images/homepage/annotium-header-v2.webp',
            alt: heroAlt[lang.value] ?? heroAlt['en-US'],
            width: 5244,
            height: 2950,
            fetchpriority: 'high',
          }),
      },
    )
  },
}
