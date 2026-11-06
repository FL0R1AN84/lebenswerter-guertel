<template>
  <article class="news-card surface-shadow">
    <header class="news-card__header">
      <span class="news-card__date">
        <time datetime="2026-05-07">07. Mai 2026</time>
      </span>
      <span class="news-card__tag">Presseübersicht</span>
    </header>

    <h2 class="news-card__title">Lärm in Lindenthal: Nachbarn wollen Tempo 30 per Klage durchsetzen</h2>

    <div class="news-card__body">
      <p>
        Die Interessengemeinschaft lebenswerter Gürtel wird ihrer Forderung nach Tempo 30 Nachdruck verleihen. Sie will
        die Stadt verklagen. Wegen Untätigkeit.
      </p>
      <a
        class="news-card__link"
        href="https://www.ksta.de/koeln/lindenthal/lindenthal-veedel/laerm-in-lindenthal-nachbarn-wollen-tempo-30-per-klage-durchsetzen-1275415"
        rel="noopener noreferrer"
        target="_blank"
      >
        Zum Artikel im Kölner Stadt-Anzeiger
        <svg
          class="news-card__link-icon"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
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

.news-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-icon-gap);
  margin-top: var(--space-3);
  color: var(--color-blue);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
}

.news-card__link:hover {
  text-decoration: underline;
}

.news-card__link-icon {
  width: var(--size-icon);
  height: var(--size-icon);
  flex-shrink: 0;
}
</style>
