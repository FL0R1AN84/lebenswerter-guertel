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
        <section class="home-section shadow-md dark:shadow-sm dark:shadow-neutral-800/50">
          <h2 class="flex items-center gap-4 text-(--color-pink) py-4 pl-2 lg:pl-0">
            <span
              class="flex items-center justify-center w-16 h-16 rounded-full bg-(--color-pink) text-white text-4xl font-bold p-2 lg:p-5"
              >1</span
            >
            <span class="text-2xl leading-tight py-4 pl-2 lg:pl-0">
              Tempo 30 senkt den wahrgenommenen Verkehrslärm gegen über Tempo 50 um die Hälfte.
            </span>
          </h2>
          <img
            alt="Bild mit 2 Autos, eines mit Tempo 50 und eines mit Tempo 30. Das Auto mit Tempo 50 hat Schallwellen die weiter reichen als das Auto mit Tempo 30."
            src="/01.webp"
          />
          <p>
            Die Europäische Umweltagentur schätzt, dass jährlich 12.000 vorzeitige Todesfälle und
            rund 50.000 Herz-Kreislauf-Erkrankungen durch Lärm verursacht werden.<sup
              ><span class="text-(--color-pink) font-bold">1</span></sup
            >

            Eine Lärmreduktion an der Luxemburger Straße ist durch Tempo 30 schnell und günstig
            möglich.
          </p>
        </section>
        <section class="home-section shadow-md dark:shadow-sm dark:shadow-neutral-800/50">
          <h2 class="flex items-center gap-4 text-(--color-pink) py-4 pl-2 lg:pl-0">
            <span
              class="flex items-center justify-center w-16 h-16 rounded-full bg-(--color-pink) text-white text-4xl font-bold p-2 lg:p-5"
              >2</span
            >
            <span class="text-2xl leading-tight py-4 pl-2 lg:pl-0">
              Der Anhalteweg durch Tempo 30 reduziert sich um die Hälfte.
            </span>
          </h2>
          <img
            alt="Bild mit den Anhaltewegen beim Bremsen bei Tempo 30 sind es 13,3 Meter und bei Tempo 50 sind es 27,7 Meter."
            src="/02.webp"
          />
          <p>
            Tempo 30 sorgt für mehr Sicherheit. Nach der Einführung von Tempo 30 an den Kölner
            Ringen ging die Anzahl an Unfällen mit Personenschaden um 28 % zurück. Die Unfälle mit
            schwer- verletzten Personen sanken um 47 %.<sup
              ><span class="text-(--color-pink) font-bold">2</span></sup
            >
          </p>
        </section>
        <section class="home-section shadow-md dark:shadow-sm dark:shadow-neutral-800/50">
          <h2 class="flex items-center gap-4 text-(--color-pink) py-4 pl-2 lg:pl-0">
            <span
              class="flex items-center justify-center w-16 h-16 rounded-full bg-(--color-pink) text-white text-4xl font-bold p-2 lg:p-5"
              >3</span
            >
            <span class="text-2xl leading-tight py-4 pl-2 lg:pl-0">
              Bei Tempo 30 ist die Überlebenschance von Zufußgehenden bei einer Kollision durch ein
              Auto viermal höher.
            </span>
          </h2>
          <img
            alt="Bild mit dem Hinweis bei Tempo 30: 9 von 10 überleben eine Kollision bei 30 km/h und bei Tempo 50: nur 2 von 10 überlebt eine Kollision bei 50 km/h"
            class="py-2"
            src="/04.webp"
          />
        </section>
        <section class="home-section shadow-md dark:shadow-sm dark:shadow-neutral-800/50">
          <h2 class="flex items-center gap-4 text-(--color-pink) py-4 pl-2 lg:pl-0">
            <span
              class="flex items-center justify-center w-16 h-16 rounded-full bg-(--color-pink) text-white text-4xl font-bold p-2 lg:p-5"
              >4</span
            >
            <span class="text-2xl leading-tight py-4 pl-2 lg:pl-0">
              Tempo 30 erhöht die Aufenthaltsqualität und stärkt die Nachbarschaft.
            </span>
          </h2>
          <p>
            Weniger Lärm, bessere Luft, mehr Verkehrssicherheit: Tempo 30 sorgt dafür, dass wir uns
            lieber draußen aufhalten. Sichere Wege zu Fuß und mit dem Rad zurückzulegen und auf
            schönen Außenterrassen der Gastronomie zu sitzen, stärkt die Nachbarschaft. Dies sorgt
            für ein belebteres Umfeld, wovon gerade auch der Einzelhandel und Gewerbe- treibende
            profitieren.
          </p>
          <img
            alt="Bild mit der Information das die Zeit die Kinder (5 bis 7 Jahre) ohne Aufsicht im Umfeld des Wohnorts draußen spielen, bei Tempo 50 (Durchgangsverkehr) sind es 32 Minuten, bei Tempo 30 (Durchgangsverkehr) sind es 53 Minuten und bei Tempo 30 (Verkehrsberuhigt) sind es 66 Minuten."
            class="py-2"
            src="/04.webp"
          />
        </section>
        <section class="home-section shadow-md dark:shadow-sm dark:shadow-neutral-800/50">
          <h2 class="flex items-center gap-4 text-(--color-pink) py-4 pl-2 lg:pl-0">
            <span
              class="flex items-center justify-center w-16 h-16 rounded-full bg-(--color-pink) text-white text-4xl font-bold p-2 lg:p-5"
              >5</span
            >
            <span class="text-2xl leading-tight py-4 pl-2 lg:pl-0">
              Tempo 30 reduziert die Luftschadstoffbelastung, wenn die Qualität des Verkehrsflusses
              beibehalten oder verbessert wird.
            </span>
          </h2>
          <p>
            Der Gürtel ist nach wie vor stark luftverschmutzt. Erst seit Kurzem werden die
            Grenzwerte der Luftreinhaltung auf der Luxemburger Straße knapp eingehalten.
            Voraussichtlich werden auf EU-Ebene die Grenzwerte im Jahr 2030 erheblich verschärft.
            Eine Strategie, wie diese neuen Werte eingehalten werden sollen, fehlt bislang. Tempo 30
            trägt auch zu einer besseren Luftreinhaltung bei, wie beispielsweise ein Reallabor im
            Jahr 2021 in der Essener Alfredstraße gezeigt hat. Die Ampeln der Lux wurden 2019
            modernisiert, weshalb diese auf optimalen Verkehrsfluß für Tempo 30 umprogrammiert
            werden können. Die Stadtbahn kann weiterhin schneller fahren.
          </p>
          <img
            alt="Bild mit der Information der Auswertungen an drei Berliner Hauptverkehrsstraßen: Tempo 30 sorgt für bessere Luft."
            class="py-2"
            src="/05.webp"
          />
        </section>
        <section class="home-section shadow-md dark:shadow-sm dark:shadow-neutral-800/50">
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
            <span class="text-(--color-pink) font-bold">2</span> Deutscher Verkehrssicherheitsrat
            (DVR), Beispielsammlung Innenstadtringe, Köln
            <a
              class="text-(--color-blue) hover:underline"
              href="https://www.dvr.de/themen/verkehrsinfrastruktur/beispielsammlung-gute-strassen-in-stadt-und-dorf/koeln-innenstadtringe"
              rel="noopener noreferrer"
              target="_blank"
              >https://www.dvr.de/themen/verkehrsinfrastruktur/beispielsammlung-gute-strassen-in-stadt-und-dorf/koeln-innenstadtringe</a
            >
          </p>
          <p>
            <span class="text-(--color-pink) font-bold">3</span> OECD/ECMT Transport Research
            Centre: Speed Management report, Paris 2006
          </p>
          <p>
            <span class="text-(--color-pink) font-bold">4</span> Peter Höfflin, Die Qualitäten
            urbaner Räume und deren Bedeutung für die Entwicklung von Kindern, 2019
            <a
              class="text-(--color-blue) hover:underline"
              href="https://www.vhw.de/fileadmin/user_upload/08_publikationen/verbandszeitschrift/FWS/2019/1_2019/FWS_1_19_Hoefflin.pdf"
              rel="noopener noreferrer"
              target="_blank"
              >https://www.vhw.de/fileadmin/user_upload/08_publikationen/verbandszeitschrift/FWS/2019/1_2019/FWS_1_19_Hoefflin.pdf</a
            >
          </p>
          <p>
            <span class="text-(--color-pink) font-bold">5</span> Umweltbundesamt (UBA) (2016).
            „Wirkungen von Tempo 30 an Hauptverkehrsstraßen", Seite 14f
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
