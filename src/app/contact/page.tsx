"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("An unexpected error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="container py-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">Contact Us</h1>
                    <p className="text-lg text-muted-foreground">
                        Thank you for visiting our website. Whether you have questions about our programs, need guidance on admissions, or want to schedule a visit, we’re here to assist you. If you are interested in enrolling your child at Utatu International School, kindly fill out the form below, and our admissions team will get in touch with you shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-heading text-primary">Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Visit Us</h3>
                                        <p className="text-muted-foreground">
                                            Karen Triangle Estate<br />
                                            Karen, Nairobi, Kenya
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Call Us</h3>
                                        <p className="text-muted-foreground">+254 758 758 784</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Email Us</h3>
                                        <p className="text-muted-foreground">admin@utatuinternational.com</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold font-heading text-primary">Send us a Message</h2>
                            <p className="text-muted-foreground">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </p>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {status === "success" && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-md flex items-start gap-3 border border-green-200">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-medium">Message sent successfully!</h4>
                                        <p className="text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                                    </div>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-50 text-red-700 rounded-md flex items-start gap-3 border border-red-200">
                                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-medium">Error sending message</h4>
                                        <p className="text-sm">{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <Input id="firstName" placeholder="first name" value={formData.firstName} onChange={handleChange} required disabled={isSubmitting} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <Input id="lastName" placeholder="last name" value={formData.lastName} onChange={handleChange} required disabled={isSubmitting} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="your email address" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" placeholder="Admissions Inquiry" value={formData.subject} onChange={handleChange} required disabled={isSubmitting} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" value={formData.message} onChange={handleChange} required disabled={isSubmitting} />
                            </div>
                            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="mt-20 w-full h-[450px] bg-muted rounded-lg overflow-hidden shadow-lg">
                <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Karen%20Triangle%20Estate%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full h-full"
                    title="Utatu International School Location"
                ></iframe>
            </div>
        </div>
    );
}
