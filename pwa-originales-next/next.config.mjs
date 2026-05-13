/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true
};

export default withPWA({
  dest: "public",
  disable: isDev,
  register: true,
  skipWaiting: true
})(nextConfig);
