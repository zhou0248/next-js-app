import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1> {"Perfect Pairing for Today's Weather"} </h1>
    </div>
  );
};

export default Header;
