"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarControlsProps {
    currentDate: Date;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    filter: string;
    onFilterChange: (filter: string) => void;
}

const filters = ["All", "Academic", "Exams", "Events", "Holidays"];

export function CalendarControls({
    currentDate,
    onPrevMonth,
    onNextMonth,
    filter,
    onFilterChange,
}: CalendarControlsProps) {
    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    return (
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                    <Button
                        key={f}
                        variant={filter === f ? "default" : "outline"}
                        onClick={() => onFilterChange(f)}
                        className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${filter === f
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        size="sm"
                    >
                        {f}
                    </Button>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4 bg-white/50 p-1 rounded-lg border">
                <Button variant="ghost" size="icon" onClick={onPrevMonth} className="h-8 w-8 hover:bg-white">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="min-w-[140px] text-center font-heading font-semibold text-lg">
                    {monthName} {year}
                </div>
                <Button variant="ghost" size="icon" onClick={onNextMonth} className="h-8 w-8 hover:bg-white">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
