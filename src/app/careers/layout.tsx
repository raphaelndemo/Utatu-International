import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at Utatu International | Join Our Dynamic Team",
    description:
        "Join a dynamic team of educators pioneering a flexible, hybrid Cambridge education model in Kenya. Thrive in an environment that values professional freedom, modern pedagogy, and student-first impact.",
    openGraph: {
        title: "Careers at Utatu International | Shape the Future of Learning",
        description:
            "Explore hybrid teaching and support opportunities at Utatu International School in Nairobi, Kenya. Join our talent network today.",
        url: "https://www.utatuinternational.com/careers",
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
