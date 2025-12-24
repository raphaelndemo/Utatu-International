import Link from "next/link";
import Image from "next/image";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { client } from "@/lib/sanity/client";
import { postsQuery, eventsQuery } from "@/lib/sanity/queries";
import { SanityPost, SanityEvent } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

export default async function Home() {
  const schools = [

    {
      title: "Foundation Stage - (Kindergarten 1-3)",
      description: "Kindergarten 1-3. A playful start to learning.",
      href: "/schools/foundation-stage",
      image: "/images/kindergarten.jpg",
    },
    {
      title: "Preparatory School - (Year 1-6)",
      description: "Year 1-6. Building core skills and confidence.",
      href: "/schools/preparatory-school",
      image: "/images/preparatory.jpg",
    },
    {
      title: "Junior High School - (Year 7-9)",
      description: "Year 7-9. Fostering independence and inquiry.",
      href: "/schools/junior-high-school",
      image: "/images/online-homeschooling.jpg",
    },
    {
      title: "Senior High School - (Year 10-11)",
      description: "Year 10-11. Academic excellence and leadership.",
      href: "/schools/senior-high-school",
      image: "/images/senior-high.jpg",
    },
    {
      title: "Special Needs Education",
      description: "Inclusive education tailored to individual needs.",
      href: "/schools/special-needs-education",
      image: "/images/special-needs.jpg",
    },

  ];

  // Fetch posts and events from Sanity
  const sanityPosts: SanityPost[] = await client.fetch(postsQuery);
  const sanityEvents: SanityEvent[] = await client.fetch(eventsQuery);

  // Transform Sanity posts to match existing UI structure
  const posts = sanityPosts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    href: `/posts/${post.slug.current}`,
    image: post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : 'https://images.unsplash.com/photo-1427504743050-6605296530a7?q=80&w=2070&auto=format&fit=crop',
  }));

  // Transform Sanity events to match existing UI structure
  const events = sanityEvents.map((event) => {
    const eventDate = new Date(event.eventDate);
    return {
      day: eventDate.getDate().toString(),
      month: eventDate.toLocaleDateString('en-US', { month: 'short' }),
      title: event.title,
      time: event.time,
      location: event.location,
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[900px] flex items-center justify-center bg-primary text-primary-foreground ` ">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-[url('/images/child_on_a_laptop.jpg')] bg-cover bg-center" />

        <div className="relative z-20 container text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
            Welcome to Utatu International School <br />
            <TypewriterTitle />
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-primary-foreground/90">
            Qualified Teaching Staff providing a world-class Cambridge education.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
              Educational Excellence
            </h2>
            <h3 className="text-2xl font-bold text-foreground">
              Get the best Cambridge curriculum
            </h3>
            <div className="space-y-4 text-muted-foreground text-md leading-relaxed">
              <p>
                <span className="font-semibold text-primary">Utatu</span> is one of the best homeschooling international schools in
                Kenya offering a world-class Cambridge Curriculum. We offer
                learning from Kindergarten to Year 13 through a flexible hybrid
                homeschooling model, both online and physical learning at your
                home.
              </p>
              <p>
                Born from a commitment to quality, holistic, and affordable
                education, Utatu is rooted in the Swahili concept of Trinity,
                symbolizing the foundation of our vision, mission, core values,
                motto, and philosophy. Our dedication lies in empowering students
                to become positive change-makers, shaping a brighter future, one
                student at a time.
              </p>
            </div>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold" asChild>
              <Link href="/about">Read More</Link>
            </Button>
          </div>
          <div className="relative h-[300px] lg:h-[400px] w-full">
            <Image
              src="/images/parent_with_child_interaction.jpg"
              alt="Student reading or studying"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Our Schools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive curriculum catering to students at every stage of their educational journey.
            </p>
          </div>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {schools.map((school) => (
                <Card key={school.title} className="w-[350px] shrink-0 group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 whitespace-normal bg-primary text-primary-foreground p-0 gap-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={school.image}
                      alt={school.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col p-6 flex-1 justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-primary-foreground mb-3">
                        {school.title}
                      </h3>
                      <p className="text-primary-foreground/90 mb-2 line-clamp-3 text-sm leading-relaxed">
                        {school.description}
                      </p>
                    </div>
                    <Button variant="link" className="p-0 text-secondary font-bold uppercase tracking-wider w-fit" asChild>
                      <Link href={school.href} className="flex items-center gap-2 group/btn">
                        Read More <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="[&>div]:bg-primary" />
          </ScrollArea>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center mb-20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Join Our Happy Students</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Experience a holistic education that prepares your child for a bright future.
            Apply today and become part of the Utatu family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Posts & Events */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Latest Posts */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold font-heading text-primary">Latest Posts</h2>
              <Button variant="outline" asChild>
                <Link href="/posts">View All</Link>
              </Button>
            </div>
            <div className="grid gap-6">
              {posts.map((post) => (
                <Card key={post.title} className="flex flex-col md:flex-row overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:w-1/3 bg-muted h-48 md:h-auto relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="text-sm text-secondary font-semibold mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                      <Link href={post.href}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <Link href={post.href}>Read Article</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold font-heading text-primary">Upcoming Events</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="#">View All</Link>
              </Button>
            </div>
            <div className="space-y-6">
              {events.map((event) => (
                <Card key={event.title} className="flex overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-20 bg-primary text-primary-foreground flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-2xl font-bold">{event.day}</span>
                    <span className="text-sm uppercase">{event.month}</span>
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                    <div className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                      <Calendar className="h-3 w-3" /> {event.time}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {event.location}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
