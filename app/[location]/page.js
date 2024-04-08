import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";

const page = (props) => {
  const location = props.params.location;

  return (
    <div>
      page for weather
      <p>{location}</p>
      <WeatherCard />
    </div>
  );
};

export default page;
