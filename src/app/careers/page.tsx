import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TalentNetworkForm } from "@/components/careers/talent-network-form";
import { client } from "@/lib/sanity/client";
import { vacanciesQuery } from "@/lib/sanity/queries";
import { SanityVacancy } from "@/lib/sanity/types";
import {
    Briefcase,
    Laptop,
    GraduationCap,
    HeartHandshake,
    Sparkles,
    ArrowRight,
    MapPin,
    Users,
    Compass,
    Calendar,
    Clock,
    CheckCircle2,
} from "lucide-react";

const supportingValueProposition =
    "Join a dynamic team of educators pioneering a flexible, hybrid Cambridge education model in Kenya. We blend digital innovation with personalized mentorship to empower students everywhere. Thrive in an environment that values professional freedom, modern pedagogy, and student-first impact.";

const perks = [
    {
        title: "Hybrid Flexibility",
        description:
            "Enjoy a flexible work model combining remote teaching with localized support right here in Nairobi.",
        icon: Laptop,
        badge: "Work-Life Balance",
    },
    {
        title: "Continuous Growth",
        description:
            "Access ongoing professional development and specialized training in modern hybrid and Cambridge pedagogy.",
        icon: GraduationCap,
        badge: "Professional Training",
    },
    {
        title: "Student-First Impact",
        description:
            "Deliver meaningful outcomes through smaller learning cohorts, individualized pacing, and authentic mentorship.",
        icon: HeartHandshake,
        badge: "Purposeful Work",
    },
    {
        title: "Modern Digital Ecosystem",
        description:
            "Leverage cutting-edge collaborative tools and streamlined virtual classroom technologies designed to empower teachers.",
        icon: Sparkles,
        badge: "Digital Innovation",
    },
];

export default async function CareersPage() {
    // Fetch active vacancies from Sanity
    let vacancies: SanityVacancy[] = [];
    try {
        vacancies = await client.fetch(vacanciesQuery);
    } catch (error) {
        console.error("Error fetching vacancies:", error);
    }

    const hasVacancies = vacancies.length > 0;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#001A00]/95 via-[#001A00] to-[#001A00] text-primary-foreground py-20 md:py-28 lg:py-32">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

                <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
                    {/* Eyebrow Tagline */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>CAREERS AT UTATU INTERNATIONAL</span>
                    </div>

                    {/* Primary Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white mb-6 leading-[1.15]">
                        Shape the future of <span className="text-secondary italic">learning.</span>
                    </h1>

                    {/* Supporting Value Proposition with TextGenerateEffect */}
                    <div className="max-w-3xl mx-auto mb-10 text-primary-foreground/90 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
                        <TextGenerateEffect
                            words={supportingValueProposition}
                        />
                    </div>

                    {/* Hero Action CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {hasVacancies ? (
                            <Button
                                size="lg"
                                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-secondary/20 transition-all w-full sm:w-auto"
                                asChild
                            >
                                <a href="#open-positions">
                                    View Open Positions ({vacancies.length})
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                        ) : (
                            <Button
                                size="lg"
                                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-secondary/20 transition-all w-full sm:w-auto"
                                asChild
                            >
                                <a href="#talent-network">
                                    Join Talent Network
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                        )}
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm px-8 py-6 text-base w-full sm:w-auto"
                            asChild
                        >
                            <a href="#perks">Explore Benefits</a>
                        </Button>
                    </div>

                    {/* Location & Model Pills */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span>Karen, Nairobi & Remote Kenya</span>
                        </div>
                        <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-secondary/40" />
                        <div className="flex items-center gap-2">
                            <Compass className="w-4 h-4 text-secondary" />
                            <span>Cambridge International Curriculum</span>
                        </div>
                        <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-secondary/40" />
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-secondary" />
                            <span>Collaborative Educator Community</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits / Perks Section */}
            <section id="perks" className="py-20 bg-muted/30 scroll-mt-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase tracking-wider">
                            Why Join Us
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                            Key Benefits & Educator Perks
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg">
                            We equip modern educators with the tools, freedom, and environment to inspire students while excelling in their professional journeys.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {perks.map((perk, index) => {
                            const IconComponent = perk.icon;
                            return (
                                <Card
                                    key={index}
                                    className="border border-border/60 bg-card hover:border-secondary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                                >
                                    <CardHeader className="space-y-3">
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="inline-block">
                                            <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-0.5 rounded-full">
                                                {perk.badge}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl font-heading text-primary pt-1">
                                            {perk.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                            {perk.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions Section (Dynamic from Sanity) */}
            {hasVacancies ? (
                <section id="open-positions" className="py-16 bg-background border-y border-border/50 scroll-mt-20">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-300/40">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>{vacancies.length} Open {vacancies.length === 1 ? "Position" : "Positions"}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                                Current Vacancies
                            </h2>
                            <p className="text-muted-foreground text-base sm:text-lg">
                                We&apos;re actively looking for talented educators to join our team. Apply directly or join our talent network.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {vacancies.map((vacancy) => (
                                <Card
                                    key={vacancy._id}
                                    className="border border-border/60 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                                >
                                    <CardHeader className="space-y-3">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-full">
                                                {vacancy.category}
                                            </span>
                                            <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-2.5 py-0.5 rounded-full">
                                                {vacancy.employmentType}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl font-heading text-primary">
                                            {vacancy.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                            {vacancy.shortDescription}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex-1 space-y-4">
                                        {/* Location & Deadline */}
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            {vacancy.location && (
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                                                    <span>{vacancy.location}</span>
                                                </div>
                                            )}
                                            {vacancy.closingDate && (
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                                                    <span>
                                                        Deadline: {new Date(vacancy.closingDate).toLocaleDateString("en-KE", {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Requirements */}
                                        {vacancy.requirements && vacancy.requirements.length > 0 && (
                                            <div className="space-y-2">
                                                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                                                    Key Requirements
                                                </h4>
                                                <ul className="space-y-1.5">
                                                    {vacancy.requirements.slice(0, 4).map((req, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                    {vacancy.requirements.length > 4 && (
                                                        <li className="text-xs text-muted-foreground pl-5.5">
                                                            +{vacancy.requirements.length - 4} more requirements
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </CardContent>

                                    <div className="px-6 pb-6 pt-2">
                                        <Button
                                            asChild
                                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                                        >
                                            <a href="#talent-network">
                                                Apply Now
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                /* No Vacancies Empty State */
                <section className="py-12 bg-background border-y border-border/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <Card className="relative overflow-hidden border border-secondary/30 bg-gradient-to-br from-secondary/5 via-card to-secondary/10 shadow-sm py-2">
                            {/* Decorative accent */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

                            <CardContent className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 p-6">
                                <div className="space-y-3 max-w-xl">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-300/40">
                                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                        <span>Vacancy Status</span>
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl font-bold font-heading text-primary">
                                        No current vacancies
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                        We don&apos;t have any open positions right now, but we&apos;re always looking for exceptional talent. Drop us your details below and we&apos;ll reach out when a matching role opens up.
                                    </CardDescription>
                                </div>

                                <div className="shrink-0">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 shadow-sm w-full md:w-auto"
                                    >
                                        <a href="#talent-network">
                                            Submit Details
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            )}

            {/* Talent Network Form (Client Component) */}
            <TalentNetworkForm />
        </div>
    );
}
