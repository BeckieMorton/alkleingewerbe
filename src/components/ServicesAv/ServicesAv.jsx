import styles from "./ServicesAv.module.css";

export const ServicesAv = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesBox}>
          <h1>My Services</h1>
        </div>
        <div className={styles.imageBox}>
          <img src="./assets/pexelscopy.jpg" alt="Image" />
        </div>
        <div className={styles.servicesBox}>
          <p>Postal, courier and express services</p>
          <p>Secretarial and typing services</p>
          <p>Cleaning of vacation homes</p>
          <p>Household help and clearing out cellars</p>
          <p>Social care for the elderly</p>
          <p>Gardening services such as lawn mowing</p>
          <p>Clearing out the garden</p>
        </div>
      </div>
    </div>
  );
};
