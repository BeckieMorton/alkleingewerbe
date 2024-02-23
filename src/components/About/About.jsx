import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBox}>
          <h1>
            <span style={{ fontWeight: "300" }}>Hi, Ich bin </span>
            Aline
          </h1>
        </div>
        <div className={styles.aboutBox}>
          <p className={styles.profilephoto}>
            <img src="./assets/aline.jpg" />
          </p>
        </div>
        <div className={styles.aboutBox}>
          <div className={styles.aboutText}>
            <p>
              Als Allround-Dienstleisterin mit Herz und Seele fliege ich auf
              großartige Service-Momente! Durch meine Selbstständigkeit im
              Kleingewerbe, habe ich die Möglichkeit die Dinge auf direktem Wege
              anzupacken. Getreu dem Motto – die flinksten Bienchen machen den
              besten Honig. Nach mehr als 10 Jahren im Kundenservice gibt es für
              mich keine unlösbaren Aufgaben. Ich bin mir sicher, dass wir
              gemeinsam die perfekte Lösung für Ihr Anliegen finden werden.
            </p>

            <div className={styles.centerBee}>
              Auf geht´s - Bee ready
              <img
                className={styles.bee}
                src="./assets/bee-white.png"
                alt="bee logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
