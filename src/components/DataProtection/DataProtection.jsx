import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./DataProtection.module.css";

export const DataProtection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Datenschutzerklärung</h1>
        <h2>Präambel</h2>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
          aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
          auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in
          welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von
          uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im
          Rahmen der Erbringung unserer Leistungen als auch insbesondere auf
          unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
          Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend
          zusammenfassend bezeichnet als "Onlineangebot"). Die verwendeten
          Begriffe sind nicht geschlechtsspezifisch. Stand: 26. Februar 2024
        </p>
        <h2>Inhaltsübersicht</h2>
        <ul>
          <li>Präambel </li>
          <li>Verantwortlicher </li>
          <li>Übersicht der Verarbeitungen </li>
          <li>Maßgebliche Rechtsgrundlagen</li>
          <li>Sicherheitsmaßnahmen</li>
          <li>Übermittlung von personenbezogenen Daten</li>
          <li>Löschung von Daten</li>
          <li>Rechte der betroffenen Personen</li>
          <li> Bereitstellung des Onlineangebotes und Webhosting </li>
          <li> Kontakt- und Anfragenverwaltung </li>
          <li> Kundenrezensionen und Bewertungsverfahren</li>
          <li> Änderung und Aktualisierung der Datenschutzerklärung </li>
          <li> Begriffsdefinitionen</li>
        </ul>
        <h2>Verantwortlicher</h2>
        <p>
          A.Ludewig Dienstleistungen von A-Z Aline Ludewig Reuningstr. 5 01169
          Dresden E-Mail-Adresse: aline-ludewig@gmx.de Impressum:
          https://al-dienstleistungen.netlify.app/
        </p>
        <h2>Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
          die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>
        <h3>Arten der verarbeiteten Daten</h3>
        <p>
          Kontaktdaten. Inhaltsdaten. Vertragsdaten. Nutzungsdaten. Meta-,
          Kommunikations- und Verfahrensdaten.
        </p>
        <h3>Kategorien betroffener Personen</h3>
        <p>Kunden. Kommunikationspartner. Nutzer.</p>
        <h3>Zwecke der Verarbeitung</h3>
        <p>
          Kontaktanfragen und Kommunikation. Sicherheitsmaßnahmen. Verwaltung
          und Beantwortung von Anfragen. Feedback. Marketing. Bereitstellung
          unseres Onlineangebotes und Nutzerfreundlichkeit.
          Informationstechnische Infrastruktur.
        </p>
        <h2>Maßgebliche Rechtsgrundlagen</h2>
        <p>
          <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im
          Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
          auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen
          Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
          können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung
          mit.{" "}
          <strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
          </strong>{" "}
          - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
          Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
          Interessen oder Grundrechte und Grundfreiheiten der betroffenen
          Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
        </p>
        <p>
          <p>
            {" "}
            <strong>
              Vertragserfüllung und vorvertragliche Anfragen Art. 6 Abs. 1 S. 1
              lit. b DSGVO
            </strong>
            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen.
          </p>
        </p>
        <p>
          <strong>Nationale Datenschutzregelungen in Deutschland: </strong>
          Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale
          Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere
          das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
          Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
          insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
          Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer
          Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke
          und zur Übermittlung sowie automatisierten Entscheidungsfindung im
          Einzelfall einschließlich Profiling. Ferner können
          Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung
          gelangen.
        </p>
        <p>
          <strong> Hinweis auf Geltung DSGVO und Schweizer DSG:</strong>
          Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach
          dem schweizerischen Bundesgesetz über den Datenschutz (Schweizer DSG)
          als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund
          bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen
          Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet
          werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe
          „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und
          "besonders schützenswerte Personendaten" werden die in der DSGVO
          verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten"
          sowie "berechtigtes Interesse" und "besondere Kategorien von Daten"
          verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im
          Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG
          bestimmt.
        </p>
        <h2>Sicherheitsmaßnahmen</h2>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der Implementierungskosten
          und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
          sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
          Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen
          geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
          angemessenes Schutzniveau zu gewährleisten. Zu den Maßnahmen gehören
          insbesondere die Sicherung der Vertraulichkeit, Integrität und
          Verfügbarkeit von Daten durch Kontrolle des physischen und
          elektronischen Zugangs zu den Daten als auch des sie betreffenden
          Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
          und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
          eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
          Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
          berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
          Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren
          entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung
          und durch datenschutzfreundliche Voreinstellungen. Kürzung der
          IP-Adresse: Sofern IP-Adressen von uns oder von den eingesetzten
          Dienstleistern und Technologien verarbeitet werden und die
          Verarbeitung einer vollständigen IP-Adresse nicht erforderlich ist,
          wird die IP-Adresse gekürzt (auch als "IP-Masking" bezeichnet).
          Hierbei werden die letzten beiden Ziffern, bzw. der letzte Teil der
          IP-Adresse nach einem Punkt entfernt, bzw. durch Platzhalter ersetzt.
          Mit der Kürzung der IP-Adresse soll die Identifizierung einer Person
          anhand ihrer IP-Adresse verhindert oder wesentlich erschwert werden.
          TLS/SSL-Verschlüsselung (https): Um die Daten der Benutzer, die über
          unsere Online-Dienste übertragen werden, zu schützen, verwenden wir
          TLS/SSL-Verschlüsselung. Secure Sockets Layer (SSL) ist die
          Standardtechnologie zur Sicherung von Internetverbindungen durch
          Verschlüsselung der zwischen einer Website oder App und einem Browser
          (oder zwischen zwei Servern) übertragenen Daten. Transport Layer
          Security (TLS) ist eine aktualisierte und sicherere Version von SSL.
          Hyper Text Transfer Protocol Secure (HTTPS) wird in der URL angezeigt,
          wenn eine Website durch ein SSL/TLS-Zertifikat gesichert ist.
        </p>
        <h2>Übermittlung von personenbezogenen Daten</h2>
        <p>
          Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
          vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
          selbstständige Organisationseinheiten oder Personen übermittelt oder
          sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten
          können z. B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter
          von Diensten und Inhalten, die in eine Webseite eingebunden werden,
          gehören. In solchen Fällen beachten wir die gesetzlichen Vorgaben und
          schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die
          dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
        </p>
        <h2>Löschung von Daten</h2>
        <p>
          Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
          Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
          Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
          (z. B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder
          sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht
          gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke
          erforderlich sind, wird deren Verarbeitung auf diese Zwecke
          beschränkt. D. h., die Daten werden gesperrt und nicht für andere
          Zwecke verarbeitet. Das gilt z. B. für Daten, die aus handels- oder
          steuerrechtlichen Gründen aufbewahrt werden müssen oder deren
          Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
          oder juristischen Person erforderlich ist. Im Rahmen unserer
          Datenschutzhinweise können wir den Nutzern weitere Informationen zu
          der Löschung sowie zu der Aufbewahrung von Daten mitteilen, die
          speziell für die jeweiligen Verarbeitungsprozesses gelten.
        </p>
        <p>need to finish this....</p>

        <Link to="/">
          <p className={styles.homeLink}>Zurück zur Startseite</p>
        </Link>
      </div>
    </>
  );
};
