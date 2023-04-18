/** @type {import('next').NextConfig} */
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([])

const nextConfig = {
  reactStrictMode: true,
  include: path.resolve(__dirname, '.'),
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
}
module.exports = async (phase, { defaultConfig }) => {
  delete defaultConfig['webpackDevMiddleware']

  return withPlugins([withBundleAnalyzer, withTM], nextConfig)(phase, {
    defaultConfig
  })
}
