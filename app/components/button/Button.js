"use client";

import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  const { link, buttonName } = props;
  function redirect() {
    redirect(link);
  }
  return (
    <span className={styles.button} onClick={redirect}>
      {buttonName}
    </span>
  );
};

export default Button;
