"use client";
import React from "react";
import Image from "next/image";
import styles from "./moviecard.module.css";
import { useState, useEffect } from "react";

const MovieCard = (props) => {
  const { getMovie, keyword } = props;
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const moviedata = getMovie(keyword);
    moviedata.then((data) => {
      setMovie(data);
    });
  }, [keyword]);

  return (
    <div className={styles.MovieCard}>
      {movie ? (
        <div>
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <Image
            src={movie.poster}
            alt="Movie Poster"
            width={300}
            height={200}
          />
          <p>{movie.overview}</p>
        </div>
      ) : (
        <div>
          <h3>Movie Title</h3>
          <p>Movie Details</p>
          <Image
            src="https://placehold.co/300x200"
            alt="Movie Poster"
            width={300}
            height={200}
          />
          <p>Movie Description</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
