/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    }
};

export default nextConfig;
