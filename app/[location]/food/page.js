import Button from "@/app/components/Button/Button";
import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import React from "react";
import Link from "next/link";

const page = (props) => {
  const location = props.params.location;
  return (
    <div>
      <p>
        <Link href={`/${location}`}>Back to Weather Page</Link>
      </p>
      <RecipeCard />
    </div>
  );
};

export default page;
