"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ClubCardProps {
    title: string;
    description: string;
    image: string;
}

export function ClubCard({ title, description, image }: ClubCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="overflow-hidden flex flex-col h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardHeader className="pb-2">
                <h3 className="text-xl font-bold font-heading text-primary line-clamp-2">
                    {title}
                </h3>
            </CardHeader>
            <CardContent className="flex-1 pb-2">
                <div
                    className={cn(
                        "text-muted-foreground text-sm leading-relaxed transition-all duration-300 relative",
                        !isExpanded && "line-clamp-3"
                    )}
                >
                    {description}
                </div>
            </CardContent>
            <CardFooter className="pt-0">
                <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto font-medium text-secondary hover:text-secondary/80 hover:bg-transparent"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? (
                        <span className="flex items-center gap-1">
                            Read Less <ChevronUp className="h-3 w-3" />
                        </span>
                    ) : (
                        <span className="flex items-center gap-1">
                            Read More <ChevronDown className="h-3 w-3" />
                        </span>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
