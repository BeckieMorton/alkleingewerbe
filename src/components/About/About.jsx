import styles from "./About.module.css";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesBox}>
          <h1>
            <span style={{ fontWeight: "300" }}>Über </span>
            <span style={{ textDecoration: "underline" }}>mich</span>
          </h1>
        </div>

        <div className={styles.servicesBox}>
          <div className={styles.aboutmeText}>
            <p>
              Edison bulb green juice prism biodiesel paleo butcher pabst big
              mood godard photo booth flexitarian irony vibecession. Lomo ramps
              poutine man braid celiac. Post-ironic cupping vibecession same
              vegan pok pok grailed literally irony. Heirloom biodiesel prism
              roof party same, williamsburg iceland gatekeep
            </p>
            <p>wepoglmdfh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
