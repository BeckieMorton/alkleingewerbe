import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <div className={styles.headerContainer}>
          <NavLink to="/">
            <img
              src="/assets/logo.png"
              alt="A Ludewig Dienstleistungen von A-Z logo"
            />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
