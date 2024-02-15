import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <div className={styles.headerContainer}>
          <img src="/assets/logo.png" alt="Kleingewerbe logo" />
        </div>
      </nav>
    </div>
  );
};
