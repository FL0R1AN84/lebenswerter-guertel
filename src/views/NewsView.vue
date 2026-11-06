<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import KlageKSTA from '@/components/news/2026/KlageKSTA.vue'
import SpeedDriverKSTA from '@/components/news/2026/SpeedDriverKSTA.vue'
import Spendenkampagne from '@/components/news/2026/Spendenkampagne.vue'
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
    {
      name: 'keywords',
      content:
        'IG Lebenswerter Gürtel, Aktuelles, Pressemitteilung, Gründung, Untätigkeitsklage, Köln, Gürtel, Tempo 30',
    },
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
        <KlageKSTA />
        <SpeedDriverKSTA />
        <Spendenkampagne />
        <IGGruendung />
      </section>
    </section>
  </main>
</template>

<style scoped>
.news-container {
  min-height: calc(var(--size-viewport-min) - var(--size-footer-reserved));
  padding: var(--space-4);
}

.news-content {
  max-width: var(--size-content);
  margin: 0 auto;
}

.news-title {
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-bold);
  color: var(--color-blue);
  margin-bottom: var(--space-8);
  text-align: center;
}

.news-year-group {
  margin-bottom: var(--space-12);
}

.news-year-heading {
  font-size: var(--font-size-heading-mobile);
  font-weight: var(--font-weight-bold);
  color: var(--color-green);
  padding-bottom: var(--space-2);
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .news-container {
    padding: var(--space-4);
  }

  .news-title {
    font-size: var(--font-size-heading-mobile);
  }
}
</style>
