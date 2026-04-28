<script lang="ts">
export default { name: 'SpendenkampagneNews' }
</script>

<template>
  <article class="news-card shadow-md dark:shadow-md dark:shadow-neutral-800/50">
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
  padding: 1.5rem;
  border-left: 4px solid var(--color-blue);
  border-radius: 4px;
  margin-bottom: 2rem;
}

.news-card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.news-card__date {
  font-size: 0.875rem;
  color: var(--color-blue);
  font-weight: 600;
}

.news-card__tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: var(--color-pink);
  color: white;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
}

.news-card__kicker {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-green);
  margin-bottom: 0.25rem;
}

.news-card__title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-blue);
  margin-bottom: 1.25rem;
  line-height: 1.3;
}

.news-card__body p {
  line-height: 1.7;
  margin: 0.75rem 0;
}

.news-card__cta {
  margin: 1.5rem 0;
  text-align: center;
}

.news-card__cta-link {
  display: inline-block;
  background-color: var(--color-blue);
  color: white;
  font-weight: 700;
  padding: 0.65rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.news-card__cta-link:hover {
  background-color: var(--color-green);
}

.news-card__about-heading {
  font-weight: 700;
  color: var(--color-blue);
  margin-top: 1.5rem;
}

.news-card__closing {
  margin-top: 1.25rem;
  font-style: italic;
  font-weight: 600;
  color: var(--color-green);
}
</style>
