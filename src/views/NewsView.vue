<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import IGGruendung from '@/components/news/2026/IGGruendung.vue'
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
