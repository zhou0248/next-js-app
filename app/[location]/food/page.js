import Button from "@/app/components/Button/Button";
import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = (props) => {
  const location = props.params.location;
  return (
    <div>
      <p>
        <Link href="/">Back to Search Page</Link>
      </p>
      page for food
      <Button buttonName="Go back" link="/" />
      <RecipeCard />
    </div>
  );
};

export default page;
