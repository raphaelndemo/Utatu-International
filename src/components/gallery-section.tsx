"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryItems = [
    {
        id: 1,
        title: "Family & Community Day",
        category: "Community",
        image: "/images/gallery/utatu-international-school-family-community-day.jpg",
    },
    {
        id: 2,
        title: "Nature Walk",
        category: "Outdoor",
        image: "/images/gallery/utatu-international-school-nature-walk-outdoor-education.jpg",
    },
    {
        id: 3,
        title: "Outdoor Learning",
        category: "Academics",
        image: "/images/gallery/utatu-international-school-outdoor-learning-students.jpg",
    },
    {
        id: 4,
        title: "Student Life",
        category: "Campus",
        image: "/images/gallery/utatu-international-school-outdoor-learning-student-smiling.jpg",
    },
    {
        id: 5,
        title: "Adventure & Camping",
        category: "Outdoor",
        image: "/images/Camping.webp",
    },
    {
        id: 6,
        title: "Strategic Thinking",
        category: "Club",
        image: "/images/Chess.webp",
    },
];

export function GallerySection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                            Life at Utatu
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-light font-heading text-primary">
                            — GALLERY
                        </h3>
                    </div>
                    <p className="hidden md:block text-muted-foreground max-w-xs text-sm">
                        Explore our vibrant community and the diverse activities that shape our students.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative group aspect-[4/3] overflow-hidden bg-muted"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="inline-block px-2 py-1 mb-2 text-xs font-medium tracking-wider text-white border border-white/30 rounded-full backdrop-blur-sm">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-medium font-heading text-white tracking-wide">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
