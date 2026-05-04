<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'IG Lebenswerter Gürtel – Tempo 30 für den Kölner Gürtel',
  meta: [
    {
      name: 'description',
      content:
        'Die IG Lebenswerter Gürtel setzt sich für Tempo 30 auf dem Kölner Gürtel ein – für weniger Lärm, bessere Luft und mehr Verkehrssicherheit im Kölner Südwesten.',
    },
    {
      name: 'keywords',
      content: 'Lebenswerter Gürtel, Tempo 30, Köln, Verkehrslärm, Lärmschutz, Kölner Gürtel, IG Lebenswerter Gürtel',
    },
    { property: 'og:title', content: 'IG Lebenswerter Gürtel – Tempo 30 für den Kölner Gürtel' },
    {
      property: 'og:description',
      content:
        'Die IG Lebenswerter Gürtel setzt sich für Tempo 30 auf dem Kölner Gürtel ein – für weniger Lärm, bessere Luft und mehr Verkehrssicherheit.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'de_DE' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'IG Lebenswerter Gürtel – Tempo 30 für den Kölner Gürtel' },
    {
      name: 'twitter:description',
      content:
        'Die IG Lebenswerter Gürtel setzt sich für Tempo 30 auf dem Kölner Gürtel ein – für weniger Lärm, bessere Luft und mehr Verkehrssicherheit.',
    },
  ],
})
</script>

