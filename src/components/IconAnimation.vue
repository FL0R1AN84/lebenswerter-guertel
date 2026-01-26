<script lang="ts" setup>
defineOptions({
  name: 'AnimatedHeart',
})
</script>

<template>
  <div class="heart-container">
    <svg class="heart" viewBox="0 0 100 100">
      <path
        d="M50,85 C25,70 10,55 10,40 C10,28 18,20 28,20 C36,20 44,26 50,34 C56,26 64,20 72,20 C82,20 90,28 90,40 C90,55 75,70 50,85 Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<style scoped>
.heart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
}

.heart {
  width: 100%;
  height: 100%;
  color: #ff1493;
  animation: heartbeat 1.2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1);
  }
}
</style>
