"use client";

import React from "react";
import styles from "./weathercard.module.css";
import Button from "../Button/Button";

const WeatherCard = (props) => {
  const location = props.location;

  return (
    <div className={styles.WeatherCard}>
      <h3>Weather Information for {location}</h3>
      <p>Weather Details</p>
      <Button />
    </div>
  );
};

export default WeatherCard;