<template>
  <HeaderNavigation />
  <main>
    <div class="flex flex-col items-center justify-center bg-linear-to-br from-(--color-blue) to-(--color-green)">
      <h2 class="text-2xl md:text-4xl font-bold text-white py-8 px-2 lg:px-0 text-center">
        Die Luxemburger ist wieder lebenswert.
      </h2>
      <img
        alt="Bild mit der Aufschrift: Ab sofort Tempo 30 auf der Lux. Weniger Lärm, bessere Luft, mehr Sicherheit für alle Wir bedanken uns für die große Unterstützung aus den Veedeln"
        class="w-full max-w-295 px-4 lg:px-0"
        src="/IGLux_Kinowerbung.webp"
      />
      <h3 class="text-2xl md:text-4xl font-bold text-white py-8 px-2 lg:px-0 text-center">
        Jetzt machen wir den Gürtel wieder lebenswert!
      </h3>
    </div>
    <div class="cta-banner">
      <div class="cta-banner__inner">
        <div class="cta-banner__text">
          <h2 class="cta-banner__title">Jetzt selbst aktiv werden!</h2>
          <p class="cta-banner__body">
            Als Anwohnerin oder Anwohner des Kölner Gürtels haben Sie das Recht, einen formellen Antrag auf Verkehrslärm
            reduzierende Maßnahmen bei der Stadt Köln zu stellen. Nutzen Sie dieses Recht – je mehr Anträge gestellt
            werden, desto größer der Druck auf die Entscheidungsträger.
          </p>
        </div>
        <router-link class="cta-banner__button" to="/antrag">
          <svg
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Zum Antrag
        </router-link>
      </div>
    </div>
    <div class="cta-note">
      <div class="cta-note__inner">
        <p>
          Interesse, sich in der IG Lebenswerter Gürtel zu engagieren? Melde dich bei uns auf
          <a
            class="cta-note__link"
            href="https://instagram.com/lebenswerter_guertel/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg class="size-4" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
            @lebenswerter_guertel
          </a>
          oder per
          <router-link class="cta-note__link" to="/kontakt#kontakt">E-Mail</router-link>.
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center py-8 px-2 lg:px-0">
      <h1 class="flex flex-col sm:flex-row items-center gap-4 text-(--color-pink) text-center sm:text-left">
        <span class="text-6xl md:text-8xl font-bold">5</span>
        <span class="text-3xl md:text-4xl leading-tight"> gute Gründe<br />für Tempo 30 </span>
      </h1>
      <section class="w-full max-w-295 flex flex-col items-center px-2 lg:px-0">
        <section class="home-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
          <h2 class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-(--color-pink) py-4">
            <span
              class="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-(--color-pink) text-white text-3xl sm:text-4xl font-bold shrink-0"
              >1</span
            >
            <span class="text-xl sm:text-2xl leading-tight">
              Tempo 30 senkt den wahrgenommenen Verkehrslärm gegenüber Tempo 50 um die Hälfte.
            </span>
          </h2>
          <img
            alt="Bild mit 2 Autos, eines mit Tempo 50 und eines mit Tempo 30. Das Auto mit Tempo 50 hat Schallwellen die weiter reichen als das Auto mit Tempo 30."
            class="w-full h-auto"
            src="/01.webp"
          />
          <p>
            Die Europäische Umweltagentur schätzt, dass jährlich 12.000 vorzeitige Todesfälle und rund 50.000
            Herz-Kreislauf-Erkrankungen durch Lärm verursacht werden.<sup
              ><span class="text-(--color-pink) font-bold">1 </span></sup
            >Eine Lärmreduktion an der Luxemburger Straße ist durch Tempo 30 schnell und günstig möglich.
          </p>
        </section>
        <section class="home-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
          <h2 class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-(--color-pink) py-4">
            <span
              class="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-(--color-pink) text-white text-3xl sm:text-4xl font-bold shrink-0"
              >2</span
            >
            <span class="text-xl sm:text-2xl leading-tight">
              Der Anhalteweg durch Tempo 30 reduziert sich um die Hälfte.
            </span>
          </h2>
          <img
            alt="Bild mit den Anhaltewegen beim Bremsen bei Tempo 30 sind es 13,3 Meter und bei Tempo 50 sind es 27,7 Meter."
            class="w-full h-auto"
            src="/02.webp"
          />
          <p>
            Tempo 30 sorgt für mehr Sicherheit. Nach der Einführung von Tempo 30 an den Kölner Ringen ging die Anzahl an
            Unfällen mit Personenschaden um 28 % zurück. Die Unfälle mit schwer- verletzten Personen sanken um 47 %.<sup
              ><span class="text-(--color-pink) font-bold">2</span></sup
            >
          </p>
        </section>
        <section class="home-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
          <h2 class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-(--color-pink) py-4">
            <span
              class="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-(--color-pink) text-white text-3xl sm:text-4xl font-bold shrink-0"
              >3</span
            >
            <span class="text-xl sm:text-2xl leading-tight">
              Bei Tempo 30 ist die Überlebenschance von Zufußgehenden bei einer Kollision durch ein Auto viermal höher.
            </span>
          </h2>
          <img
            alt="Bild mit dem Hinweis bei Tempo 30: 9 von 10 überleben eine Kollision bei 30 km/h und bei Tempo 50: nur 2 von 10 überlebt eine Kollision bei 50 km/h"
            class="w-full h-auto"
            src="/04.webp"
          />
        </section>
        <section class="home-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
          <h2 class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-(--color-pink) py-4">
            <span
              class="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-(--color-pink) text-white text-3xl sm:text-4xl font-bold shrink-0"
              >4</span
            >
            <span class="text-xl sm:text-2xl leading-tight">
              Tempo 30 erhöht die Aufenthaltsqualität und stärkt die Nachbarschaft.
            </span>
          </h2>
          <p>
            Weniger Lärm, bessere Luft, mehr Verkehrssicherheit: Tempo 30 sorgt dafür, dass wir uns lieber draußen
            aufhalten. Sichere Wege zu Fuß und mit dem Rad zurückzulegen und auf schönen Außenterrassen der Gastronomie
            zu sitzen, stärkt die Nachbarschaft. Dies sorgt für ein belebteres Umfeld, wovon gerade auch der
            Einzelhandel und Gewerbe- treibende profitieren.
          </p>
          <img
            alt="Bild mit der Information das die Zeit die Kinder (5 bis 7 Jahre) ohne Aufsicht im Umfeld des Wohnorts draußen spielen, bei Tempo 50 (Durchgangsverkehr) sind es 32 Minuten, bei Tempo 30 (Durchgangsverkehr) sind es 53 Minuten und bei Tempo 30 (Verkehrsberuhigt) sind es 66 Minuten."
            class="w-full h-auto"
            src="/04.webp"
          />
        </section>
        <section class="home-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
          <h2 class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-(--color-pink) py-4">
            <span
              class="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-(--color-pink) text-white text-3xl sm:text-4xl font-bold shrink-0"
              >5</span
            >
            <span class="text-xl sm:text-2xl leading-tight">
              Tempo 30 reduziert die Luftschadstoffbelastung, wenn die Qualität des Verkehrsflusses beibehalten oder
              verbessert wird.
            </span>
          </h2>
          <p>
            Der Gürtel ist nach wie vor stark luftverschmutzt. Erst seit Kurzem werden die Grenzwerte der
            Luftreinhaltung auf der Luxemburger Straße knapp eingehalten. Voraussichtlich werden auf EU-Ebene die
            Grenzwerte im Jahr 2030 erheblich verschärft. Eine Strategie, wie diese neuen Werte eingehalten werden
            sollen, fehlt bislang. Tempo 30 trägt auch zu einer besseren Luftreinhaltung bei, wie beispielsweise ein
            Reallabor im Jahr 2021 in der Essener Alfredstraße gezeigt hat. Die Ampeln der Lux wurden 2019 modernisiert,
            weshalb diese auf optimalen Verkehrsfluß für Tempo 30 umprogrammiert werden können. Die Stadtbahn kann
            weiterhin schneller fahren.
          </p>
          <img
            alt="Bild mit der Information der Auswertungen an drei Berliner Hauptverkehrsstraßen: Tempo 30 sorgt für bessere Luft."
            class="w-full h-auto"
            src="/05.webp"
          />
        </section>
        <section class="home-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
          <h2 class="text-2xl font-bold text-(--color-pink) py-4 pl-2 lg:pl-0">Quellen:</h2>
          <p>
            <span class="text-(--color-pink) font-bold">1</span> European Environment Agency (EEA)
            <a
              class="text-(--color-blue) hover:underline"
              href="https://www.eea.europa.eu/de/highlights/die-zahl-der-europaeer-die"
              rel="noopener noreferrer"
              target="_blank"
              >https://www.eea.europa.eu/de/highlights/die-zahl-der-europaeer-die</a
            >
          </p>
          <p>
            <span class="text-(--color-pink) font-bold">2</span> Deutscher Verkehrssicherheitsrat (DVR),
            Beispielsammlung Innenstadtringe, Köln
            <a
              class="text-(--color-blue) hover:underline"
              href="https://www.dvr.de/themen/verkehrsinfrastruktur/beispielsammlung-gute-strassen-in-stadt-und-dorf/koeln-innenstadtringe"
              rel="noopener noreferrer"
              target="_blank"
              >https://www.dvr.de/themen/verkehrsinfrastruktur/beispielsammlung-gute-strassen-in-stadt-und-dorf/koeln-innenstadtringe</a
            >
          </p>
          <p>
            <span class="text-(--color-pink) font-bold">3</span> OECD/ECMT Transport Research Centre: Speed Management
            report, Paris 2006
          </p>
          <p>
            <span class="text-(--color-pink) font-bold">4</span> Peter Höfflin, Die Qualitäten urbaner Räume und deren
            Bedeutung für die Entwicklung von Kindern, 2019
            <a
              class="text-(--color-blue) hover:underline"
              href="https://www.vhw.de/fileadmin/user_upload/08_publikationen/verbandszeitschrift/FWS/2019/1_2019/FWS_1_19_Hoefflin.pdf"
              rel="noopener noreferrer"
              target="_blank"
              >https://www.vhw.de/fileadmin/user_upload/08_publikationen/verbandszeitschrift/FWS/2019/1_2019/FWS_1_19_Hoefflin.pdf</a
            >
          </p>
          <p>
            <span class="text-(--color-pink) font-bold">5</span> Umweltbundesamt (UBA) (2016). „Wirkungen von Tempo 30
            an Hauptverkehrsstraßen", Seite 14f
            <a
              class="text-(--color-blue) hover:underline"
              href="https://www.umweltbundesamt.de/sites/default/files/medien/2546/publikationen/wirkungen_von_tempo_30_an_hauptstrassen.pdf"
              rel="noopener noreferrer"
              target="_blank"
              >https://www.umweltbundesamt.de/sites/default/files/medien/2546/publikationen/wirkungen_von_tempo_30_an_hauptstrassen.pdf</a
            >
          </p>
          <p>
            <span>Texte und Bilder sind aus dem Flyer der IG Lebenswerte Lux </span>
            <a
              class="text-(--color-blue) hover:underline"
              href="https://lebenswerte-lux.koeln/.cm4all/uproc.php/0/Flyer_Tempo30_IGLebenswerteLux.pdf"
              rel="noopener noreferrer"
              target="_blank"
              >https://lebenswerte-lux.koeln/.cm4all/uproc.php/0/Flyer_Tempo30_IGLebenswerteLux.pdf</a
            >
          </p>
        </section>
      </section>
    </div>
  </main>
