/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'es'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
  swcMinify: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;
