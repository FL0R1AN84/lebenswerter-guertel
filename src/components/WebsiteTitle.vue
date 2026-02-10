<script lang="ts" setup>
defineProps<{
  isScrolled?: boolean
}>()
</script>

<template>
  <h1 :class="{ 'website-title--small': isScrolled }" class="website-title">Lebenswerter Gürtel</h1>
</template>

<style scoped>
.website-title {
  font-size: clamp(1.5rem, 8vw, 3.5rem);
  font-weight: 700;
  color: var(--color-dark);
  margin: 0;
  animation: fadeInScale 1s ease-out;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  transition: font-size 0.3s ease;
}

@media (max-width: 640px) {
  .website-title--small {
    font-size: clamp(1rem, 5vw, 2rem);
  }
}

@media (prefers-color-scheme: dark) {
  .website-title {
    color: white;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
