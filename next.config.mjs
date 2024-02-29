/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://mkapi.hosts.my.id/:path*',
            },
        ]
    },
};

export default nextConfig;
