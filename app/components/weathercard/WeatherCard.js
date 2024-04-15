"use client";
//TODO: error handling on fetch
//solution: set time out?
import React from "react";
import styles from "./weathercard.module.css";
import { useState, useEffect } from "react";

const WeatherCard = (props) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const location = props.location;
  const decodeLocation = decodeURIComponent(location);
  const getWeather = props.getWeather;
  useEffect(() => {
    const weather = getWeather(location);
    weather.then((data) => {
      setWeatherInfo(data);
    });
  }, [location]);

  return (
    <div className={styles.WeatherCard}>
      <h3>Weather Information for {decodeLocation}</h3>
      <div>
        {weatherInfo ? (
          <div>
            <p>Weather: {weatherInfo.weather}</p>
            <p>Description: {weatherInfo.description}</p>
            <p>Temperature: {weatherInfo.temp} °C </p>
            <p>
              Location: Latitude {weatherInfo.lat} ° , Longitude{" "}
              {weatherInfo.lon} °
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {weatherInfo ? (
          <div>
            <p>
              <a href={`/${location}/food?w=${weatherInfo.weather}`}>
                Find the Pairing Food
              </a>
            </p>
            <p>
              <a href={`/${location}/movie?w=${weatherInfo.weather}`}>
                Find the Pairing Movie
              </a>
            </p>
          </div>
        ) : (
          <p> Searching ... </p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
