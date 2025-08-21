/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*.hwp',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/x-hwp',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="application-form.hwp"',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig