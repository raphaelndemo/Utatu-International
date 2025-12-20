import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  const schools = [
    {
      title: "Special Needs Education",
      description: "Inclusive education tailored to individual needs.",
      href: "/schools/special-needs-education",
    },
    {
      title: "Foundation Stage",
      description: "Kindergarten 1-3. A playful start to learning.",
      href: "/schools/foundation-stage",
    },
    {
      title: "Preparatory School",
      description: "Year 1-6. Building core skills and confidence.",
      href: "/schools/preparatory-school",
    },
    {
      title: "Junior High School",
      description: "Year 7-9. Fostering independence and inquiry.",
      href: "/schools/junior-high-school",
    },
    {
      title: "Senior High School",
      description: "Year 10-11. Academic excellence and leadership.",
      href: "/schools/senior-high-school",
    },
    {
      title: "International Advanced School",
      description: "Year 12-13. Preparing for university and beyond.",
      href: "/schools/international-advanced-school",
    },
  ];

  const posts = [
    {
      title: "How Utatu fosters well-rounded individuals",
      excerpt: "At Utatu International, we believe that education extends far beyond the classroom...",
      date: "Sep 20, 2024",
      href: "#",
    },
    {
      title: "Faith, Knowledge, and Character: Our Difference",
      excerpt: "Utatu International School is more than just an institution of learning; it’s a community...",
      date: "Sep 15, 2024",
      href: "#",
    },
    {
      title: "Choose excellence, choose Utatu International School",
      excerpt: "Why Choose Utatu International School? Utatu International School offers a unique...",
      date: "Sep 10, 2024",
      href: "#",
    },
  ];

  const events = [
    {
      day: "27",
      month: "Sep",
      title: "Career Day is coming!",
      time: "09:00 - 16:00",
      location: "Nairobi, Kenya",
    },
    {
      day: "16",
      month: "Oct",
      title: "Talent Day, October 2024",
      time: "09:00 - 16:00",
      location: "Nairobi, Kenya",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative z-20 container text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
            International Standards <br />
            State-of-the-Art Facilities
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

      {/* Schools Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Our Schools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive curriculum catering to students at every stage of their educational journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <Card key={school.title} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{school.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{school.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 text-secondary font-semibold" asChild>
                    <Link href={school.href} className="flex items-center gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
                <Link href="#">View All</Link>
              </Button>
            </div>
            <div className="grid gap-6">
              {posts.map((post) => (
                <Card key={post.title} className="flex flex-col md:flex-row overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:w-1/3 bg-muted h-48 md:h-auto bg-[url('https://images.unsplash.com/photo-1427504743050-6605296530a7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
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
    </div>
  );
}
