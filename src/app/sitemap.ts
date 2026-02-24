import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity/client';
import { postsQuery } from '@/lib/sanity/queries';
import { SanityPost } from '@/lib/sanity/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.utatuinternational.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/co-curricular-activities',
        '/contact',
        '/fee-structure',
        '/posts',
        '/school-calendar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // School pages
    const schools = [
        'foundation-stage',
        'preparatory-school',
        'junior-high-school',
        'senior-high-school',
        'international-advanced-school',
        'special-needs-education',
    ].map((slug) => ({
        url: `${baseUrl}/schools/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Dynamic blog posts
    let postRoutes: MetadataRoute.Sitemap = [];
    try {
        const posts: SanityPost[] = await client.fetch(postsQuery);
        postRoutes = posts.map((post) => ({
            url: `${baseUrl}/posts/${post.slug.current}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error('Error fetching posts for sitemap:', error);
    }

    return [...routes, ...schools, ...postRoutes];
}
