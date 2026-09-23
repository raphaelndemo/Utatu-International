"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
    CheckCircle2,
    AlertCircle,
    Loader2,
    Send,
} from "lucide-react";

export function TalentNetworkForm() {
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
    );
}
