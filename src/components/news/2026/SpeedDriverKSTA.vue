<template>
  <article class="news-card shadow-md dark:shadow-md dark:shadow-neutral-800/50">
    <header class="news-card__header">
      <span class="news-card__date">
        <time datetime="2026-05-07">03. Mai 2026</time>
      </span>
      <span class="news-card__tag">Presseübersicht</span>
    </header>

    <h2 class="news-card__title">Autofahrer mit 203 km/h in der 50er-Zone erwischt</h2>

    <div class="news-card__body">
      <p>
        Auf dem Raderthalgürtel wurde ein Autofahrer mit 203 km/h in einer 50er-Zone geblitzt. Das berichtet der Kölner
        Stadt-Anzeiger. Dieser Vorfall unterstreicht die Gefahren von überhöhter Geschwindigkeit, insbesondere in
        städtischen Gebieten, und die Notwendigkeit, die Verkehrsregeln einzuhalten, um die Sicherheit aller
        Verkehrsteilnehmer zu gewährleisten.
      </p>
      <a
        class="news-card__link"
        href="https://www.ksta.de/koeln/koelns-ruecksichtslose-raser-mit-203-km-h-in-der-50er-zone-1274459"
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

.news-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
  color: var(--color-blue);
  font-weight: 600;
  text-decoration: none;
}

.news-card__link:hover {
  text-decoration: underline;
}

.news-card__link-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
</style>
