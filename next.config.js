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
            value: 'attachment; filename="부산 디지털금융블록체인 아카데미 안내문 및 입학원서.hwp"',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig