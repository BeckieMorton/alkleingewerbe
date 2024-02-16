import styles from "./Copyright.module.css";

export const Copyright = () => {
  return (
    <div
      className={styles.container}
      style={{ color: "black", fontSize: "10px" }}
    >
      <p>© 2024 A. Ludewig Dienstleistungen von A-Z. Alle Rechte vorbehalten</p>
    </div>
  );
};
