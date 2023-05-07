/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
