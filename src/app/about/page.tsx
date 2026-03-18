import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, UserCog, Wallet, Globe } from "lucide-react";
import dynamic from "next/dynamic";
const TeamSection = dynamic(() => import("@/components/team-section").then((mod) => mod.TeamSection));
const GoogleReviews = dynamic(() => import("@/components/google-reviews").then((mod) => mod.GoogleReviews));

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
                                    Utatu International is a future-focused Cambridge homeschooling institution designed for families who value both academic excellence and flexibility. <br />

                                    We provide structured, high-quality hybrid and online Cambridge education from Kindergarten to Year 13, combining internationally recognized academic standards with personalized learning pathways. <br />

                                    We were founded on a simple conviction: children learn best when education adapts to them, not the other way around. Through expert educators, intentional academic planning, and close collaboration with parents, we create learning environments where students grow intellectually, emotionally, and confidently. <br />

                                    Utatu is not just an online school.
                                    It is a guided, supported Cambridge learning journey built for modern families.
                                </p>
                            </div>
                            <div className="pt-4">
                                <h3 className="text-lg font-bold font-italic font-heading text-primary border-l-4 border-secondary pl-4">
                                    Our Motto: Be Transformed to Transform the World
                                </h3>
                            </div>

                            <div className="pt-6">
                                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8" asChild>
                                    <Link href="/#our-schools">Our Schools</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Image Platform */}
                    <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
                        <div className="absolute inset-0 w-full h-full [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]">
                            <Image
                                src="/images/online_studies.webp"
                                alt="Student reading or studying"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay for better text contrast if needed or just aesthetic tint */}
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                        </div>
                    </div>
                </div>
            </section>

            {/*Differential statement*/}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <h3 className="text-3xl md:text-4xl font-light font-heading text-primary">
                            What makes us different?
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Utatu International combines structured Cambridge academic delivery with flexible hybrid access and individualized educator support. We bridge the gap between independence and institutional excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 bg-muted/30 relative overflow-hidden">
                <div className="container relative z-10 px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                        <h2 className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                            Our Foundation
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-light font-heading text-primary">
                            Mission, Vision &amp; Values
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                        {/* Mission */}
                        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[4px] md:border-[6px] border-primary/10 overflow-hidden shadow-2xl shrink-0">
                                <Image
                                    src="/images/preparatory.webp"
                                    alt="Student representing our mission"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 192px, 256px"
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
                                    src="/images/senior_high.webp"
                                    alt="Student representing our vision"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 192px, 256px"
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
                                    src="/images/girl_reading.webp"
                                    alt="Student representing our core values"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 192px, 256px"
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



            {/* Why Choose Us Section - Dark Template Style */}
            <section id="why-choose-us" className="bg-primary py-24 relative overflow-hidden text-primary-foreground">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        {/* Right Content (Order 2 on mobile, 1 on desktop if we want to match template strictly? Template has images on left. So Order 1 is images) */}

                        {/* Left Side - Interlocked Image Collage */}
                        <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[700px]">

                            {/* Image 1: Top Right - large */}
                            <div className="absolute top-0 right-0 w-[55%] h-[48%] overflow-hidden shadow-2xl z-10 transform hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/images/online (1).webp"
                                    alt="Senior High Student"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 60vw, 30vw"
                                />
                            </div>

                            {/* Image 2: Middle Left - larger, overlaps both Image 1 and 3 */}
                            <div className="absolute top-[22%] left-0 w-[58%] h-[52%] overflow-hidden shadow-2xl z-20 transform hover:scale-[1.02] transition-transform duration-500 border-4 border-primary">
                                <Image
                                    src="/images/online (2).webp"
                                    alt="Happy Online Student"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 65vw, 32vw"
                                />
                            </div>

                            {/* Image 3: Bottom Right - large */}
                            <div className="absolute bottom-0 right-0 w-[55%] h-[48%] overflow-hidden shadow-2xl z-10 transform hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/images/online (3).webp"
                                    alt="Child on Laptop"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 60vw, 30vw"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2 space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                                    Why Choose Utatu International School?
                                </h2>
                                <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                                    Empowering the next generation with world-class education, flexibility, and personalized care.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {/* Item 1 */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-secondary">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading">Cambridge IGCSE Online Curriculum</h3>
                                    <p className="text-primary-foreground/70 text-lg leading-relaxed">
                                        Internationally recognized Cambridge IGCSE education delivered through a structured, high-quality online homeschooling program.
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-secondary">
                                        <UserCog className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading">Personalized & Flexible Learning</h3>
                                    <p className="text-primary-foreground/70 text-lg leading-relaxed">
                                        Individualized attention, flexible schedules, and self-paced learning designed to fit each student’s ability, lifestyle, and goals.
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-secondary">
                                        <Wallet className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading">Affordable, Cost-Effective Homeschooling</h3>
                                    <p className="text-primary-foreground/70 text-lg leading-relaxed">
                                        Premium international education without extra costs like transport, uniforms, or boarding—<Link href="/cambridge-school-fees-kenya" className="text-secondary hover:underline">flexible Cambridge education</Link> made accessible.
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="space-y-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-secondary">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading">Inclusive & Globally Accessible Education</h3>
                                    <p className="text-primary-foreground/70 text-lg leading-relaxed">
                                        Learn from anywhere in the world with full academic support, including for students with special learning needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Google Reviews Section */}
            <GoogleReviews />

            <div className="container py-20">
                <div className="max-w-4xl mx-auto space-y-12">

                    <div className="bg-muted p-8 rounded-lg text-center space-y-6">
                        <h3 className="text-2xl font-medium font-heading tracking-wide">Ready to join our community?</h3>
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
