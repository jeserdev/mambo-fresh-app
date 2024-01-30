/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // if your website has no www, drop it
      },
      {
        protocol: 'https',
        hostname: 'https://mambo-fresh-app-v1.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
