import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from 'next';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { FaqSection } from "@/components/faq-section";

export const metadata: Metadata = {
    title: "Affordable Cambridge School Fees in Kenya | Utatu International School",
    description: "Explore affordable Cambridge school fees with Utatu International School. Flexible hybrid learning, transparent pricing, and low-cost IGCSE programs designed for modern families.",
    alternates: {
        canonical: "https://www.utatuinternational.com/cambridge-school-fees-kenya"
    }
};

export default function FeeStructure() {
    const feeStructureFaqs = [
        {
            question: "What makes Cambridge education affordable at Utatu?",
            answer: "By utilizing a flexible hybrid learning model, we significantly reduce overhead costs like daily transportation and full-time physical infrastructure. These savings are passed directly to parents."
        },
        {
            question: "How does hybrid learning reduce school fees?",
            answer: "It blends the best of both worlds. Students learn foundational concepts online reducing daily facility use, while our optional physical sessions provide necessary social and practical engagement."
        },
        {
            question: "Are there additional hidden costs?",
            answer: "No. We pride ourselves on a transparent pricing structure. All major costs are outlined upfront, including tuition, admission, and standard lab fees."
        },
        {
            question: "Do you offer flexible payment plans?",
            answer: "Yes. We offer a pay-per-term structure where fees can be paid in three manageable instalments: 50% within two weeks, 30% by mid-term, and 20% before exams."
        },
        {
            question: "Is this suitable for homeschooling families?",
            answer: "Absolutely. Our program is heavily tailored for families seeking a structured yet adaptable homeschooling Cambridge curriculum in Kenya."
        }
    ];

    const fees = [
        {
            grade: "Early Years (KG)",
            tuition: "54,000",
        },
        {
            grade: "Year 1, 2 & 3",
            tuition: "60,000",
        },
        {
            grade: "Year 4, 5 & 6",
            tuition: "65,000",
        },
        {
            grade: "Year 7, 8 & 9",
            tuition: "75,000",
        },
        {
            grade: "Year 10 & 11",
            tuition: "90,000",
        },
        {
            grade: "Year 12 & 13",
            tuition: "130,000",
        },
    ];

    const additionalFees = [
        {
            name: "Admission fees",
            amount: "Admission fee of 3,500 is upon entry only (paid once)",
        },
        {
            name: "External exam ",
            amount: "(to be confirmed annually)",
        },
    ];

    const labFees = [
        {
            name: "Preparatory School",
            amount: "6,000",
        },
        {
            name: "Junior High School",
            amount: "8,000",
        },
        {
            name: "Senior High School",
            amount: "4,000 per subject",
        },
        {
            name: "Activity fees",
            amount: "(to be confirmed)",
        },
        {
            name: "Annual camp fee",
            amount: "Depends on location (optional payment)",
        },
    ];

    return (
        <>
            <div className="container py-12 md:py-20">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary">
                        Fee Structure – Affordable Cambridge School Fees
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        We believe that every child in Kenya deserves access to a world-class <Link href="/" className="text-secondary hover:underline">Cambridge curriculum</Link>. Our fee structure is carefully crafted to provide one of the most <Link href="/contact" className="text-secondary hover:underline">affordable Cambridge school fees</Link> through a flexible <Link href="/schools" className="text-secondary hover:underline">hybrid learning</Link> model (online and optional physical sessions). We eliminate unnecessary expenses, making quality education accessible and transparent for modern families.
                    </p>
                    <div className="pt-4">
                        <a
                            href="/docs/Utatu%20Fee%20Structure%20.pdf"
                            download="Utatu-Fee-Structure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" x2="12" y1="15" y2="3" />
                            </svg>
                            Download Fee Structure PDF
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Fees Table */}
                    <div className="space-y-8">
                        <p className="font-medium text-lg text-primary">
                            Our fee structure is designed to provide one of the most affordable Cambridge education options through a flexible hybrid model.
                        </p>
                        <div className="border rounded-lg overflow-hidden overflow-x-auto">
                            <Table>
                                <TableHeader className="bg-muted">
                                    <TableRow>
                                        <TableHead className="text-base sm:text-lg lg:text-xl font-bold text-primary font-heading w-1/2">
                                            Grade/Year
                                        </TableHead>
                                        <TableHead className="text-base sm:text-lg lg:text-xl font-bold text-primary font-heading">
                                            Tuition Fees (Ksh.)
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {fees.map((fee) => (
                                        <TableRow key={fee.grade} className="hover:bg-muted/50">
                                            <TableCell className="text-sm sm:text-base lg:text-lg font-medium py-3 sm:py-4">
                                                {fee.grade}
                                            </TableCell>
                                            <TableCell className="text-sm sm:text-base lg:text-lg py-3 sm:py-4">{fee.tuition}</TableCell>
                                        </TableRow>
                                    ))}

                                    {/* Additional Fees */}
                                    {additionalFees.map((fee) => (
                                        <TableRow key={fee.name} className="hover:bg-muted/50">
                                            <TableCell className="text-sm sm:text-base lg:text-lg font-medium py-3 sm:py-4">
                                                {fee.name}
                                            </TableCell>
                                            <TableCell className="text-sm sm:text-base lg:text-lg py-3 sm:py-4">{fee.amount}</TableCell>
                                        </TableRow>
                                    ))}

                                    {/* Lab Fees Section Header */}
                                    <TableRow className="bg-muted/30">
                                        <TableCell
                                            colSpan={2}
                                            className="text-base sm:text-lg font-bold text-primary py-3 sm:py-4"
                                        >
                                            Lab Fees:
                                        </TableCell>
                                    </TableRow>

                                    {labFees.map((fee) => (
                                        <TableRow key={fee.name} className="hover:bg-muted/50">
                                            <TableCell className="text-sm sm:text-base lg:text-lg font-medium py-3 sm:py-4">
                                                {fee.name}
                                            </TableCell>
                                            <TableCell className="text-sm sm:text-base lg:text-lg py-3 sm:py-4">{fee.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* Right Column: Image and Payment Details */}
                    <div className="space-y-8">
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/focus.webp"
                                alt="affordable Cambridge school students in Kenya classroom"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary mb-4">
                                    Why Our Cambridge Program Is More Affordable
                                </h3>
                                <ul className="list-disc list-outside space-y-2 pl-5 text-muted-foreground text-base sm:text-lg mb-8">
                                    <li><strong className="text-foreground">Hybrid learning reduces cost</strong> - We combine online efficiency with high-impact physical sessions.</li>
                                    <li><strong className="text-foreground">No daily transport requirements</strong> - Save on commuting time and transportation fees.</li>
                                    <li><strong className="text-foreground">Flexible scheduling</strong> - Designed to fit seamlessly into modern family lifestyles.</li>
                                    <li><strong className="text-foreground">Pay-per-term structure</strong> - Manageable instalments with no hidden charges.</li>
                                    <li><strong className="text-foreground">Efficient delivery model</strong> - Focused entirely on academic and personal excellence.</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-primary/10">
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary mb-4">
                                    Payment Plan
                                </h3>
                                <ol className="list-decimal list-outside space-y-2 pl-5 text-muted-foreground text-base sm:text-lg">
                                    <li>
                                        Pay lump sum within the first week and get a 5% discount.
                                    </li>
                                    <li>Sibling discount 10%</li>
                                    <li>
                                        Introduce new student and get 10% discount (terms and
                                        conditions apply)
                                    </li>
                                </ol>
                            </div>

                            <ul className="list-disc list-outside space-y-2 pl-5 text-muted-foreground text-base sm:text-lg pt-4">
                                <li>
                                    <span className="font-semibold text-foreground">First Installment:</span> 50% – paid within the first two weeks of the term
                                </li>
                                <li>
                                    <span className="font-semibold text-foreground">Second Installment</span> 30% – paid by mid term
                                </li>
                                <li>
                                    <span className="font-semibold text-foreground">Third Installment</span> 20% – paid before exams commences
                                </li>
                            </ul>

                            <div className="pt-4 border-t border-primary/10">
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary mb-4">
                                    Payment details:
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-foreground/80 tracking-wide uppercase text-sm mb-1">M-PESA</h4>
                                        <p className="text-base sm:text-lg font-medium break-words">
                                            Paybill no. <span className="font-bold text-foreground">542542</span> | Account no. <span className="font-bold text-foreground">636747</span>
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-primary/10">
                                        <h4 className="font-bold text-foreground/80 tracking-wide uppercase text-sm mb-1">BANKS</h4>
                                        <div className="text-base sm:text-lg font-medium break-words">
                                            <p className="text-primary font-bold">I&amp;M Bank</p>
                                            <p className="mt-1">Account Number: <span className="font-bold text-foreground">03503670976151</span></p>
                                            <p>Account Name: <span className="font-bold text-foreground">UTATU STEM INTERNATIONAL</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container py-12 md:py-16">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-muted/50 border border-primary/10 p-8 md:p-12 rounded-xl text-center space-y-6">
                        <h3 className="text-2xl md:text-3xl font-medium font-heading tracking-wide text-primary">Ready to join our community?</h3>
                        <p className="text-muted-foreground text-lg">
                            We welcome families from all backgrounds to join the Utatu International family.
                        </p>
                        <Link 
                            href="/admission" 
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-md h-12 px-10 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:-translate-y-0.5 font-bold"
                        >
                            Admission
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FaqSection faqs={feeStructureFaqs} />

            {/* Structured Data FAQ Schema */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What makes Cambridge education affordable at Utatu?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "By utilizing a flexible hybrid learning model, we significantly reduce overhead costs like daily transportation and full-time physical infrastructure. These savings are passed directly to parents."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does hybrid learning reduce school fees?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "It blends the best of both worlds. Students learn foundational concepts online reducing daily facility use, while our optional physical sessions provide necessary social and practical engagement."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are there additional hidden costs?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. We pride ourselves on a transparent pricing structure. All major costs are outlined upfront, including tuition, admission, and standard lab fees."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer flexible payment plans?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We offer a pay-per-term structure where fees can be paid in three manageable instalments: 50% within two weeks, 30% by mid-term, and 20% before exams."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is this suitable for homeschooling families?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. Our program is heavily tailored for families seeking a structured yet adaptable homeschooling Cambridge curriculum in Kenya."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
