import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            {/* Welcome Section */}
            <section className="bg-background overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Text Platform */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-24 relative z-10">
                        <div className="space-y-6 max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight">
                                Who We Are
                            </h2>
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground/80">
                                A Holistic Approach to Education – Shaping futures, one student at a time.
                            </h3>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Utatu International School is more than just an institution; it’s a cornerstone for shaping the leaders of tomorrow. The school is based in Nairobi, Kenya. Rooted in the Swahili word for Trinity, our school embodies a holistic approach to education that nurtures the mind, body, and spirit. With a steadfast commitment to providing quality, affordable education, Utatu is dedicated to transforming lives and uplifting communities.
                                </p>
                            </div>
                            <div className="pt-4">
                                <h3 className="text-lg font-bold font-italic font-heading text-primary border-l-4 border-secondary pl-4">
                                    Our Motto: Be Transformed to Transform the World
                                </h3>
                            </div>

                            <div className="pt-6">
                                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8" asChild>
                                    <Link href="/about">Our Schools</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Image Platform */}
                    <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
                        <div className="absolute inset-0 w-full h-full [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]">
                            <Image
                                src="/images/online_studies.jpg"
                                alt="Student reading or studying"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Overlay for better text contrast if needed or just aesthetic tint */}
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 relative overflow-hidden">
                
                

                <div className="container relative z-10 px-4 mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                        {/* Mission */}
                        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[4px] md:border-[6px] border-primary/10 overflow-hidden shadow-2xl shrink-0">
                                <Image
                                    src="/images/preparatory.jpg"
                                    alt="Student representing our mission"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary">Our Mission</h3>
                                <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed max-w-sm mx-auto px-4">
                                    To offer holistic transformative education that develops the learners' intellectual, social, physical, emotional and spiritual well-being for community advancement.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-[4px] md:border-[6px] border-primary/10 overflow-hidden shadow-2xl shrink-0 -mt-2 md:-mt-4 lg:-mt-8">
                                <Image
                                    src="/images/senior_high.jpg"
                                    alt="Student representing our vision"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary">Our Vision</h3>
                                <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed max-w-sm mx-auto px-4">
                                    To transform learners through quality holistic education.
                                </p>
                            </div>
                        </div>

                        {/* Core Values */}
                        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[4px] md:border-[6px] border-primary/10 overflow-hidden shadow-2xl shrink-0">
                                <Image
                                    src="/images/girl_reading.png"
                                    alt="Student representing our core values"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary">Core Values</h3>
                                <ul className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed space-y-1 max-w-sm mx-auto list-none px-4">
                                    <li>Quality Christ centred education</li>
                                    <li>Life-long learning</li>
                                    <li>Holistic growth</li>
                                    <li>Community development and servanthood</li>
                                    <li>Integrity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-20">
                <div className="max-w-4xl mx-auto space-y-12">

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
        </>
    );
}
