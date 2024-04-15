"use client";

import React from "react";
import Image from "next/image";
import styles from "./recipecard.module.css";

const RecipeCard = () => {
  return (
    <div className={styles.RecipeCard}>
      <h3>Recipe Name</h3>
      <Image
        src="https://placehold.co/600x400"
        alt="Recipe Image"
        width={600}
        height={400}
      />
      <p>Recipe Details lorem</p>
    </div>
  );
};

export default RecipeCard;
