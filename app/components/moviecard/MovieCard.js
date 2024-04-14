"use client";
import React from "react";
import Image from "next/image";
import styles from "./moviecard.module.css";

const MovieCard = () => {
  return (
    <div className={styles.MovieCard}>
      <h3>Movie Name</h3>
      <Image src="" alt="movie poster" />
      <p>Movie Description</p>
    </div>
  );
};

export default MovieCard;
