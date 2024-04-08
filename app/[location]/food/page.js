import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import React from "react";

const page = (props) => {
  const location = props.params.location;
  return (
    <div>
      page for food
      <p> {location} </p>
      <RecipeCard />
    </div>
  );
};

export default page;
