import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container py-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary" id="about-us">About Utatu International</h1>
                    <p className="text-xl text-muted-foreground">
                        Nurturing the leaders of tomorrow through world-class Cambridge education.
                    </p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p>
                        Utatu is an international school based in Nairobi, Kenya. The school was born out of the need to have a quality holistic affordable education following the Cambridge International curriculum.
                    </p>
                    <p>
                        We are committed to providing an environment where every student can thrive academically, socially, and emotionally. Our dedicated team of educators ensures that each child receives personalized attention and support to reach their full potential.
                    </p>

                    <h2 className="text-2xl font-bold font-heading text-primary mt-8 mb-4" id="our-mission">Our Mission</h2>
                    <p>
                        To provide a holistic education that empowers students to become responsible, compassionate, and innovative global citizens.
                    </p>

                    <h2 className="text-2xl font-bold font-heading text-primary mt-8 mb-4" id="our-vision">Our Vision</h2>
                    <p>
                        To be a leading international school in Kenya, recognized for academic excellence and character development.
                    </p>

                    <h2 className="text-2xl font-bold font-heading text-primary mt-8 mb-4" id="our-values">Core Values</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Excellence</li>
                        <li>Integrity</li>
                        <li>Respect</li>
                        <li>Innovation</li>
                        <li>Community</li>
                    </ul>
                </div>

                <div className="bg-muted p-8 rounded-lg text-center space-y-6">
                    <h3 className="text-2xl font-bold font-heading">Ready to join our community?</h3>
                    <p className="text-muted-foreground">
                        We welcome families from all backgrounds to join the Utatu International family.
                    </p>
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                        <Link href="/contact">Apply Now</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
