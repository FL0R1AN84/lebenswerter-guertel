<script lang="ts" setup>
import IconAnimation from '@/components/IconAnimation.vue'
import WebsiteTitle from '@/components/WebsiteTitle.vue'
</script>

<template>
  <router-link to="/">
    <header class="bg-center">
      <IconAnimation class="pl-4 md:pl-0" />
      <WebsiteTitle class="pl-4 md:pl-0" />
    </header>
  </router-link>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
</style>
