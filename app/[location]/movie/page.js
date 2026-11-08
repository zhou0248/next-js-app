import MovieCard from "@/app/components/MovieCard/MovieCard";
import Link from "next/link";
import React from "react";

const page = (props) => {
  const location = props.params.location;
  const weather = props.searchParams.w;
  const getMovie = async (weather, location) => {
    "use server";
    try {
      const url = process.env.baseurl;
      const decodeWeather = decodeURIComponent(weather);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
      let resp = await fetch(
        `${url}/${location}/api/movie/${weather}/`,
        options,
      );
      if (!resp.ok) {
        throw new Error(`Can't fetch Movies with keyword ${decodeWeather}`);
      }
      let data = await resp.json();
      if (data.results.length === 0) {
        throw new Error(`No movies found for ${weather}`);
      }
      let movie = {
        title: data.results[0].title,
        overview: data.results[0].overview,
        poster: data.results[0].poster_path
          ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`
          : "https://placehold.co/300x200",
        release_date: data.results[0].release_date,
      };
      return movie;
    } catch (err) {
      throw new Error(`Can't fetch Movies with keyword ${weather}`);
    }
  };

  return (
    <div>
      <p>
        <Link href={`/${location}`}>Back to Weather Page</Link>
      </p>
      <div>
        <p>Movies for {weather} </p>
        <MovieCard getMovie={getMovie} keyword={weather} />
      </div>
    </div>
  );
};

export default page;
