import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
import React from "react";
import Link from "next/link";

const page = (props) => {
  const location = props.params.location;
  const weather = props.searchParams.w;
  const url = process.env.baseurl;

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
