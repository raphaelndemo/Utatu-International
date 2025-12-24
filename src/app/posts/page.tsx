import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { client } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { SanityPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

export default async function PostsPage() {
    // Fetch all posts from Sanity
    const sanityPosts: SanityPost[] = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      alt
    }
  }`);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-primary-foreground">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Latest Posts</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl">
                        Stay updated with the latest news, insights, and stories from Utatu International School.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20">
                <div className="container">
                    {sanityPosts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No posts available yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sanityPosts.map((post) => (
                                <Card key={post._id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                                    <Link href={`/posts/${post.slug.current}`}>
                                        <div className="relative h-56 w-full bg-muted">
                                            {post.mainImage && (
                                                <Image
                                                    src={urlFor(post.mainImage).width(600).height(400).url()}
                                                    alt={post.mainImage.alt || post.title}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-sm text-secondary font-semibold mb-3">
                                                <Calendar className="h-4 w-4" />
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                            <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                            <p className="text-muted-foreground line-clamp-3 mb-4">
                                                {post.excerpt}
                                            </p>
                                            <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                                                Read More →
                                            </Button>
                                        </div>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
