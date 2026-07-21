import styles from "./Copyright.module.css";

export const Copyright = () => {
  return (
    <div className={styles.container}>
      <p>
        © 2026 A. Ludewig Dienstleistungen von A-Z. Alle Rechte vorbehalten.
        Webseite von
        <a href="https://beckiemorton-portfolio.netlify.app/"> B.M.</a>
      </p>
    </div>
  );
};
