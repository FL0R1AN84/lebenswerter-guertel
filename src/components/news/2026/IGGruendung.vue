<template>
  <article class="news-card surface-shadow">
    <header class="news-card__header">
      <span class="news-card__date">
        <time datetime="2026-04-14">08. April 2026</time>
      </span>
      <span class="news-card__tag">Pressemitteilung</span>
    </header>

    <p class="news-card__kicker">Autolärmfreier Gürtel im Süden und Südwesten Kölns:</p>
    <h2 class="news-card__title">Initiative „IG Lebenswerter Gürtel" im Kölner Südwesten gegründet</h2>

    <div class="news-card__body">
      <p>Sehr geehrte Damen und Herren,</p>
      <p>
        auf dem gesamten Gürtel im Kölner Südwesten ist der Verkehrslärm viel zu hoch und somit auf einem
        gesundheitsgefährdenden Niveau. Anwohnende sind Lärmwerten von teilweise über 75 Dezibel tagsüber und 65 Dezibel
        nachts ausgesetzt, wie die Lärmkartierung NRW zeigt.<sup class="news-card__fn">1</sup>
      </p>
      <p>
        Die Anwohnenden haben bereits vor zwei Jahren bei der Stadt Köln einen Antrag zur Prüfung verkehrslärmmindernder
        Maßnahmen gestellt. In einer allgemein formulierten Antwort wurden sie vertröstet. Die Verwaltung prüfe die
        Maßnahmen, einen Zeitpunkt für das Ergebnis der Prüfung könne aufgrund personell knapper Ressourcen und der
        zahlreichen vorliegenden Anträge jedoch nicht genannt werden.
      </p>
      <p>
        Die Anwohnenden des Gürtels sehen ihre Gesundheit akut gefährdet und sehen sich dazu gezwungen, juristisch tätig
        zu werden, um ihren Gesundheitsschutz einzuklagen. In den kommenden Wochen werden fünf Menschen stellvertretend
        für viele Bürgerinnen und Bürger auf verschiedenen Abschnitten des Gürtels eine Untätigkeitsklage beim
        Verwaltungsgericht Köln einreichen. Mit dem Fall betraut ist der renommierte Rechtsanwalt Wolfram Sedlak, der
        alle bisherigen Klagen für verkehrslärmmindernde Maßnahmen gegen die Stadt Köln gewonnen hat.
      </p>
      <p>
        Zuletzt wurde im August 2025 auf der Luxemburger Straße Tempo 30 als Lärmschutzmaßnahme eingeführt. Nach einem
        Urteil im November 2025 folgten fünf weitere Straßen.<sup class="news-card__fn">2</sup> An Straßen wie der
        Siegburger Straße oder der Lindenstraße wurden im vergangenen Jahr nur kleine Tempo 30-Abschnitte eingerichtet,
        wo die klagenden Personen wohnten. So auch bisher am Gürtel geschehen, wo im Jahr 2020 auf einem kurzen
        Abschnitt des Melatengürtels Tempo 30 als Lärmschutzmaßnahme gilt.<sup class="news-card__fn">3</sup>
      </p>
      <p>
        Die sich nun zusammengeschlossenen Klägerinnen und Kläger nennen sich „IG Lebenswerter Gürtel" und wohnen vom
        Lindenthalgürtel über den Sülzgürtel bis zum Raderberggürtel. Die Initiative fordert die Einführung von Tempo 30
        als schnelle und kostengünstige Maßnahme gegen den Verkehrslärm auf weiten Teilen des Gürtels, wo die Grenzwerte
        nach Lärmkartierung NRW und Lärmaktionsplan der Stadt Köln überschritten werden.
      </p>
      <p>In einem Pressegespräch stellt sich diese Initiative vor.</p>

      <div class="news-card__event">
        <strong>Montag, 27.04.2026, 17:00 Uhr</strong><br />
        Lindenthalgürtel / Ecke Franzstraße<br />
        auf der ehemaligen Marktfläche (Straßenmitte)
      </div>

      <p>Wir laden Sie gerne ein, freuen uns auf Ihr Kommen und eine Berichterstattung zum Thema.</p>

      <p class="news-card__signature">i. V. Roland Schüler</p>

      <footer class="news-card__footnotes">
        <p>
          <sup class="news-card__fn">1</sup>
          <a href="https://www.umgebungslaerm-kartierung.nrw.de" rel="noopener noreferrer" target="_blank">
            https://www.umgebungslaerm-kartierung.nrw.de
          </a>
        </p>
        <p>
          <sup class="news-card__fn">2</sup>
          <a href="https://www.presseportal.de/pm/66749/6175158" rel="noopener noreferrer" target="_blank">
            https://www.presseportal.de/pm/66749/6175158
          </a>
        </p>
        <p>
          <sup class="news-card__fn">3</sup>
          <a
            href="https://www.ksta.de/koeln/ehrenfeld/ehrenfeldguertel-in-koeln-politiker-fordern-tempo-30-auf-der-gesamten-strecke-221985"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.ksta.de/koeln/ehrenfeld/ehrenfeldguertel-in-koeln-politiker-fordern-tempo-30-auf-der-gesamten-strecke-221985
          </a>
        </p>
      </footer>
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

.news-card__fn {
  color: var(--color-pink);
  font-weight: var(--font-weight-bold);
}

.news-card__event {
  margin: var(--space-5) 0;
  padding: var(--space-4) var(--space-5);
  border-left: var(--border-width-accent) solid var(--color-green);
  border-radius: var(--radius-small);
  line-height: var(--line-height-relaxed);
}

.news-card__signature {
  margin-top: var(--space-6);
  font-style: italic;
}

.news-card__footnotes {
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: var(--border-width) solid var(--color-neutral-400);
  font-size: var(--font-size-xs);
}

.news-card__footnotes p {
  margin: var(--space-compact) 0;
  word-break: break-all;
}

.news-card__footnotes a {
  color: var(--color-blue);
}

.news-card__footnotes a:hover {
  text-decoration: underline;
}
</style>
