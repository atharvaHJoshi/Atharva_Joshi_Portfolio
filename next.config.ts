import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force a static HTML/CSS/JS export
  output: "export",

  // 2. Disable default image optimization (GitHub Pages cannot run the required Node server)
  images: {
    unoptimized: true,
  },

  // 3. Match your GitHub repository name exactly so asset paths (/css, /js) resolve correctly
  basePath: "/Atharva_Joshi_Portfolio",

  // Keep React strict mode (existing option preserved)
  reactStrictMode: true,
};

export default nextConfig;
