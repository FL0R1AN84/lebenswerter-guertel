<script lang="ts" setup>
import IconAnimation from '../components/IconAnimation.vue'
import WebsiteTitle from '../components/WebsiteTitle.vue'
</script>

<template>
  <main class="under-construction">
    <IconAnimation />
    <WebsiteTitle />
  </main>
</template>

<style scoped>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
