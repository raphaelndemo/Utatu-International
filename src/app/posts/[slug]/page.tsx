import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Calendar } from "lucide-react";
import { client } from "@/lib/sanity/client";
import { SanityPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post: SanityPost = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      mainImage {
        asset,
        alt
      }
    }`,
    { slug }
  );

  if (!post) notFound();

  // Sidebar: recent posts
  const recentPosts: SanityPost[] = await client.fetch(
    `*[_type == "post" && slug.current != $slug]
      | order(publishedAt desc)[0...4]{
        _id,
        title,
        slug,
        publishedAt,
        mainImage {
          asset,
          alt
        }
      }`,
    { slug }
  );

  return (
    <main className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ================= Main Article ================= */}
        <article className="lg:col-span-8">
          {/* Featured Image */}
          {post.mainImage && (
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-xl overflow-hidden mb-8">
              <Image
                src={urlFor(post.mainImage).width(1200).height(700).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          )}

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-6">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold mt-10 mb-4">
                      {children}
                    </h2>
                  ),
                  normal: ({ children }) => (
                    <p className="leading-relaxed mb-5">{children}</p>
                  ),
                },
                types: {
                  image: ({ value }) => (
                    <div className="relative w-full h-96 my-8">
                      <Image
                        src={urlFor(value).width(900).url()}
                        alt={value.alt || ""}
                        fill
                        className="object-cover rounded-lg"
                        unoptimized
                      />
                    </div>
                  ),
                },
              }}
            />
          </div>
        </article>

        {/* ================= Sidebar ================= */}
        <aside className="lg:col-span-4">
          <h3 className="text-lg font-semibold mb-6">Recent stories</h3>

          <div className="space-y-6">
            {recentPosts.map((item) => (
              <Link
                key={item._id}
                href={`/posts/${item.slug.current}`}
                className="flex gap-4 group"
              >
                <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  {item.mainImage && (
                    <Image
                      src={urlFor(item.mainImage).width(300).height(200).url()}
                      alt={item.mainImage.alt || item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                      unoptimized
                    />
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium leading-snug group-hover:underline">
                    {item.title}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
