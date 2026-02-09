<script lang="ts" setup>
import IconAnimation from '@/components/IconAnimation.vue'
import WebsiteTitle from '@/components/WebsiteTitle.vue'
</script>

<template>
  <router-link to="/">
    <header
      class="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-center bg-white dark:bg-(--color-dark) shadow-md py-8 px-4"
    >
      <IconAnimation />
      <WebsiteTitle />
    </header>
  </router-link>
</template>

<style scoped></style>
