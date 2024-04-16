/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "placehold.co" },
      { hostname: "image.tmdb.org" },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
