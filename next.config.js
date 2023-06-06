/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@mikro-orm/core",
      "@mikro-orm/knex",
    ],
  },
};

module.exports = nextConfig;