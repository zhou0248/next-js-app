import Button from "@/app/components/Button/Button";
import MovieCard from "@/app/components/MovieCard/MovieCard";
import React from "react";

const page = (props) => {
  const location = props.params.location;
  return (
    <div>
      page for movie
      <Button buttonName="Go Back" link="/" />
      <p>{location}</p>
      <MovieCard />
    </div>
  );
};

export default page;
