/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/fee-structure',
                destination: '/cambridge-school-fees-kenya',
                permanent: true,
            },
            {
                source: '/cambridge-fee-structure-in-kenya',
                destination: '/cambridge-school-fees-kenya',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],

    },
}

export default nextConfig
