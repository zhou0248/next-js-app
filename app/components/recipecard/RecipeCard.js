"use client";

import React from "react";
import Image from "next/image";
import styles from "./recipecard.module.css";

const RecipeCard = () => {
  return (
    <div className={styles.RecipeCard}>
      <h3>Recipe Name</h3>
      <Image src="" alt="movie poster" />
      <p>Recipe Details lorem</p>
    </div>
  );
};

export default RecipeCard;
