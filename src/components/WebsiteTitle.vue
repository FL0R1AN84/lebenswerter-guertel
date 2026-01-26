<script lang="ts" setup></script>

<template>
  <h1 class="website-title">lebenswerter-guertel</h1>
  <p class="subtitle">Under Construction</p>
</template>

<style scoped>
.website-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  animation: fadeInScale 1s ease-out;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0.5rem;
  animation: fadeIn 1.5s ease-out;
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
