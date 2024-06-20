/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xtg6gvmic7nikeib.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
