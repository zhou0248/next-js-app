export async function GET(request, { params }) {
  const location = params.location;
  try {
    const api_key = process.env.weather_api_key;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;
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
