import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/Resume-Website' : '',
  assetPrefix: isProd ? '/Resume-Website/' : '',
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
    unoptimized: true
  },
  output : "export"
};

export default nextConfig;
