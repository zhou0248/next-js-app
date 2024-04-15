import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import MovieCard from "../components/MovieCard/MovieCard";
import Link from "next/link";
import { data } from "autoprefixer";

const page = (props) => {
  const location = props.params.location;
  const decodeLocation = decodeURIComponent(location);
  const url = process.env.baseurl;

  const getWeather = async (place) => {
    "use server";
    const decodeLocation = decodeURIComponent(place);
    try {
      let resp = await fetch(`${url}/${place}/api/weather`, {
        headers: { accept: "application/json" },
      });
      if (!resp.ok) {
        throw new Error(
          `Can't fetch weather information for ${decodeLocation}`
        );
      }
      let data = await resp.json();
      let weather = {
        lon: data.coord.lon,
        lat: data.coord.lat,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
      };
      return weather;
    } catch (err) {
      throw new Error(`Can't fetch weather information for ${decodeLocation}`);
    }
  };
  const weatherInfo = getWeather(location);
  weatherInfo.then((data) => {
    console.log(data);
    return data;
  });
  return (
    <div className="p-8">
      <h2>The weather in {decodeLocation}</h2>
      <p>
        <Link href="/">Back to Search Page</Link>
      </p>
      <WeatherCard location={location} getWeather={getWeather} />
      <p>
        <Link href={{ pathname: `/${location}/food`, query: { weather: "" } }}>
          Find the Pairing Food
        </Link>
      </p>
      <p>
        <Link href={{ pathname: `/${location}/movie`, query: { weather: "" } }}>
          Find the Pairing Movie
        </Link>
      </p>
    </div>
  );
};

export default page;
