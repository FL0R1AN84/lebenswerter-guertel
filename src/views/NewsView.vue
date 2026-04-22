<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import IGGruendung from '@/components/news/2026/IGGruendung.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Aktuelles – IG Lebenswerter Gürtel',
  meta: [
    {
      name: 'description',
      content:
        'Aktuelle Pressemitteilungen und Neuigkeiten der Initiative „IG Lebenswerter Gürtel" – gegründet von Anwohnenden des Kölner Gürtels im Kampf gegen Verkehrslärm.',
    },
    { name: 'keywords', content: 'IG Lebenswerter Gürtel, Aktuelles, Pressemitteilung, Gründung, Untätigkeitsklage, Köln, Gürtel, Tempo 30' },
    { property: 'og:title', content: 'Aktuelles – IG Lebenswerter Gürtel' },
    {
      property: 'og:description',
      content:
        'Aktuelle Pressemitteilungen und Neuigkeiten der Initiative „IG Lebenswerter Gürtel" – gegründet von Anwohnenden des Kölner Gürtels im Kampf gegen Verkehrslärm.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'de_DE' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Aktuelles – IG Lebenswerter Gürtel' },
    {
      name: 'twitter:description',
      content:
        'Aktuelle Pressemitteilungen und Neuigkeiten der Initiative „IG Lebenswerter Gürtel" – gegründet von Anwohnenden des Kölner Gürtels.',
    },
  ],
})
</script>

<template>
  <HeaderNavigation />
  <main class="news-container">
    <section class="news-content">
      <h1 class="news-title">Aktuelles</h1>

      <section class="news-year-group">
        <h2 class="news-year-heading">2026</h2>
        <IGGruendung />
      </section>
    </section>
  </main>
</template>

<style scoped>
.news-container {
  min-height: calc(100vh - 200px);
  padding: 1rem;
}

.news-content {
  max-width: 800px;
  margin: 0 auto;
}

.news-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-blue);
  margin-bottom: 2rem;
  text-align: center;
}

.news-year-group {
  margin-bottom: 3rem;
}

.news-year-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-green);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .news-container {
    padding: 1rem;
  }

  .news-title {
    font-size: 1.75rem;
  }
}
</style>
