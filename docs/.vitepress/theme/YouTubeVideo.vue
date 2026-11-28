<script setup lang="ts">
import { useData } from 'vitepress'

defineProps<{ id: string; title: string; vertical?: boolean }>()

const { lang } = useData()
const watchLabels: Record<string, string> = {
  'en-US': 'Watch on YouTube',
  'zh-CN': '在 YouTube 上观看',
  'fr-FR': 'Regarder sur YouTube',
  'es-ES': 'Ver en YouTube',
  'pt-BR': 'Assistir no YouTube',
  'ru-RU': 'Смотреть на YouTube',
  'ja-JP': 'YouTube で見る',
  'th-TH': 'ดูบน YouTube',
  'ko-KR': 'YouTube에서 보기',
}
</script>

<template>
  <figure class="youtube-video" :class="{ 'youtube-video--vertical': vertical }">
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${id}`"
      :title="title"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
    <figcaption>
      <a :href="vertical ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`">
        {{ watchLabels[lang] ?? watchLabels['en-US'] }} — {{ title }}
      </a>
    </figcaption>
  </figure>
</template>

<style scoped>
.youtube-video {
  max-width: 720px;
  margin: 1rem auto;
}

.youtube-video--vertical {
  max-width: 360px;
}

.youtube-video iframe {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 12px;
}

.youtube-video--vertical iframe {
  aspect-ratio: 9 / 16;
}

.youtube-video figcaption {
  margin-top: 0.5rem;
  text-align: center;
}
</style>
