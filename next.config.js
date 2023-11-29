/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.valorant-api.com",
        port: "",
        pathname: "/agents/**/*",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    API_BASE_URL: "http://localhost:2000/api",
  },
};

module.exports = nextConfig;
