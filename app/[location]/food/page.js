import Button from "@/app/components/Button/Button";
import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import React from "react";

const page = (props) => {
  const location = props.params.location;
  return (
    <div>
      page for food
      <Button buttonName="Go back" link="/" />
      <RecipeCard />
    </div>
  );
};

export default page;
