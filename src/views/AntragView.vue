<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Antrag auf Lärmschutz – IG Lebenswerter Gürtel',
  meta: [
    {
      name: 'description',
      content:
        'Stellen Sie einen Antrag auf Verkehrslärm reduzierende Maßnahmen nach § 45 Abs. 1 S. 2 Nr. 3 StVO auf dem Kölner Gürtel.',
    },
    {
      name: 'keywords',
      content: 'Antrag, Lärmschutz, Tempo 30, Kölner Gürtel, Köln, IG Lebenswerter Gürtel',
    },
    { property: 'og:title', content: 'Antrag auf Lärmschutz – IG Lebenswerter Gürtel' },
    {
      property: 'og:description',
      content: 'Stellen Sie einen Antrag auf Verkehrslärm reduzierende Maßnahmen auf dem Kölner Gürtel.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'de_DE' },
  ],
})
</script>

<template>
  <HeaderNavigation />
  <main class="antrag-container">
    <section class="antrag-content">
      <h1 class="antrag-title">Antrag auf Lärmschutz</h1>

      <section class="antrag-section surface-shadow">
        <h2>Jetzt selbst aktiv werden!</h2>
        <p>
          Als Anwohnerin oder Anwohner des Kölner Gürtels haben Sie das Recht, einen formellen Antrag auf Verkehrslärm
          reduzierende Maßnahmen bei der Stadt Köln zu stellen. Nutzen Sie dieses Recht – je mehr Anträge gestellt
          werden, desto größer der Druck auf die Entscheidungsträger.
        </p>
        <div class="button-group">
          <a
            class="download-button"
            download="Antrag_auf_Verkehrslaerm_reduzierende_Massnahmen.pdf"
            href="/downloads/Antrag_auf_Verkehrslaerm_reduzierende_Massnahmen.pdf"
          >
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            PDF herunterladen
          </a>
          <a
            class="download-button download-button--outline"
            href="/downloads/Antrag_auf_Verkehrslaerm_reduzierende_Massnahmen.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Im Browser öffnen
          </a>
        </div>
      </section>

      <section class="antrag-section surface-shadow">
        <h2>Antrag auf Verkehrslärm reduzierende Maßnahmen</h2>
        <p class="antrag-meta">nach § 45 Abs. 1 S. 2 Nr. 3 StVO auf dem [___]gürtel in Köln</p>

        <div class="letter-box">
          <div class="letter-header">
            <p><em>Name und Anschrift</em></p>
            <p>Köln, den ___. ___. 2026</p>
          </div>

          <div class="letter-recipient">
            <p>
              <a class="text-(--color-blue) hover:underline" href="mailto:oberbuergermeister@stadt-koeln.de"
                >oberbuergermeister@stadt-koeln.de</a
              >
            </p>
            <p>
              Herrn Oberbürgermeister Burmester<br />
              der Stadt Köln<br />
              Rathaus<br />
              50667 Köln
            </p>
          </div>

          <h3 class="letter-subject">
            Antrag auf Verkehrslärm reduzierende Maßnahmen<br />
            nach § 45 Abs. 1 S. 2 Nr. 3 StVO auf dem [___]gürtel in Köln
          </h3>

          <p>Sehr geehrter Herr Burmester,</p>

          <p>
            nach den Lärmkartierungen auf dem Onlineportal des Ministeriums für Umwelt, Naturschutz und Verkehr des
            Landes NRW sind Anwohnerinnen und Anwohner des [___]gürtels in Köln massiv von
            Straßenverkehrslärm betroffen.
          </p>

          <p>
            Diese Kartierung weist für meinen Wohnort Lärmpegel oberhalb der rechtlich relevanten Orientierungswerte der
            16. BImSchV aus. Gemäß § 45 Abs. 1 S. 2 Nr. 3 StVO können verkehrsbeschränkende Maßnahmen eingeführt werden,
            um die Wohnbevölkerung vor Lärm und Abgasen zu schützen. Daher beantrage ich hiermit die Prüfung auf
            immissionsschutzmindernde Maßnahmen. Tempo 30 wäre meines Erachtens z.B. eine geeignete Maßnahme.
          </p>

          <p>
            Ich wohne am <span class="fill-in" style="min-width: var(--size-fill-long);"></span>gürtel, Hausnummer
            <span class="fill-in" style="min-width: var(--size-fill-medium);"></span>, Etage
            <span class="fill-in" style="min-width: var(--size-fill-short);"></span>
          </p>

          <p>
            Laut Lärmkataster und Lärmaktionsplan für Köln beträgt die Belastung mehr als 70 dB tagsüber und mehr als 60
            dB nachts. Da erheblicher Verkehrslärm und Luftschadstoffe auf dem [___]gürtel die Gesundheit
            beeinträchtigen, erfordert dies ein Handeln der zuständigen Behörden.
          </p>

          <p>
            Ich bitte Sie, geeignete Maßnahmen innerhalb von 4 Wochen ab Zugang des Schreibens einzuleiten und den
            Eingang dieses Schreibens zu bestätigen.
          </p>

          <p>Mit freundlichen Grüßen</p>

          <div class="letter-signature">
            <div class="signature-line">
              <span class="fill-in-long"></span>
              <p class="signature-label">Unterschrift Name/Datum</p>
            </div>
            <div class="signature-line">
              <span class="fill-in-long"></span>
              <p class="signature-label">E-Mail Adresse</p>
            </div>
          </div>
        </div>
      </section>

      <section class="antrag-section surface-shadow">
        <h2>So gehen Sie vor</h2>
        <ul class="steps-list">
          <li><strong>PDF herunterladen oder öffnen</strong> – Laden Sie das Antragsformular herunter oder öffnen Sie es direkt im Browser.</li>
          <li>
            <strong>Ausfüllen</strong> – Tragen Sie Ihren Namen, Ihre Anschrift sowie Ihre Wohnadresse am Gürtel ein.
          </li>
          <li>
            <strong>Abschicken</strong> – Senden Sie den ausgefüllten Antrag per E-Mail an
            <a class="text-(--color-blue) hover:underline" href="mailto:oberbuergermeister@stadt-koeln.de"
              >oberbuergermeister@stadt-koeln.de</a
            >.
          </li>
        </ul>
        <p class="mt-4">
          Je mehr Anträge die Stadt Köln erhält, desto deutlicher wird das Signal aus den Veedeln. Sprechen Sie auch
          Ihre Nachbarinnen und Nachbarn an!
        </p>
      </section>
    </section>
  </main>
