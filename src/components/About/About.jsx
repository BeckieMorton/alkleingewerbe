import styles from "./About.module.css";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBox}>
          <h1>
            <span style={{ fontWeight: "300" }}>Über </span>
            <span style={{ textDecoration: "underline" }}>mich</span>
          </h1>
        </div>

        <div className={styles.aboutBox}>
          <div className={styles.aboutText}>
            <p>
              Edison bulb green juice prism biodiesel paleo butcher pabst big
              mood godard photo booth flexitarian irony vibecession. Lomo ramps
              poutine man braid celiac. Post-ironic cupping vibecession same
              vegan pok pok grailed literally irony. Heirloom biodiesel prism
              roof party same, williamsburg iceland gatekeep uhjnknlkml
            </p>
            <p>wepoglmdfh ihjnkl oljmlmkl iojhnojl. ihl</p>
          </div>
        </div>
      </div>
    </div>
  );
};
