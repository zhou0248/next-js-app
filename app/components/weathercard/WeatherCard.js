"use client";

import React from "react";
import styles from "./weathercard.module.css";
import { useState, useEffect } from "react";

const WeatherCard = (props) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const location = props.location;
  const getWeather = props.getWeather;
  useEffect(() => {
    const weather = getWeather(location);
    weather.then((data) => {
      setWeatherInfo(data);
    });
  }, [location]);

  if (weatherInfo && location) {
  }

  return (
    <div className={styles.WeatherCard}>
      <h3>Weather Information for {location}</h3>
      <div>
        {weatherInfo ? (
          <div>
            <p>Weather: {weatherInfo.weather}</p>
            <p>Description: {weatherInfo.description}</p>
            <p>Temperature: {weatherInfo.temp} </p>
            <p>
              Location: Lat {weatherInfo.lat}, Lon {weatherInfo.lon}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
