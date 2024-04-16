/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "placehold.co" },
      { hostname: "image.tmdb.org" },
      { hostname: "img.spoonacular.com" },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
