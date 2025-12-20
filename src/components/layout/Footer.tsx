import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-heading">Utatu International</h3>
                        <p className="text-primary-foreground/80">
                            Providing world-class Cambridge education in Kenya. Nurturing the leaders of tomorrow.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-secondary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/schools/foundation-stage" className="hover:text-secondary transition-colors">
                                    Foundation Stage
                                </Link>
                            </li>
                            <li>
                                <Link href="/schools/preparatory-school" className="hover:text-secondary transition-colors">
                                    Preparatory School
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-secondary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                                <span>Karen Triangle Estate, Karen, Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                                <a href="tel:+254758758784" className="hover:text-secondary transition-colors">
                                    +254 758 758 784
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                                <a href="mailto:admin@utatuinternational.com" className="hover:text-secondary transition-colors">
                                    admin@utatuinternational.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} Utatu International School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
