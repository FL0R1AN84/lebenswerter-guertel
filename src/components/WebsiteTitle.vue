<script lang="ts" setup></script>

<template>
  <h1 class="website-title">Lebenswerter Gürtel</h1>
</template>

<style scoped>
.website-title {
  font-size: clamp(1.5rem, 8vw, 3.5rem);
  font-weight: 700;
  color: #181818;
  margin: 0;
  animation: fadeInScale 1s ease-out;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
