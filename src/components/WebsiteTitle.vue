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
  font-size: clamp(var(--font-size-xl), var(--font-size-title-fluid), var(--font-size-display-max));
  font-weight: var(--font-weight-bold);
  color: var(--color-dark);
  margin: 0;
  animation: fadeInScale var(--duration-title-animation) ease-out;
  text-shadow: var(--shadow-text);
  letter-spacing: var(--letter-spacing-title);
  transition: font-size var(--duration-default) var(--ease-standard);
}

/* noinspection CssUnusedSymbol */
.website-title--small {
  font-size: clamp(
    var(--font-size-base),
    var(--font-size-title-small-fluid),
    var(--font-size-display-small-max)
  );
}

@media (prefers-color-scheme: dark) {
  .website-title {
    color: var(--color-white);
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
