"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const schools = [
        {
            title: "Special Needs Education",
            href: "/schools/special-needs-education",
            description: "Inclusive education for students with diverse needs.",
        },
        {
            title: "Foundation Stage",
            href: "/schools/foundation-stage",
            description: "Kindergarten 1-3. Building a strong foundation.",
        },
        {
            title: "Preparatory School",
            href: "/schools/preparatory-school",
            description: "Year 1-6. Nurturing young minds.",
        },
        {
            title: "Junior High School",
            href: "/schools/junior-high-school",
            description: "Year 7-9. Developing critical thinking.",
        },
        {
            title: "Senior High School",
            href: "/schools/senior-high-school",
            description: "Year 10-11. Preparing for the future.",
        },
        {
            title: "International Advanced School",
            href: "/schools/international-advanced-school",
            description: "Year 12-13. Advanced level studies.",
        },
    ];


    const about = [
        {
            title: "Who We Are",
            href: "/about#who-we-are",

        },
        {
            title: "Our Values",
            href: "/about#our-values",

        },
        {
            title: "Our Mission",
            href: "/about#our-mission",

        },
        {
            title: "Our Vision",
            href: "/about#our-vision",

        },
        {
            title: "Our Goals",
            href: "/about#our-goals",

        },
        {
            title: "Our Team",
            href: "/about#our-team",

        },
    ];
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold font-heading text-primary">
                        Utatu International
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {about.map((about) => (
                                            <li key={about.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={about.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {about.title}
                                                        </div>

                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Our Schools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {schools.map((school) => (
                                            <li key={school.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={school.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {school.title}
                                                        </div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            {school.description}
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        <Link href="/contact">Apply Now</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-4 mt-8">
                                <Link
                                    href="/"
                                    className="text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </Link>
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg font-medium text-muted-foreground">
                                        Our Schools
                                    </span>
                                    {schools.map((school) => (
                                        <Link
                                            key={school.title}
                                            href={school.href}
                                            className="pl-4 text-base"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {school.title}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                                <Button asChild className="mt-4 bg-secondary text-secondary-foreground">
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        Apply Now
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