</template>

<style scoped>
.antrag-container {
  min-height: calc(var(--size-viewport-min) - var(--size-footer-reserved));
  padding: var(--space-4);
}

.antrag-content {
  max-width: var(--size-content);
  margin: 0 auto;
}

.antrag-title {
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-bold);
  color: var(--color-blue);
  margin-bottom: var(--space-8);
  text-align: center;
}

.antrag-section {
  margin-bottom: var(--space-8);
  padding: var(--space-6);
  border-left: var(--border-width-strong) solid var(--color-green);
  border-radius: var(--radius-medium);
}

.antrag-section h2 {
  color: var(--color-blue);
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-4);
}

.antrag-section p {
  line-height: var(--line-height-body);
  margin: var(--space-2) 0;
}

.antrag-meta {
  color: var(--color-green);
  font-style: italic;
  margin-bottom: var(--space-6) !important;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background-color: var(--color-blue);
  color: var(--color-white);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-large);
  text-decoration: none;
  transition: background-color var(--duration-default);
}

.download-button:hover {
  background-color: var(--color-green);
}

.download-button--outline {
  background-color: transparent;
  color: var(--color-blue);
  border: var(--border-width-medium) solid var(--color-blue);
}

.download-button--outline:hover {
  background-color: var(--color-blue);
  color: var(--color-white);
}

.letter-box {
  background-color: var(--color-blue-subtle);
  border: var(--border-width) solid var(--color-blue-border);
  border-radius: var(--radius-large);
  padding: var(--space-6) var(--space-8);
  margin-top: var(--space-4);
  line-height: var(--line-height-letter);
}

.letter-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.letter-recipient {
  margin-bottom: var(--space-6);
}

.letter-subject {
  font-weight: var(--font-weight-bold);
  color: var(--color-blue);
  margin: var(--space-6) 0;
  line-height: var(--line-height-compact);
}

.fill-in {
  border-bottom: var(--border-width) solid currentColor;
  display: inline-block;
  min-width: var(--space-16);
}

.letter-signature {
  margin-top: var(--space-8);
  display: flex;
  gap: var(--space-12);
  flex-wrap: wrap;
}

.signature-line {
  flex: 1;
  min-width: var(--size-signature-min);
}

.fill-in-long {
  display: block;
  border-bottom: var(--border-width) solid currentColor;
  height: var(--size-signature-line);
  margin-bottom: var(--space-1);
}

.signature-label {
  font-size: var(--font-size-sm);
  color: color-mix(in srgb, currentColor 60%, transparent);
}

.steps-list {
  list-style-type: disc;
  padding-left: var(--space-6);
  line-height: var(--line-height-letter);
}

.steps-list li {
  margin: var(--space-2) 0;
}

@media (max-width: 768px) {
  .antrag-container {
    padding: var(--space-4);
  }

  .antrag-title {
    font-size: var(--font-size-heading-mobile);
  }

  .antrag-section {
    padding: var(--space-4);
  }

  .letter-box {
    padding: var(--space-4);
  }

  .letter-header {
    flex-direction: column;
  }
}
</style>
