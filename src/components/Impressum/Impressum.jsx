import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Impressum.module.css";

export const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Impressum der Website der A.Ludewig Dienstleistungen von A-Z</h1>
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>Aline Ludewig</p>
      <p>A. Ludewig Dienstleistungen von A-Z</p>
      <p>Reuningstr. 5 , 01169 Dresden</p>
      <h2>Kontakt:</h2>
      <p>Telefon: 01525 8497999</p>
      <p> E-Mail: aline-ludewig@gmx.de </p>
      <h2>USt-IdNr.:</h2>
      <p>DE323017110</p>
      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: </h2>
      <p>
        Pixlmania GbR Fred Harzbecker und Felix Behr Baudissinstr. 17 01139
        Dresden
      </p>
      <h2>Streitschlichtung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
      <h2>Quellenangaben für verwendete Bilder und Grafiken</h2>
      <p>Pexels, 8icons </p>
      <h2>Quelle:</h2>
      <p>e-recht24.de</p>
      <Link to="/">
        <p className={styles.homeLink}>Zurück zur Startseite</p>
      </Link>
    </div>
  );
};
