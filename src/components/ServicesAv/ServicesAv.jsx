import styles from "./ServicesAv.module.css";

export const ServicesAv = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesBox}>
          <h1>
            My <span style={{ textDecoration: "underline" }}>Services</span>
          </h1>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="postal services" />
          </p>
          <p>Postal, courier and express services</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="postal services" />
          </p>
          <p>Secretarial and typing services</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="postal services" />
          </p>
          <p>Cleaning of vacation homes</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="postal services" />
          </p>
          <p>Household help and clearing out cellars</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="postal services" />
          </p>
          <p>Social care for the elderly</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="postal services" />
          </p>
          <p>Gardening services such as lawn mowing</p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="postal services" />
          </p>
          <p>Clearing out the garden</p>
        </div>
      </div>
    </div>
  );
};
