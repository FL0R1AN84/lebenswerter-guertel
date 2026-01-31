<script lang="ts" setup>
import IconAnimation from '../components/IconAnimation.vue'
import WebsiteTitle from '../components/WebsiteTitle.vue'
</script>

<template>
  <header class="bg-center">
    <IconAnimation />
    <WebsiteTitle />
  </header>
  <main class="main"></main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: auto;
  padding: 2rem 0;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #009ee3 0%, #74b828 100%);
}
</style>
