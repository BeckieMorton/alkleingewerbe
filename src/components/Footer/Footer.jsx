import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBox}>
        <h2>E-mail</h2>
        <p>aline-ludewig@gmx.de </p>
      </div>
      <div className={styles.footerBox}>
        <h2>Telefon</h2>
        <p>01525 8497999</p>
      </div>
      <div className={styles.footerBox}>
        <h2>Impressum</h2>
        <Link to="/LegalStuff">
          <p>Impressum</p>
        </Link>
      </div>
    </div>
  );
};
