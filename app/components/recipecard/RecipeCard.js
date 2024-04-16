"use client";

import React from "react";
import Image from "next/image";
import styles from "./recipecard.module.css";
import { useState, useEffect } from "react";

const RecipeCard = (props) => {
  const { getRecipe, keyword } = props;
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const recipedata = getRecipe(keyword);
    recipedata.then((data) => {
      setRecipe(data);
    });
  }, [keyword]);
  return (
    <div className={styles.RecipeCard}>
      {recipe ? (
        <div>
          <h3>{recipe.title}</h3>
          <Image
            src={recipe.image}
            alt="Recipe Image"
            width={300}
            height={200}
          />
        </div>
      ) : (
        <div>
          <h3>Recipe Name</h3>
          <Image
            src="https://placehold.co/300x200"
            alt="Recipe Image"
            width={300}
            height={200}
          />
          <p>Recipe Details lorem</p>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
