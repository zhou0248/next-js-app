import React from "react";
import Image from "next/image";
import styles from "./recipecard.module.css";
import Button from "../button/Button";

const RecipeCard = () => {
  return (
    <div className={styles.RecipeCard}>
      <h3>Recipe Name</h3>
      <Image href="" alt="movie poster" />
      <p>Recipe Details lorem</p>
      <Button />
    </div>
  );
};

export default RecipeCard;
