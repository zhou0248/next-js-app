"use client";

import React from "react";
import styles from "./weathercard.module.css";

const WeatherCard = (props) => {
  const getWeather = props.func;
  const location = props.location;
  return (
    <div className={styles.WeatherCard}>
      <h3>Weather Information for {location}</h3>
      <p>{getWeather()}</p>
    </div>
  );
};

export default WeatherCard;
