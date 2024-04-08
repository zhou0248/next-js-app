"use client";

import React from "react";
import styles from "./button.module.css";

const Button = () => {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <span className={styles.button} onClick={handleClick}>
      Clickable Button
    </span>
  );
};

export default Button;
