/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY
    },
    images: {
        domains: ['images.unsplash.com']
    }
}

module.exports = nextConfig
