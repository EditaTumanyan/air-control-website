/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site is built into ./out and served by Cloudflare Pages.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true
};

export default nextConfig;
