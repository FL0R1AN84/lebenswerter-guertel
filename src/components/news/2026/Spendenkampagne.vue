<script lang="ts">
export default { name: 'SpendenkampagneNews' }
</script>

<template>
  <article class="news-card surface-shadow">
    <header class="news-card__header">
      <span class="news-card__date">
        <time datetime="2026-04-28">28. April 2026</time>
      </span>
      <span class="news-card__tag">Spendenkampagne</span>
    </header>

    <p class="news-card__kicker">Für einen lebenswerten Gürtel:</p>
    <h2 class="news-card__title">Untätigkeitsklagen gegen Verkehrslärm – Jetzt spenden!</h2>

    <div class="news-card__body">
      <p>
        Der Kölner Gürtel ist eine der lautesten Straßen der Stadt: Anwohnende sind Lärmpegeln von bis zu 75 dB tagsüber
        und 65 dB nachts ausgesetzt – Werte, die die Gesundheit ernsthaft gefährden.
      </p>
      <p>
        Trotz eines Antrags auf lärmreduzierende Maßnahmen vor zwei Jahren hat die Stadt Köln bisher nicht gehandelt.
        Deshalb reichen Anwohnende der IG Lebenswerter Gürtel – vom Lindenthalgürtel bis zum Raderberggürtel – jetzt
        Untätigkeitsklage beim Verwaltungsgericht Köln ein.
      </p>
      <p>
        Unser Anwalt Wolfram Sedlak hat bereits Tempo 30 als Lärmschutzmaßnahme auf der Luxemburger Straße, dem
        Clevischen Ring, der Krefelder Straße, der Mommsenstraße und dem Gottesweg erfolgreich erstritten. Die
        Erfolgsaussichten sind hoch.
      </p>
      <p>
        Wir sammeln Spenden, um die Klagenden finanziell zu unterstützen. Aktuell sammeln wir für eine Person. Sollten
        weitere Personen klagen, erhöhen wir das Spendenziel entsprechend. Überschüssige Mittel fließen in die weitere
        Arbeit der IG Lebenswerter Gürtel und in die Unterstützung von Lärmklagen an anderen Kölner Straßen.
      </p>

      <div class="news-card__cta">
        <a
          class="news-card__cta-link"
          href="https://www.goodcrowd.org/laermschutz-auf-dem-guertel-einklagen"
          rel="noopener noreferrer"
          target="_blank"
        >
          Jetzt spenden →
        </a>
      </div>

      <p class="news-card__about-heading">Wer sind wir?</p>
      <p>
        Die IG Lebenswerter Gürtel setzt sich für einen lebenswerten und zukunftsgewandten Gürtel ein. Um die
        Aufenthalts- und Wohnqualität zu steigern, setzen wir uns für eine Lärmreduzierung und Luftreinhaltung ein.
        Zufußgehende und Radfahrende jeden Alters sollen sicher auf dem Gürtel unterwegs sein können, weshalb wir eine
        Erhöhung der Verkehrssicherheit fordern.
      </p>

      <p class="news-card__closing">Gemeinsam für Tempo 30 – für Gesundheit und Lebensqualität am Gürtel.</p>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  padding: var(--space-6);
  border-left: var(--border-width-strong) solid var(--color-blue);
  border-radius: var(--radius-medium);
  margin-bottom: var(--space-8);
}

.news-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-2);
}

.news-card__date {
  font-size: var(--font-size-sm);
  color: var(--color-blue);
  font-weight: var(--font-weight-semibold);
}

.news-card__tag {
  font-size: var(--font-size-2xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-tag);
  background-color: var(--color-pink);
  color: var(--color-white);
  padding: var(--space-tight) var(--space-tag-inline);
  border-radius: var(--radius-pill);
}

.news-card__kicker {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-green);
  margin-bottom: var(--space-1);
}

.news-card__title {
  font-size: var(--font-size-news-title);
  font-weight: var(--font-weight-bold);
  color: var(--color-blue);
  margin-bottom: var(--space-5);
  line-height: var(--line-height-title);
}

.news-card__body p {
  line-height: var(--line-height-relaxed);
  margin: var(--space-3) 0;
}

.news-card__cta {
  margin: var(--space-6) 0;
  text-align: center;
}

.news-card__cta-link {
  display: inline-block;
  background-color: var(--color-blue);
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  padding: var(--space-button-block) var(--space-6);
  border-radius: var(--radius-large);
  text-decoration: none;
  transition: background-color var(--duration-fast);
}

.news-card__cta-link:hover {
  background-color: var(--color-green);
}

.news-card__about-heading {
  font-weight: var(--font-weight-bold);
  color: var(--color-blue);
  margin-top: var(--space-6);
}

.news-card__closing {
  margin-top: var(--space-5);
  font-style: italic;
  font-weight: var(--font-weight-semibold);
  color: var(--color-green);
}
</style>
