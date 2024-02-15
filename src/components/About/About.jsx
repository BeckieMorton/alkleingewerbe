import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesBox}>
          <h1>
            About <span style={{ textDecoration: "underline" }}>Me</span>
          </h1>
        </div>
        <div className={styles.servicesBox}>
          <p>
            <img src="./assets/delivery.jpg" alt="photo of me?" />
          </p>
        </div>
        <div className={styles.servicesBox}>
          <p>
            Secretarial and typing services rhsetjhn zdhnzdhfnzdxn zdndxfhzdxtj
          </p>
          <p>wepoglmdfh;l</p>
        </div>
      </div>
    </div>
  );
};
