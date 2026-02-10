<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import IconAnimation from '@/components/IconAnimation.vue'
import WebsiteTitle from '@/components/WebsiteTitle.vue'

const isScrolled = ref(false)

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
  <router-link to="/">
    <header
      :class="[
        'sticky top-0 z-50 flex flex-col md:flex-row items-center justify-center bg-white dark:bg-(--color-dark) shadow-md px-4 transition-all duration-300',
        isScrolled ? 'py-2' : 'py-8',
      ]"
    >
      <IconAnimation :is-scrolled="isScrolled" />
      <WebsiteTitle :is-scrolled="isScrolled" />
    </header>
  </router-link>
</template>

<style scoped></style>
