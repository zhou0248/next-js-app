export async function GET(request) {
  const api_key = process.env.movie_api_key;
  let url = `https://api.themoviedb.org/3/search/movie?query=<WEATHERSTRING>&include_adult=false&language=en-US&page=1`;
}
