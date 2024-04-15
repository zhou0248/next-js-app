import Button from "@/app/components/Button/Button";
import MovieCard from "@/app/components/MovieCard/MovieCard";
import Link from "next/link";
import React from "react";

const page = (props) => {
  const location = props.params.location;
  return (
    <div>
      <p>
        <Link href={`/${location}`}>Back to Weather Page</Link>
      </p>
      <p></p>
      <MovieCard />
    </div>
  );
};

export default page;
