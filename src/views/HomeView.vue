<script lang="ts" setup>
import IconAnimation from '../components/IconAnimation.vue'
import WebsiteTitle from '../components/WebsiteTitle.vue'
</script>

<template>
  <header class="bg-center">
    <IconAnimation class="pl-4 md:pl-0" />
    <WebsiteTitle class="pl-4 md:pl-0" />
  </header>
  <main class="main">
    <div>
      <h2 class="text-4xl font-bold text-white py-8 pl-2 lg:pl-0">
        Die Luxemburger ist wieder lebenswert.
      </h2>
      <img
        alt="Bild mit der Aufschrift: Ab sofort Tempo 30 auf der Lux. Weniger Lärm, bessere Luft, mehr Sicherheit für alle Wir bedanken uns für die große Unterstützung aus den Veedeln"
        src="/IGLux_Kinowerbung.jpg"
      />
      <h3 class="text-4xl font-bold text-white py-8 pl-2 lg:pl-0">
        Jetzt machen wir den Gürtel wieder lebenswert!
      </h3>
    </div>
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #009ee3 0%, #74b828 100%);
}
</style>
