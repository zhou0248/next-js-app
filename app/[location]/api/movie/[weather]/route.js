export async function GET(request, { params }) {
  const keyword = params.weather;
  try {
    const api_token = process.env.movie_api_token;
    let url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${api_token}`,
      },
    };
    let resp = await fetch(url, options);
    if (!resp.ok) {
      return Response.json(
        { error: `Can't fetch movies for ${keyword}` },
        { status: resp.status },
      );
    }
    let data = await resp.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response({ error: err.message }, { status: 500 });
  }
}
