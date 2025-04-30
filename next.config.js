/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/events-news',
        destination: 'https://blog.more4nature.eu',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
