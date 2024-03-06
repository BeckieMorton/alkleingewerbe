import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export const Button = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <p>
          <span className={styles.homeLink}>Zurück</span>
        </p>
      </Link>
    </div>
  );
};
