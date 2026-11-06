<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import IconAnimation from '@/components/IconAnimation.vue'
import WebsiteTitle from '@/components/WebsiteTitle.vue'

const isScrolled = ref(false)
const route = useRoute()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 flex flex-col items-center justify-center bg-(--color-white) dark:bg-(--color-dark) site-header-shadow px-4 transition-all duration-300',
      isScrolled ? 'py-2' : 'py-8',
    ]"
  >
    <router-link class="flex flex-col md:flex-row items-center gap-4" to="/">
      <IconAnimation :is-scrolled="isScrolled" />
      <WebsiteTitle :is-scrolled="isScrolled" />
    </router-link>
    <nav class="mt-3 flex gap-6">
      <router-link v-if="route.path !== '/'" active-class="nav-link--active" class="nav-link" to="/">
        Startseite
      </router-link>
      <router-link active-class="nav-link--active" class="nav-link" to="/aktuelles"> Aktuelles </router-link>
      <router-link active-class="nav-link--active" class="nav-link" to="/antrag"> Antrag </router-link>
      <router-link active-class="nav-link--active" class="nav-link" to="/kontakt#kontakt"> Kontakt </router-link>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  display: inline-flex;
  align-items: center;
  min-height: var(--size-nav-link-height);
  padding: var(--space-1) var(--space-2);
  color: var(--color-green);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  transition: color var(--duration-default);
}

.nav-link:hover,
/* noinspection CssUnusedSymbol */
.nav-link--active {
  color: var(--color-blue);
}

.nav-link:focus {
  outline: var(--border-width-medium) solid var(--color-blue);
  outline-offset: var(--space-1);
  border-radius: var(--radius-small);
}
</style>
