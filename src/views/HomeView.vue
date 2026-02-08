<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
</script>

<template>
  <HeaderNavigation />
  <main>
    <div
      class="flex flex-col items-center justify-center bg-linear-to-br from-(--color-blue) to-(--color-green)"
    >
      <h2 class="text-4xl font-bold text-white py-8 pl-2 lg:pl-0">
        Die Luxemburger ist wieder lebenswert.
      </h2>
      <img
        alt="Bild mit der Aufschrift: Ab sofort Tempo 30 auf der Lux. Weniger Lärm, bessere Luft, mehr Sicherheit für alle Wir bedanken uns für die große Unterstützung aus den Veedeln"
        src="/IGLux_Kinowerbung.webp"
      />
      <h3 class="text-4xl font-bold text-white py-8 pl-2 lg:pl-0">
        Jetzt machen wir den Gürtel wieder lebenswert!
      </h3>
    </div>
    <div class="flex flex-col items-center justify-center py-8 pl-2 lg:pl-0">
      <h1 class="flex items-center gap-4 text-(--color-pink)">
        <span class="text-8xl font-bold">5</span>
        <span class="text-4xl leading-tight"> gute Gründe<br />für Tempo 30 </span>
      </h1>
      <section class="max-w-295 flex flex-col items-center">
        <section class="home-section shadow-md dark:shadow-sm">
          <h2 class="flex items-center gap-4 text-(--color-pink)">
            <span class="text-4xl font-bold">1</span>
            <span class="text-2xl leading-tight py-4 pl-2 lg:pl-0">
              Tempo 30 senkt den wahrgenommenen Verkehrslärm gegen über Tempo 50 um die Hälfte.
            </span>
          </h2>
          <img
            alt="Bild mit der Aufschrift: Ab sofort Tempo 30 auf der Lux. Weniger Lärm, bessere Luft, mehr Sicherheit für alle Wir bedanken uns für die große Unterstützung aus den Veedeln"
            src="/01.webp"
          />
          <p>
            Die Europäische Umweltagentur schätzt, dass jährlich 12.000 vorzeitige Todesfälle und
            rund 50.000 Herz-Kreislauf-Erkran- kungen durch Lärm verursacht werden.1 Eine
            Lärmreduktion an der Luxemburger Straße ist durch Tempo 30 schnell und günstig möglich.
          </p>
        </section>
      </section>
    </div>
  </main>
</template>

<style scoped>
.home-section {
  margin-top: 2rem;
  padding-left: 1.5rem;
  border-left: 4px solid var(--color-blue);
  border-radius: 4px;
}

.home-section p {
  line-height: 1.6;
  margin: 1rem 0;
}
</style>
