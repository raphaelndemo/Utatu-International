"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
    {
        name: "John Doe",
        role: "Principal",
        image: "/images/profile photo.webp",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Jane Smith",
        role: "Head of Academics",
        image: "/images/profile photo.webp",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Michael Brown",
        role: "Sports Coordinator",
        image: "/images/profile photo.webp",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Sarah Wilson",
        role: "Guidance Counselor",
        image: "/images/profile photo.webp",
        linkedin: "https://www.linkedin.com/",
    },
];

export function TeamSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
                        Meet our team
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Meet our exceptional team at Utatu International! Comprising diverse talents and expertise, we are a dedicated group committed to delivering excellence in every aspect of education.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-background overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Button size="icon" variant="secondary" className="rounded-full" asChild>
                                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="w-5 h-5 text-primary" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="p-6 text-center space-y-1">
                                <h3 className="text-xl font-bold font-heading text-primary">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-muted-foreground font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
