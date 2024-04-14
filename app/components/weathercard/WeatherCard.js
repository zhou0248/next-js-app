"use client";

import React from "react";
import styles from "./weathercard.module.css";

const WeatherCard = (props) => {
  const location = props.location;
  const weather = props.weather;
  return (
    <div className={styles.WeatherCard}>
      <h3>Weather Information for {location}</h3>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherCard;
