import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function FeeStructure() {
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
            tuition: "88,000",
        },
        {
            grade: "Year 12 & 13",
            tuition: "120,000",
        },
    ];

    const additionalFees = [
        {
            name: "Admission fees",
            amount: "Admission fee of 3,500 is upon entry only (paid once)",
        },
        {
            name: "External exam and GL",
            amount: "(to be confirmed annually)",
        },
    ];

    const labFees = [
        {
            name: "Preparatory School",
            amount: "4,000",
        },
        {
            name: "Junior High School",
            amount: "6,000",
        },
        {
            name: "Senior High School",
            amount: "2,000 per subject",
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
        <div className="container py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-primary">
                    Education Within Reach
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    We believe that every child deserves a quality education. Our Cambridge fee structure is carefully crafted to eliminate unnecessary expenses, making it easier for families to invest in their child’s future.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Column: Fees Table */}
                <div className="space-y-8">
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
                            src="/images/focus.jpg"
                            alt="Parent and child interaction"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
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

                        <div className="pt-4 border-t">
                            <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary mb-2">
                                Payment details:
                            </h3>
                            <p className="text-base sm:text-lg lg:text-xl font-medium break-words">
                                Paybill no. <span className="font-bold text-foreground">542542</span> | Account no. <span className="font-bold text-foreground">636747</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
