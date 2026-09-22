"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
    Briefcase,
    Laptop,
    GraduationCap,
    HeartHandshake,
    Sparkles,
    CheckCircle2,
    AlertCircle,
    Loader2,
    ArrowRight,
    MapPin,
    Users,
    Compass,
    Mail,
    Send,
} from "lucide-react";

export default function CareersPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        roleInterest: "",
        experienceYears: "",
        curriculumExperience: "",
        portfolioOrResumeUrl: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        setStatusMessage("");

        try {
            const response = await fetch("/api/careers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setStatusMessage(
                    data.message ||
                    "Thank you for submitting your application. We will reach out when a relevant opportunity arises!"
                );
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    roleInterest: "",
                    experienceYears: "",
                    curriculumExperience: "",
                    portfolioOrResumeUrl: "",
                    message: "",
                });
            } else {
                setStatus("error");
                setStatusMessage(data.error || "Failed to submit application. Please try again.");
            }
        } catch {
            setStatus("error");
            setStatusMessage("A network or server error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

    const roleOptions = [
        "Cambridge Primary Educator (Years 1 - 6)",
        "Cambridge Lower Secondary / Checkpoint Specialist (Years 7 - 9)",
        "Cambridge IGCSE / Upper Secondary Teacher",
        "Cambridge International A-Level Educator",
        "Special Needs Education (SEN / Remedial Specialist)",
        "Early Years / Foundation Stage Teacher (Ages 3 - 5)",
        "Student Counselor / Academic Mentor",
        "Curriculum & Co-Curricular Facilitator",
        "Administrative & Operational Support",
        "Other / General Inquiry",
    ];

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

            {/* Vacancy Status / General Application Callout */}
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

            {/* Form Section: Join Our Talent Network */}
            <section id="talent-network" className="py-20 bg-muted/20 scroll-mt-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary">
                            Join Our Talent Network
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                            Submit your general application below to get considered for upcoming hybrid teaching and support roles.
                        </p>
                    </div>

                    <Card className="border border-border/80 shadow-md bg-card">
                        <CardHeader className="border-b border-border/40 pb-6">
                            <CardTitle className="text-xl font-heading text-primary">
                                General Application Form
                            </CardTitle>
                            <CardDescription>
                                Share your background, subjects of expertise, and teaching credentials.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="pt-6">
                            {status === "success" && (
                                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg flex items-start gap-3 border border-green-200">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-green-600" />
                                    <div>
                                        <h4 className="font-semibold text-green-900">Application Received</h4>
                                        <p className="text-sm mt-0.5">{statusMessage}</p>
                                    </div>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg flex items-start gap-3 border border-red-200">
                                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-red-600" />
                                    <div>
                                        <h4 className="font-semibold text-red-900">Submission Error</h4>
                                        <p className="text-sm mt-0.5">{statusMessage}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            placeholder="e.g. Jane Doe"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="e.g. jane.doe@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Phone & Role Interest */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                            Phone / WhatsApp Number
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            placeholder="e.g. +254 700 000 000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="roleInterest" className="text-sm font-medium text-foreground">
                                            Primary Role of Interest <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="roleInterest"
                                            name="roleInterest"
                                            className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                            value={formData.roleInterest}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="" disabled>
                                                Select a role or area...
                                            </option>
                                            {roleOptions.map((role) => (
                                                <option key={role} value={role}>
                                                    {role}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Experience & Curriculum */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="experienceYears" className="text-sm font-medium text-foreground">
                                            Years of Teaching / Professional Experience
                                        </label>
                                        <select
                                            id="experienceYears"
                                            name="experienceYears"
                                            className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                            value={formData.experienceYears}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select experience level...</option>
                                            <option value="0-1 years">0 - 1 years (Early Career)</option>
                                            <option value="2-4 years">2 - 4 years</option>
                                            <option value="5-8 years">5 - 8 years</option>
                                            <option value="9+ years">9+ years (Senior Educator / Specialist)</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="curriculumExperience" className="text-sm font-medium text-foreground">
                                            Curriculum Background
                                        </label>
                                        <Input
                                            id="curriculumExperience"
                                            name="curriculumExperience"
                                            placeholder="e.g. Cambridge (CAIE), CBC, British National, IB"
                                            value={formData.curriculumExperience}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Portfolio / LinkedIn / Resume Link */}
                                <div className="space-y-2">
                                    <label htmlFor="portfolioOrResumeUrl" className="text-sm font-medium text-foreground">
                                        Resume / LinkedIn / Portfolio Link (Google Drive, LinkedIn, etc.)
                                    </label>
                                    <Input
                                        id="portfolioOrResumeUrl"
                                        name="portfolioOrResumeUrl"
                                        type="url"
                                        placeholder="https://linkedin.com/in/... or Google Drive link"
                                        value={formData.portfolioOrResumeUrl}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        If linking a Google Drive file, please ensure permissions are set to &quot;Anyone with the link can view&quot;.
                                    </p>
                                </div>

                                {/* Cover Note / Introduction */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Brief Introduction & Educational Philosophy
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your background, subjects you specialize in, and what excites you about hybrid Cambridge education..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Submit Button */}
                                <CardFooter className="flex flex-col gap-4 px-0 pt-4 pb-0">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6 text-base"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting Application...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Submit General Application
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-center text-xs text-muted-foreground">
                                        By submitting, your details will be retained in our educator database for consideration as new hybrid and on-site teaching opportunities become available.
                                    </p>
                                </CardFooter>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Direct Contact Inquiries */}
                    <div className="mt-12 text-center text-sm text-muted-foreground">
                        Have a specific query regarding academic partnerships or careers? Reach out directly to{" "}
                        <a
                            href="mailto:admin@utatuinternational.com"
                            className="text-secondary hover:underline font-medium"
                        >
                            admin@utatuinternational.com
                        </a>{" "}
                        or learn more{" "}
                        <Link href="/about" className="text-primary hover:underline font-medium">
                            About Utatu International
                        </Link>
                        .
                    </div>
                </div>
            </section>
        </div>
    );
}
