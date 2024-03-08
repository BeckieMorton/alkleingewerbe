import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Impressum.module.css";
import { Button } from "../Button/Button";

export const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Impressum der Website der A.Ludewig Dienstleistungen von A-Z</h1>
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>A. Ludewig Dienstleistungen von A-Z</p>
      <p>Reuningstr. 5 , 01169 Dresden</p>
      <p>Vertreten durch:</p>
      <p>Aline Ludewig</p>
      <h2>Kontakt:</h2>
      <p> E-Mail: aline-ludewig@gmx.de</p>
      <p>Telefon: +49 1525 8497999</p>
      <h2>Steuernummer:</h2>
      <p>203/246/12743</p>
      <h2>EU-Streitbeilegung</h2>
      <p>
        Durch die Europäische Kommission wird eine Plattform zur
        Online-Streitbeilegung (OS) bereitgestellt:
        <a
          href="https://ec.europa.eu/consumers/odr/"
          alt=" https://ec.europa.eu/consumers/odr/"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <h2>Haftungsausschluss</h2>
      <p>
        Wir sind für die Inhalte unserer Internetseiten nach den Maßgaben der
        allgemeinen Gesetzen, insbesondere nach § 7 Abs. 1 des
        Telemediengesetzes, verantwortlich. Alle Inhalte werden mit der
        gebotenen Sorgfalt und nach bestem Wissen erstellt. Soweit wir auf
        unseren Internetseiten mittels Hyperlink auf Internetseiten Dritter
        verweisen, können wir keine Gewähr für die fortwährende Aktualität,
        Richtigkeit und Vollständigkeit der verlinkten Inhalte übernehmen, da
        diese Inhalte außerhalb unseres Verantwortungsbereichs liegen und wir
        auf die zukünftige Gestaltung keinen Einfluss haben. Sollten aus Ihrer
        Sicht Inhalte gegen geltendes Recht verstoßen oder unangemessen sein,
        teilen Sie uns dies bitte mit.
      </p>
      <p>
        Die rechtlichen Hinweise auf dieser Seite sowie alle Fragen und
        Streitigkeiten im Zusammenhang mit der Gestaltung dieser Internetseite
        unterliegen dem Recht der Bundesrepublik Deutschland.
      </p>
      <h2>Urheberrechtshinweis</h2>
      <p>
        Die auf unserer Internetseite vorhandenen Texte, Bilder, Fotos, Videos
        oder Grafiken unterliegen in der Regel dem Schutz des Urheberrechts.
        Jede unberechtigte Verwendung (insbesondere die Vervielfältigung,
        Bearbeitung oder Verbreitung) dieser urheberrechtsgeschützten Inhalte
        ist daher untersagt. Wenn Sie beabsichtigen, diese Inhalte oder Teile
        davon zu verwenden, kontaktieren Sie uns bitte im Voraus unter den oben
        stehenden Angaben. Soweit wir nicht selbst Inhaber der benötigten
        urheberrechtlichen Nutzungsrechte sein sollten, bemühen wir uns, einen
        Kontakt zum Berechtigten zu vermitteln.
      </p>
      <h2>Quellenangaben für verwendete Bilder und Grafiken</h2>
      <p>Pexels, 8icons, Lottie animations </p>
      <h2>Quelle:</h2>
      <p>
        <a
          href="https://app.dieter-datenschutz.de"
          alt="https://app.dieter-datenschutz.de"
        >
          https://app.dieter-datenschutz.de
        </a>
      </p>
      <p>&nbsp;</p>
      <Button />
    </div>
  );
};
