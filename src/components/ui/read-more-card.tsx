"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadMoreCardProps {
    title: string;
    preview: React.ReactNode;
    children: React.ReactNode;
}

export function ReadMoreCard({ title, preview, children }: ReadMoreCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 mb-6 overflow-hidden not-prose">
            <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold font-heading text-primary mb-3">
                    {title}
                </h3>
                <div className="text-slate-600 leading-relaxed">
                    {preview}
                </div>

                {isOpen && (
                    <div className="mt-6 pt-6 border-t border-slate-100 prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-primary prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-slate-700 prose-p:text-slate-600 prose-p:leading-loose prose-li:text-slate-600 prose-li:marker:text-secondary prose-li:leading-relaxed prose-strong:text-slate-900 animate-in fade-in duration-300">
                        {children}
                    </div>
                )}

                <Button
                    variant="ghost"
                    className="mt-6 p-0 h-auto font-medium text-secondary hover:text-secondary/80 hover:bg-transparent"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <span className="flex items-center gap-1">
                            Read Less <ChevronUp className="h-4 w-4" />
                        </span>
                    ) : (
                        <span className="flex items-center gap-1">
                            Read More <ChevronDown className="h-4 w-4" />
                        </span>
                    )}
                </Button>
            </div>
        </div>
    );
}