</template>

<style scoped>
.cta-banner {
  background-color: color-mix(in srgb, var(--color-green) 12%, transparent);
  border-top: 3px solid var(--color-green);
  border-bottom: 3px solid var(--color-green);
  padding: 2rem 1.5rem;
}

.cta-banner__inner {
  max-width: 74rem; /* max-w-295 equivalent */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.cta-banner__text {
  flex: 1;
  min-width: 200px;
}

.cta-banner__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-blue);
  margin-bottom: 0.5rem;
}

.cta-banner__body {
  line-height: 1.6;
  color: inherit;
}

.cta-banner__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background-color: var(--color-green);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.3s;
}

.cta-banner__button:hover {
  background-color: var(--color-blue);
}

.cta-note {
  background-color: color-mix(in srgb, var(--color-blue) 6%, transparent);
  border-bottom: 2px solid color-mix(in srgb, var(--color-blue) 20%, transparent);
  padding: 0.875rem 1.5rem;
  text-align: center;
}

.cta-note__inner {
  max-width: 74rem;
  margin: 0 auto;
  line-height: 1.6;
}

.cta-note__link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-blue);
  font-weight: 600;
  text-decoration: none;
  vertical-align: bottom;
}

.cta-note__link:hover {
  text-decoration: underline;
}

.home-section {
  margin-top: 2rem;
  padding: 1.5rem;
  border-left: 4px solid var(--color-blue);
  border-radius: 4px;
}

.home-section img {
  border-radius: 4px;
}

.home-section p {
  line-height: 1.6;
  margin: 1rem 0;
  word-break: break-word;
  overflow-wrap: break-word;
}

.home-section a {
  word-break: break-all;
}
</style>
