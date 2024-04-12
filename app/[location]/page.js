import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import MovieCard from "../components/MovieCard/MovieCard";

const page = (props) => {
  const location = props.params.location;

  return (
    <div>
      page for weather
      <p>{location}</p>
      <WeatherCard location={location} />
      <RecipeCard />
      <MovieCard />
    </div>
  );
};

export default page;
