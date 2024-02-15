import styles from "./ServicesAv.module.css";

export const ServicesAv = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesBox}>
          <h1>
            <span style={{ fontWeight: "300" }}>Meine </span>
            <span style={{ textDecoration: "underline" }}>
              Dienstleistungen
            </span>
          </h1>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img
              className={styles.imagestozoom}
              src="./assets/delivery.jpg"
              alt="postal services"
            />
          </p>
          <p>Post-, Kurier- und Expressdienste</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img
              className={styles.imagestozoom}
              src="./assets/computer.jpg"
              alt="postal services"
            />
          </p>
          <p>Sekretariats- und Schreibdienste</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img
              className={styles.imagestozoom}
              src="./assets/cleaning.jpg"
              alt="postal services"
            />
          </p>
          <p>Reinigung von Ferienwohnungen</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img
              className={styles.imagestozoom}
              src="./assets/cellar.jpg"
              alt="postal services"
            />
          </p>
          <p>Haushaltshilfe und Entrümpelung von Kellern</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img
              className={styles.imagestozoom}
              src="./assets/elderly.jpg"
              alt="postal services"
            />
          </p>
          <p>Soziale Betreuung älterer Menschen</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img
              className={styles.imagestozoom}
              src="./assets/mowing.jpg"
              alt="postal services"
            />
          </p>
          <p>Gartenhilsarbeiten wie z. B. Rasen mähen</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img
              className={styles.imagestozoom}
              src="./assets/gardening.jpg"
              alt="postal services"
            />
          </p>
          <p>Garten entrümpeln</p>
        </div>
      </div>
    </div>
  );
};
