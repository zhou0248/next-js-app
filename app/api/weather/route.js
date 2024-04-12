export async function GET(request) {
  try {
    const api_key = process.env.weather_api_key;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&appid=${api_key}`;
    let resp = await fetch(url);
    let data = await resp.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response("{'error':123, 'message':'weather is not found'}", {
      headers: {
        "content-type": "application/json",
      },
      status: 432,
    });
  }
}
