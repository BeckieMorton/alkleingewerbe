import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBox}>
        <h2>E-mail</h2>
        <p>rsdfbhsr@sdgd.com</p>
      </div>
      <div className={styles.footerBox}>
        <h2>Telefon</h2>
        <p>+49 4598 343</p>
      </div>
      <div className={styles.footerBox}>
        <h2>Legal Stuff</h2>
        <Link to="/LegalStuff">
          <p>Impressum</p>
        </Link>
      </div>
    </div>
  );
};
