"use client";

import React from "react";
import styles from "./weathercard.module.css";
import { useEffect } from "react";

const WeatherCard = (props) => {
  const location = props.location;
  const getWeather = props.getWeather;
  useEffect(() => {
    const weather = (getWeather(location).map = (data) => {});
  }, [location]);
  return (
    <div className={styles.WeatherCard}>
      <h3>Weather Information for {location}</h3>
      <p></p>
    </div>
  );
};

export default WeatherCard;
