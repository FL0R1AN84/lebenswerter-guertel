<script lang="ts" setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'

const decryptEmail = () => {
  const encoded = 'a29udGFrdEBsZWJlbnN3ZXJ0ZXItZ3VlcnRlbC5rb2Vsbg=='
  return atob(encoded)
}

const copyEmailToClipboard = () => {
  const email = decryptEmail()
  navigator.clipboard.writeText(email).then(() => {
    alert('Die E-Mail-Adresse wurde in die Zwischenablage kopiert')
  })
}
</script>

<template>
  <HeaderNavigation />
  <main class="privacy-container">
    <section class="privacy-content">
      <h1 class="privacy-title">Datenschutzerklärung</h1>
      <p class="privacy-date">Stand: 8. Februar 2026</p>

      <section class="privacy-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
        <h2>Inhaltsübersicht</h2>
        <ul class="index">
          <li><a class="index-link" href="#m3">Verantwortlicher</a></li>
          <li><a class="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
          <li><a class="index-link" href="#m2427">Maßgebliche Rechtsgrundlagen</a></li>
          <li>
            <a class="index-link" href="#m225">Bereitstellung des Onlineangebots und Webhosting</a>
          </li>
          <li><a class="index-link" href="#m182">Kontakt- und Anfrageverwaltung</a></li>
        </ul>
      </section>

      <section id="m3" class="privacy-section shadow-md dark:shadow-md dark:shadow-neutral-800/50">
        <h2>Verantwortlicher</h2>
        <p>
          <strong>IG Lebenswerter Gürtel</strong><br />
          Raderthalgürtel 6D<br />
          50968 Köln
        </p>
        <p>
          E-Mail:
          <a class="email-obfuscated" rel="nofollow" @click="copyEmailToClipboard">
            {{ decryptEmail() }}
            <svg
              class="size-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </p>
      </section>

      <section
        id="mOverview"
        class="privacy-section shadow-md dark:shadow-md dark:shadow-neutral-800/50"
      >
        <h2>Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
          Verarbeitung zusammen und verweist auf die betroffenen Personen.
        </p>

        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Kontaktdaten.</li>
          <li>Inhaltsdaten.</li>
          <li>Nutzungsdaten.</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
          <li>Protokolldaten.</li>
        </ul>

        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Kommunikationspartner.</li>
          <li>Nutzer.</li>
        </ul>

        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>Kommunikation.</li>
          <li>Organisations- und Verwaltungsverfahren.</li>
          <li>Feedback.</li>
          <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
          <li>Informationstechnische Infrastruktur.</li>
        </ul>
      </section>

      <section
        id="m2427"
        class="privacy-section shadow-md dark:shadow-md dark:shadow-neutral-800/50"
      >
        <h2>Maßgebliche Rechtsgrundlagen</h2>
        <p>
          <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im Folgenden erhalten Sie
          eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten
          verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten
          ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese
          in der Datenschutzerklärung mit.
        </p>

        <ul>
          <li>
            <strong
              >Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
              DSGVO)</strong
            >
            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die
            betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
            die auf Anfrage der betroffenen Person erfolgen.
          </li>
          <li>
            <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - die
            Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines
            Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten
            der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht
            überwiegen.
          </li>
        </ul>

        <p>
          <strong>Nationale Datenschutzregelungen in Deutschland: </strong>Zusätzlich zu den
          Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in
          Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch
          personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das
          BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
          Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener
          Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten
          Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können
          Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
        </p>

        <p>
          <strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>Diese Datenschutzhinweise
          dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der
          Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass
          aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO
          verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe
          „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und "besonders schützenswerte
          Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von
          „personenbezogenen Daten" sowie "berechtigtes Interesse" und "besondere Kategorien von
          Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung
          des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
        </p>
      </section>

      <section
        id="m225"
        class="privacy-section shadow-md dark:shadow-md dark:shadow-neutral-800/50"
      >
        <h2>Bereitstellung des Onlineangebots und Webhosting</h2>
        <p>
          Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen
          zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist,
          um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der
          Nutzer zu übermitteln.
        </p>

        <ul class="m-elements">
          <li>
            <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und
            Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
            Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und
            Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte
            Personen); Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten
            oder Zugriffszeiten.). Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und
            Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft
            oder Zeitpunkt der Erstellung).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von
            Onlinediensten).
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
            Nutzerfreundlichkeit. Informationstechnische Infrastruktur (Betrieb und Bereitstellung
            von Informationssystemen und technischen Geräten (Computer, Server etc.)).
          </li>
          <li>
            <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
            "Allgemeine Informationen zur Datenspeicherung und Löschung".
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
            DSGVO).
          </li>
        </ul>

        <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
        <ul class="m-elements">
          <li>
            <strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz: </strong>Für die
            Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und
            Software, die wir von einem entsprechenden Serveranbieter (auch "Webhoster" genannt)
            mieten oder anderweitig beziehen;
            <span
              ><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).</span
            >
          </li>
          <li>
            <strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch genommenen
            Webhosting-Leistungen umfassen ebenfalls den Versand, den Empfang sowie die Speicherung
            von E-Mails. Zu diesen Zwecken werden die Adressen der Empfänger sowie Absender als auch
            weitere Informationen betreffend den E-Mailversand (z. B. die beteiligten Provider)
            sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können
            ferner zu Zwecken der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu
            beachten, dass E-Mails im Internet grundsätzlich nicht verschlüsselt versendet werden.
            Im Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber (sofern kein
            sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den
            Servern, von denen sie abgesendet und empfangen werden. Wir können daher für den
            Übertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf unserem Server
            keine Verantwortung übernehmen;
            <span
              ><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).</span
            >
          </li>
        </ul>
      </section>

      <section
        id="m182"
        class="privacy-section shadow-md dark:shadow-md dark:shadow-neutral-800/50"
      >
        <h2>Kontakt- und Anfrageverwaltung</h2>
        <p>
          Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via
          soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die
          Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der
          Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
        </p>

        <ul class="m-elements">
          <li>
            <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen
            oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und
            Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft
            oder Zeitpunkt der Erstellung). Meta-, Kommunikations- und Verfahrensdaten (z. B.
            IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
          </li>
          <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Kommunikation; Organisations- und
            Verwaltungsverfahren; Feedback (z. B. Sammeln von Feedback via Online-Formular).
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
          </li>
          <li>
            <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
            "Allgemeine Informationen zur Datenspeicherung und Löschung".
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
            DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
            DSGVO).
          </li>
        </ul>

        <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
        <ul class="m-elements">
          <li>
            <strong>Kontaktformular: </strong>Bei Kontaktaufnahme über unser Kontaktformular, per
            E-Mail oder anderen Kommunikationswegen, verarbeiten wir die uns übermittelten
            personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen Anliegens. Dies
            umfasst in der Regel Angaben wie Name, Kontaktinformationen und gegebenenfalls weitere
            Informationen, die uns mitgeteilt werden und zur angemessenen Bearbeitung erforderlich
            sind. Wir nutzen diese Daten ausschließlich für den angegebenen Zweck der
            Kontaktaufnahme und Kommunikation;
            <span
              ><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
              (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).</span
            >
          </li>
        </ul>
      </section>

      <p class="seal">
        <a
          href="https://datenschutz-generator.de/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
        >
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
        </a>
      </p>
    </section>
  </main>
</template>

<style scoped>
.email-obfuscated {
  font-family: monospace;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.privacy-container {
  min-height: calc(100vh - 200px);
  padding: 1rem;
}

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
}

.privacy-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-blue);
  margin-bottom: 0.5rem;
  text-align: center;
}

.privacy-date {
  text-align: center;
  margin-bottom: 2rem;
}

.privacy-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid var(--color-green);
  border-radius: 4px;
}

.privacy-section h2 {
  color: var(--color-blue);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.privacy-section h3 {
  color: var(--color-blue);
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.privacy-section p {
  line-height: 1.6;
  margin: 0.5rem 0;
}

.privacy-section ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.privacy-section li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.index {
  list-style: none;
  padding-left: 0;
}

.index-link {
  color: var(--color-blue);
  text-decoration: none;
}

.index-link:hover {
  text-decoration: underline;
}

.m-elements {
  margin: 1rem 0;
}

.seal {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 1rem;
  }

  .privacy-title {
    font-size: 1.75rem;
  }

  .privacy-section {
    padding: 1rem;
  }
}
</style>
