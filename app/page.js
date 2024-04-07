import Image from "next/image";
import Header from "./components/header/header";
import styles from "./page.module.css";
import MovieCard from "./components/moviecard/MovieCard";
import RecipeCard from "./components/recipecard/RecipeCard";
import WeatherCard from "./components/weathercard/WeatherCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MovieCard />
      <RecipeCard />
      <WeatherCard />
    </main>
  );
}
