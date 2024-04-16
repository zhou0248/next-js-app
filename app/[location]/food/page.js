import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import React from "react";
import Link from "next/link";

const page = (props) => {
  const location = props.params.location;
  const weather = props.searchParams.w;
  // const url = process.env.baseurl;
  const getRecipe = async (weather) => {
    "use server";
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${weather}&apiKey=${process.env.food_api_key}`;
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
      let resp = await fetch(url, options);
      if (!resp.ok) {
        throw new Error(`Can't fetch Recipes with keyword ${weather}`);
      }
      let data = await resp.json();
      if (data.results.length === 0) {
        throw new Error(`No recipes found for ${weather}`);
      }

      let recipe = {
        id: data.results[0].id,
        title: data.results[0].title,
        image: data.results[0].image,
      };
      return recipe;
    } catch (err) {
      throw new Error(`Can't fetch Recipes with keyword ${weather}`);
    }
  };
  return (
    <div>
      <p>
        <Link href={`/${location}`}>Back to Weather Page</Link>
      </p>
      <RecipeCard getRecipe={getRecipe} keyword={weather} />
    </div>
  );
};

export default page;
