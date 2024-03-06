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
        <h2 id="m716">Präambel</h2>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
          aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
          auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in
          welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von
          uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im
          Rahmen der Erbringung unserer Leistungen als auch insbesondere auf
          unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
          Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend
          zusammenfassend bezeichnet als "Onlineangebot").
        </p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p>Stand: 26. Februar 2024</p>
        <h2>Inhaltsübersicht</h2>{" "}
        <ul class="index">
          <li>
            <a class="index-link" href="#m716">
              Präambel
            </a>
          </li>
          <li>
            <a class="index-link" href="#m3">
              Verantwortlicher
            </a>
          </li>
          <li>
            <a class="index-link" href="#mOverview">
              Übersicht der Verarbeitungen
            </a>
          </li>
          <li>
            <a class="index-link" href="#m2427">
              Maßgebliche Rechtsgrundlagen
            </a>
          </li>
          <li>
            <a class="index-link" href="#m27">
              Sicherheitsmaßnahmen
            </a>
          </li>
          <li>
            <a class="index-link" href="#m25">
              Übermittlung von personenbezogenen Daten
            </a>
          </li>
          <li>
            <a class="index-link" href="#m12">
              Löschung von Daten
            </a>
          </li>
          <li>
            <a class="index-link" href="#m10">
              Rechte der betroffenen Personen
            </a>
          </li>
          <li>
            <a class="index-link" href="#m225">
              Bereitstellung des Onlineangebotes und Webhosting
            </a>
          </li>
          <li>
            <a class="index-link" href="#m182">
              Kontakt- und Anfragenverwaltung
            </a>
          </li>
          <li>
            <a class="index-link" href="#m299">
              Kundenrezensionen und Bewertungsverfahren
            </a>
          </li>
          <li>
            <a class="index-link" href="#m15">
              Änderung und Aktualisierung der Datenschutzerklärung
            </a>
          </li>
          <li>
            <a class="index-link" href="#m42">
              Begriffsdefinitionen
            </a>
          </li>
        </ul>
        <h2 id="m3">Verantwortlicher</h2>
        <p>
          A.Ludewig Dienstleistungen von A-Z Aline Ludewig Reuningstr. 5 01169
          Dresden
        </p>
        E-Mail-Adresse:{" "}
        <a href="mailto:aline-ludewig@gmx.de">aline-ludewig@gmx.de</a>
        Impressum:{" "}
        <a href="https://al-dienstleistungen.netlify.app/" target="_blank">
          https://al-dienstleistungen.netlify.app/
        </a>
        <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
          die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Kontaktdaten.</li>
          <li>Inhaltsdaten.</li>
          <li>Vertragsdaten.</li>
          <li>Nutzungsdaten.</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
        </ul>
        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Kunden.</li>
          <li>Kommunikationspartner.</li>
          <li>Nutzer.</li>
        </ul>
        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>Kontaktanfragen und Kommunikation.</li>
          <li>Sicherheitsmaßnahmen.</li>
          <li>Verwaltung und Beantwortung von Anfragen.</li>
          <li>Feedback.</li>
          <li>Marketing.</li>
          <li>
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
          </li>
          <li>Informationstechnische Infrastruktur.</li>
        </ul>
        <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>
        <p>
          <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im
          Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
          auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen
          Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
          können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung
          mit.
        </p>
        <ul>
          <li>
            <strong>
              Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
              lit. b) DSGVO
            </strong>{" "}
            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen.
          </li>
          <li>
            <strong>
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO
            </strong>{" "}
            - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
            Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
            Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person, die den Schutz personenbezogener Daten erfordern,
            überwiegen.
          </li>
        </ul>
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
          <strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>Diese
          Datenschutzhinweise dienen sowohl der Informationserteilung nach dem
          schweizerischen Bundesgesetz über den Datenschutz (Schweizer DSG) als
          auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund
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
        <h2 id="m27">Sicherheitsmaßnahmen</h2>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der Implementierungskosten
          und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
          sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
          Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen
          geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
          angemessenes Schutzniveau zu gewährleisten.
        </p>
        <p>
          Zu den Maßnahmen gehören insbesondere die Sicherung der
          Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
          Kontrolle des physischen und elektronischen Zugangs zu den Daten als
          auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
          Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
          Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
          die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
          gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
          Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
          sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
          Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        </p>
        <p>
          Kürzung der IP-Adresse: Sofern IP-Adressen von uns oder von den
          eingesetzten Dienstleistern und Technologien verarbeitet werden und
          die Verarbeitung einer vollständigen IP-Adresse nicht erforderlich
          ist, wird die IP-Adresse gekürzt (auch als "IP-Masking" bezeichnet).
          Hierbei werden die letzten beiden Ziffern, bzw. der letzte Teil der
          IP-Adresse nach einem Punkt entfernt, bzw. durch Platzhalter ersetzt.
          Mit der Kürzung der IP-Adresse soll die Identifizierung einer Person
          anhand ihrer IP-Adresse verhindert oder wesentlich erschwert werden.
        </p>
        <p>
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
        <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
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
        <h2 id="m12">Löschung von Daten</h2>
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
        <h2 id="m10">Rechte der betroffenen Personen</h2>
        <p>
          Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
          Betroffene nach der DSGVO verschiedene Rechte zu, die sich
          insbesondere aus Art. 15 bis 21 DSGVO ergeben:
        </p>
        <ul>
          <li>
            <strong>
              Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
              Ihrer besonderen Situation ergeben, jederzeit gegen die
              Verarbeitung der Sie betreffenden personenbezogenen Daten, die
              aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
              Widerspruch einzulegen; dies gilt auch für ein auf diese
              Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
              personenbezogenen Daten verarbeitet, um Direktwerbung zu
              betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
              Verarbeitung der Sie betreffenden personenbezogenen Daten zum
              Zwecke derartiger Werbung einzulegen; dies gilt auch für das
              Profiling, soweit es mit solcher Direktwerbung in Verbindung
              steht.
            </strong>
          </li>
          <li>
            <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
            Recht, erteilte Einwilligungen jederzeit zu widerrufen.
          </li>
          <li>
            <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
            Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
            werden und auf Auskunft über diese Daten sowie auf weitere
            Informationen und Kopie der Daten entsprechend den gesetzlichen
            Vorgaben.
          </li>
          <li>
            <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
            gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
            betreffenden Daten oder die Berichtigung der Sie betreffenden
            unrichtigen Daten zu verlangen.
          </li>
          <li>
            <strong>
              Recht auf Löschung und Einschränkung der Verarbeitung:
            </strong>{" "}
            Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
            verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden,
            bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
            Einschränkung der Verarbeitung der Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
            Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach
            Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen
            und maschinenlesbaren Format zu erhalten oder deren Übermittlung an
            einen anderen Verantwortlichen zu fordern.
          </li>
          <li>
            <strong>Beschwerde bei Aufsichtsbehörde:</strong> Entsprechend den
            gesetzlichen Vorgaben und unbeschadet eines anderweitigen
            verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, haben Sie
            ferner das Recht, bei einer Datenschutzaufsichtsbehörde,
            insbesondere einer Aufsichtsbehörde im Mitgliedstaat, in dem Sie
            sich gewöhnlich aufhalten, der Aufsichtsbehörde Ihres Arbeitsplatzes
            oder des Ortes des mutmaßlichen Verstoßes, eine Beschwerde
            einzulegen, wenn Sie der Ansicht sei sollten, dass die Verarbeitung
            der Ihre Person betreffenden personenbezogenen Daten gegen die DSGVO
            verstößt.
          </li>
        </ul>
        <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
        <p>
          Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste
          zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die
          IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und
          Funktionen unserer Online-Dienste an den Browser oder das Endgerät der
          Nutzer zu übermitteln.
        </p>
        <ul class="m-elements">
          <li>
            <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B.
            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
            Kommunikations- und Verfahrensdaten (z. .B. IP-Adressen,
            Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Nutzer (z. .B.
            Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
            Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
            Infrastruktur (Betrieb und Bereitstellung von Informationssystemen
            und technischen Geräten (Computer, Server etc.).).
            Sicherheitsmaßnahmen.
          </li>
          <li class="">
            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
            Abs. 1 S. 1 lit. f) DSGVO.
          </li>
        </ul>
        <p>
          <strong>
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
          </strong>
        </p>
        <ul class="m-elements">
          <li>
            <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der
            Zugriff auf unser Onlineangebot wird in Form von so genannten
            "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die
            Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
            Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
            erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
            des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
            Regelfall IP-Adressen und der anfragende Provider gehören. Die
            Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt
            werden, z. B., um eine Überlastung der Server zu vermeiden
            (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten
            DDoS-Attacken) und zum anderen, um die Auslastung der Server und
            ihre Stabilität sicherzustellen;{" "}
            <span class="">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO.{" "}
            </span>
            <strong>Löschung von Daten:</strong> Logfile-Informationen werden
            für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht
            oder anonymisiert. Daten, deren weitere Aufbewahrung zu
            Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des
            jeweiligen Vorfalls von der Löschung ausgenommen.
          </li>
        </ul>
        <h2 id="m182">Kontakt- und Anfragenverwaltung</h2>
        <p>
          Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular,
          E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender
          Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden
          Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen
          und etwaiger angefragter Maßnahmen erforderlich ist.
        </p>
        <ul class="m-elements">
          <li>
            <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B.
            E-Mail, Telefonnummern); Inhaltsdaten (z. B. Eingaben in
            Onlineformularen); Nutzungsdaten (z. B. besuchte Webseiten,
            Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und
            Verfahrensdaten (z. .B. IP-Adressen, Zeitangaben,
            Identifikationsnummern, Einwilligungsstatus).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Kommunikationspartner.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
            Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback
            (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung
            unseres Onlineangebotes und Nutzerfreundlichkeit.
          </li>
          <li class="">
            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
            Abs. 1 S. 1 lit. f) DSGVO. Vertragserfüllung und vorvertragliche
            Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO.
          </li>
        </ul>
        <p>
          <strong>
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
          </strong>
        </p>
        <ul class="m-elements">
          <li>
            <strong>Kontaktformular: </strong>Wenn Nutzer über unser
            Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in
            Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang
            mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens;{" "}
            <span class="">
              <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
              vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO,
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO.
            </span>
          </li>
        </ul>
        <h2 id="m299">Kundenrezensionen und Bewertungsverfahren</h2>
        <p>
          Wir nehmen an Rezensions- und Bewertungsverfahren teil, um unsere
          Leistungen zu evaluieren, zu optimieren und zu bewerben. Wenn Nutzer
          uns über die beteiligten Bewertungsplattformen oder -verfahren
          bewerten oder anderweitig Feedback geben, gelten zusätzlich die
          Allgemeinen Geschäfts- oder Nutzungsbedingungen und die
          Datenschutzhinweise der Anbieter. Im Regelfall setzt die Bewertung
          zudem eine Registrierung bei den jeweiligen Anbietern voraus.{" "}
        </p>
        <p>
          Um sicherzustellen, dass die bewertenden Personen tatsächlich unsere
          Leistungen in Anspruch genommen haben, übermitteln wir mit
          Einwilligung der Kunden die hierzu erforderlichen Daten im Hinblick
          auf den Kunden und die in Anspruch genommene Leistung an die jeweilige
          Bewertungsplattform (einschließlich Name, E-Mail-Adresse und
          Bestellnummer bzw. Artikelnummer). Diese Daten werden alleine zur
          Verifizierung der Authentizität des Nutzers verwendet.
        </p>
        <ul class="m-elements">
          <li>
            <strong>Verarbeitete Datenarten:</strong> Vertragsdaten (z. B.
            Vertragsgegenstand, Laufzeit, Kundenkategorie); Nutzungsdaten (z. B.
            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-,
            Kommunikations- und Verfahrensdaten (z. .B. IP-Adressen,
            Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Kunden; Nutzer (z. .B.
            Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Feedback (z. B. Sammeln
            von Feedback via Online-Formular). Marketing.
          </li>
          <li class="">
            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen Art. 6
            Abs. 1 S. 1 lit. f DSGVO.
          </li>
        </ul>
        <p>
          <strong>
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
          </strong>
        </p>
        <ul class="m-elements">
          <li>
            <strong>Bewertungs-Widget: </strong>Wir binden in unser
            Onlineangebot sogenannte "Bewertungs-Widgets" ein. Ein Widget ist
            ein in unser Onlineangebot eingebundenes Funktions- und
            Inhaltselement, das veränderliche Informationen anzeigt. Es kann z.
            B. in Form eines Siegels oder vergleichbaren Elements, zum Teil auch
            "Badge" genannt, dargestellt werden. Dabei wird der entsprechende
            Inhalt des Widgets zwar innerhalb unseres Onlineangebotes
            dargestellt, er wird aber in diesem Moment von den Servern des
            jeweiligen Widgets-Anbieters abgerufen. Nur so kann immer der
            aktuelle Inhalt gezeigt werden, vor allem die jeweils aktuelle
            Bewertung. Dafür muss eine Datenverbindung von der innerhalb unseres
            Onlineangebotes aufgerufenen Webseite zu dem Server des
            Widgets-Anbieters aufgebaut werden und der Widgets-Anbieter erhält
            gewisse technische Daten, Zugriffsdaten, inklusive IP-Adresse, die
            nötig sind, damit der Inhalt des Widgets an den Browser des Nutzers
            ausgeliefert werden kann. Des Weiteren erhält der Widgets-Anbieter
            Informationen darüber, dass Nutzer unser Onlineangebot besucht
            haben. Diese Informationen können in einem Cookie gespeichert und
            von dem Widgets-Anbieter verwendet werden, um zu erkennen, welche
            Onlineangebote, die am dem Bewertungsverfahren teilnehmen, von dem
            Nutzer besucht worden sind. Die Informationen können in einem
            Nutzerprofil gespeichert und für Werbe- oder Marktforschungszwecke
            verwendet werden;{" "}
            <span class="">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen Art. 6
              Abs. 1 S. 1 lit. f DSGVO.
            </span>
          </li>
        </ul>
        <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
        <p>
          Wir bitten Sie, sich regelmäßig über den Inhalt unserer
          Datenschutzerklärung zu informieren. Wir passen die
          Datenschutzerklärung an, sobald die Änderungen der von uns
          durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
          informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung
          Ihrerseits z. B. Einwilligung, oder eine sonstige individuelle
          Benachrichtigung erforderlich wird.
        </p>
        <p>
          Sofern wir in dieser Datenschutzerklärung Adressen und
          Kontaktinformationen von Unternehmen und Organisationen angeben,
          bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
          können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
        </p>
        <h2 id="m42">Begriffsdefinitionen</h2>
        <p>
          In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
          Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die
          Begrifflichkeiten gesetzlich definiert sind, gelten deren gesetzliche
          Definitionen. Die nachfolgenden Erläuterungen sollen dagegen vor allem
          dem Verständnis dienen.
        </p>
        <ul class="glossary">
          <li>
            <strong>Personenbezogene Daten:</strong> "Personenbezogene Daten"
            sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person, im Folgenden "betroffene
            Person", beziehen; als identifizierbar wird eine natürliche Person
            angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
            zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
            Standortdaten, zu einer Online-Kennung, z. B. Cookie, oder zu einem
            oder mehreren besonderen Merkmalen identifiziert werden kann, die
            Ausdruck der physischen, physiologischen, genetischen, psychischen,
            wirtschaftlichen, kulturellen oder sozialen Identität dieser
            natürlichen Person sind.{" "}
          </li>
          <li>
            <strong>Verantwortlicher:</strong> Als "Verantwortlicher" wird die
            natürliche oder juristische Person, Behörde, Einrichtung oder andere
            Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
            Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
            bezeichnet.{" "}
          </li>
          <li>
            <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder
            ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede
            solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
            Der Begriff reicht weit und umfasst praktisch jeden Umgang mit
            Daten, sei es das Erheben, das Auswerten, das Speichern, das
            Übermitteln oder das Löschen.{" "}
          </li>
        </ul>
        <p class="seal">
          <a
            href="https://datenschutz-generator.de/"
            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
            Schwenke
          </a>
        </p>
        <Link to="/">
          <p className={styles.homeLink}>Zurück zur Startseite</p>
        </Link>
      </div>
    </>
  );
};
