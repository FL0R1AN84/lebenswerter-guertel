<script lang="ts" setup>
import IconAnimation from '@/components/IconAnimation.vue'
import WebsiteTitle from '@/components/WebsiteTitle.vue'
</script>

<template>
  <router-link to="/">
    <header
      class="sticky top-0 z-50 flex items-center justify-center bg-white dark:bg-[#181818] shadow-md py-8 pl-4 md:pl-0"
    >
      <IconAnimation />
      <WebsiteTitle />
    </header>
  </router-link>
</template>

<style scoped></style>
