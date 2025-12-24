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
    { title: "Our Values", href: "/about#our-values" },
    { title: "Our Mission", href: "/about#our-mission" },
    { title: "Our Vision", href: "/about#our-vision" },
    { title: "Our Goals", href: "/about#our-goals" },
    { title: "Our Team", href: "/about#our-team" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Logo_Utatu__Main.png"
            alt="Utatu International Logo"
            width={150}
            height={50}
            className="h-10 w-auto object-contain lg:h-12"
          />
          <span className="text-xl font-bold font-heading text-primary lg:text-2xl">
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

            <SheetContent side="right">
              <div className="mt-8 flex flex-col gap-6">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">About Us</p>
                  <div className="space-y-2">
                    {about.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="pl-4 block text-sm hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Our Schools</p>
                  <div className="space-y-2">
                    {schools.map((school) => (
                      <Link
                        key={school.title}
                        href={school.href}
                        className="pl-4 block group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                          {school.title}
                        </div>
                        <p className="text-xs text-muted-foreground pl-4 mt-1">
                          {school.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/fee-structure" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium hover:text-primary transition-colors"
                >
                  Fee structure
                </Link>

                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>

                <Button asChild className="mt-2 bg-secondary text-secondary-foreground">
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
