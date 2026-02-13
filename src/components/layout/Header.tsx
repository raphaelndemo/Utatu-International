"use client";

import Link from "next/link";
import Image from "next/image";
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
      description: "Equality and inclusivity in learning",
    },
    {
      title: "Foundation Stage",
      href: "/schools/foundation-stage",
      description: "Ages 3-5: Building Strong Foundations",
    },
    {
      title: "Preparatory School",
      href: "/schools/preparatory-school",
      description: "Year 1-6: A strong academic foundation",
    },
    {
      title: "Junior High School",
      href: "/schools/junior-high-school",
      description: "Year 7-9: A Well-Rounded Curriculum",
    },
    {
      title: "Senior High School",
      href: "/schools/senior-high-school",
      description: "Year 10-11: A Foundation for Global Success",
    },
    {
      title: "International Advanced School",
      href: "/schools/international-advanced-school",
      description: "Year 12-13: Your launchpad to University",
    },
  ];

  const about = [
    { title: "Who We Are", href: "/about#who-we-are" },
    { title: "Why Choose Us", href: "/about#why-choose-us" },
    { title: "Co-Curricular Activities", href: "/co-curricular-activities" },

  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 min-w-0">
          <Image
            src="/images/Logo_Utatu__Main.webp"
            alt="Utatu International Logo"
            width={150}
            height={50}
            className="h-8 sm:h-10 w-auto object-contain lg:h-12 flex-shrink-0"
            priority
            sizes="150px"
          />
          <span className="text-base sm:text-lg md:text-xl font-bold font-heading text-primary lg:text-2xl truncate">
            Utatu International
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
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
                  <ul className="grid w-[600px] gap-3 p-4 grid-cols-2">
                    {about.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block rounded-md p-3 text-sm font-medium transition-colors hover:bg-accent"
                          >
                            {item.title}
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
                  <ul className="grid w-[600px] gap-3 p-4 grid-cols-2">
                    {schools.map((school) => (
                      <li key={school.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={school.href}
                            className="block rounded-md p-3 transition-colors hover:bg-accent"
                          >
                            <div className="text-sm font-medium">
                              {school.title}
                            </div>
                            <p className="text-sm text-muted-foreground">
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
                <Link href="/fee-structure" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Fee structure
                  </NavigationMenuLink>
                </Link>
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

          <Button asChild className="bg-secondary text-secondary-foreground">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:w-[400px] flex flex-col p-0 border-l border-border/40">
              {/* Header with Logo */}
              <div className="p-6 border-b bg-muted/30">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <Image
                    src="/images/Logo_Utatu__Main.webp"
                    alt="Utatu Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="font-heading font-bold text-lg leading-none text-primary">Utatu International</span>
                </Link>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col py-6">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 text-lg font-heading font-bold text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                  >
                    Home
                  </Link>

                  <div className="py-2">
                    <div className="px-6 py-2">
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">About Us</h4>
                    </div>
                    {about.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-6 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors border-l-2 border-transparent hover:border-secondary ml-6"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <div className="py-2">
                    <div className="px-6 py-2">
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Our Schools</h4>
                    </div>
                    {schools.map((school) => (
                      <Link
                        key={school.title}
                        href={school.href}
                        className="block px-6 py-3 group hover:bg-muted transition-colors border-l-2 border-transparent hover:border-secondary ml-6"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="text-sm font-semibold group-hover:text-primary transition-colors">
                          {school.title}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                          {school.description}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/fee-structure"
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 text-lg font-heading font-bold text-primary hover:bg-secondary/10 hover:text-secondary transition-colors mt-2"
                  >
                    Fee Structure
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 text-lg font-heading font-bold text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t bg-muted/30">
                <Button asChild size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg">
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
