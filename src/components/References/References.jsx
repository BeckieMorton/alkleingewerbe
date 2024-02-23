import styles from "./References.module.css";

export const References = () => {
  return (
    <div className={styles.References}>
      <div className={styles.RefContainer}>
        <div className={`${styles.RefBox} ${styles.heading}`}>
          <h1>Referenzen</h1>
        </div>

        <div className={styles.RefBox}>
          <p>
            "zuverlässig, pünktlich und freundlich, ich würde die Dienste von
            Aline wieder in Anspruch nehmen"
          </p>
          <p className={styles.quoteAuthor}>Hanz, Gorbitz</p>
        </div>
        <div className={styles.RefBox}>
          <p>"hat mir beim Einkaufen geholfen, tolle Hilfe, danke!"</p>
          <p className={styles.quoteAuthor}>Urika, Friedrichstadt</p>
        </div>
        <div className={styles.RefBox}>
          <p>
            "Ich war froh, diesen Service gefunden zu haben und würde Aline
            jedem empfehlen, der zusätzliche Hilfe bei der Reinigung benötigt."
          </p>
          <p className={styles.quoteAuthor}>Uta, Plauen</p>
        </div>
      </div>
    </div>
  );
};
