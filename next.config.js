/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images:{
    loader:"akamai",
    path:"",
    domains: ['avatars.githubusercontent.com']
  },
  //basePath: "/nextjs-pages",
  assetPrefix: "./",

  

}

module.exports = nextConfig
