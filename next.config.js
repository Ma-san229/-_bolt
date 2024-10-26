/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['api.dicebear.com'],
  },
  // APIルートを使用するため、静的エクスポートを無効化
  distDir: '.next',
}

module.exports = nextConfig