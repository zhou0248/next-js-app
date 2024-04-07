import React from "react";
import Image from "next/image";
import styles from "./moviecard.module.css";
import Button from "../button/Button";

const MovieCard = () => {
  return (
    <div className={styles.MovieCard}>
      <h3>Movie Name</h3>
      <Image href="" alt="movie poster" />
      <p>Movie Description</p>
      <Button />
    </div>
  );
};

export default MovieCard;
