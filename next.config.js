/** @type {import('next').NextConfig} */

require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env:{
    API_URL: process.env.API_URL
  }
}
