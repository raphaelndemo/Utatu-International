import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// This would typically come from a CMS or database
const schoolsData: Record<string, { title: string; description: string; content: string }> = {
    "special-needs-education": {
        title: "Special Needs Education",
        description: "Inclusive education tailored to individual needs.",
        content: "We believe that every child deserves a quality education. Our Special Needs Education program is designed to support students with diverse learning needs, ensuring they have the resources and guidance to succeed.",
    },
    "foundation-stage": {
        title: "Foundation Stage",
        description: "Kindergarten 1-3. A playful start to learning.",
        content: "Our Foundation Stage focuses on learning through play. We provide a safe and nurturing environment where young children can explore, discover, and develop essential social and cognitive skills.",
    },
    "preparatory-school": {
        title: "Preparatory School",
        description: "Year 1-6. Building core skills and confidence.",
        content: "In the Preparatory School, we build upon the foundation laid in the early years. Students engage in a broad curriculum that fosters curiosity, creativity, and a love for learning.",
    },
    "junior-high-school": {
        title: "Junior High School",
        description: "Year 7-9. Fostering independence and inquiry.",
        content: "Junior High School is a time of transition and growth. We encourage students to take ownership of their learning, develop critical thinking skills, and explore their interests in greater depth.",
    },
    "senior-high-school": {
        title: "Senior High School",
        description: "Year 10-11. Academic excellence and leadership.",
        content: "Our Senior High School program prepares students for the IGCSE examinations. We focus on academic excellence, leadership development, and preparing students for the challenges of the future.",
    },
    "international-advanced-school": {
        title: "International Advanced School",
        description: "Year 12-13. Preparing for university and beyond.",
        content: "The International Advanced School offers A-Level courses that prepare students for university admission. We provide rigorous academic training and career guidance to help students achieve their goals.",
    },
};

export default async function SchoolPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const school = schoolsData[slug];

    if (!school) {
        notFound();
    }

    return (
        <div className="container py-20">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">{school.title}</h1>
                    <p className="text-xl text-muted-foreground">{school.description}</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p>{school.content}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="flex gap-4 pt-8">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                        <Link href="/contact">Apply for {school.title}</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Schedule a Visit</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
