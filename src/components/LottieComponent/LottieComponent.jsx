import React from "react";
import Lottie from "lottie-react";
import bees from "../../assets/animations/bees.json";

import styles from "./LottieComponent.module.css";

export const LottieComponent = () => {
  const style = {
    height: 100,
  };

  return (
    <div className={styles.animationContainer}>
      <Lottie animationData={bees} style={style} />
    </div>
  );
};
