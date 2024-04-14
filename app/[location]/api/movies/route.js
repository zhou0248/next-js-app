export async function GET(request) {
  const location = params.location;
  try {
    const api_key = process.env.weather_api_key;
    let url = `https://api.themoviedb.org/3/search/movie?query=${weather}&include_adult=false&language=en-US&page=1`;
    let resp = await fetch(url);
    let data = await resp.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response({ error: err.message }, { status: 500 });
  }
}
