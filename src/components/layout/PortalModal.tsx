"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { GraduationCap, UserCog } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function PortalModal() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-foreground hover:text-primary">
                    Portal
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="flex flex-col items-center space-y-4">
                    <Image
                        src="/images/Logo_Utatu__Main.webp"
                        alt="Utatu Logo"
                        width={100}
                        height={100}
                        className="h-16 w-auto object-contain"
                    />
                    <div className="space-y-1 text-center">
                        <DialogTitle className="text-2xl font-heading text-primary">Utatu Portal Login</DialogTitle>
                        <DialogDescription>
                            Select your portal or login below
                        </DialogDescription>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4 py-2">
                    <Link href="#" className="group relative flex flex-col items-center justify-center gap-2 border bg-popover p-4 transition-all hover:border-primary hover:bg-muted/50" onClick={() => setOpen(false)}>
                        <div className="bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium">Student</span>
                    </Link>

                    <Link href="#" className="group relative flex flex-col items-center justify-center gap-2 border bg-popover p-4 transition-all hover:border-primary hover:bg-muted/50" onClick={() => setOpen(false)}>
                        <div className="bg-secondary/10 p-3 group-hover:bg-secondary/20 transition-colors">
                            <UserCog className="h-6 w-6 text-secondary" />
                        </div>
                        <span className="text-sm font-medium">Staff / Teacher</span>
                    </Link>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or login with
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="space-y-1">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                Username or Email
                            </label>
                            <Input id="email" placeholder="name@example.com" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                Password
                            </label>
                            <Input id="password" placeholder="••••••••" type="password" autoComplete="current-password" />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Sign In
                        </Button>
                    </div>

                    <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-50 border-gray-300" type="button">
                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Sign in with Google
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
