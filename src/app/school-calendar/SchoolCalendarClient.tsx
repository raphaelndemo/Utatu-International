"use client";

import { CalendarControls } from "@/components/calendar/CalendarControls";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { UpcomingEvents } from "@/components/calendar/UpcomingEvents";
import { useState } from "react";
import { CalendarEvent } from "@/lib/ical";

export function SchoolCalendarClient({ events }: { events: CalendarEvent[] }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [filter, setFilter] = useState("All");

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Filter events for Grid (Month view)
    // The grid component handles day filtering, but we pass the raw list

    return (
        <div className="container py-12 md:py-24 space-y-12">
            {/* Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                        Academic Year {new Date().getFullYear()}-{new Date().getFullYear() + 1}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-light font-heading text-primary">
                        School Calendar
                    </h1>
                </div>
                <p className="text-muted-foreground text-lg">
                    Stay updated with term dates, exams, and important school events.
                </p>
            </div>

            {/* Calendar Section */}
            <div className="space-y-6">
                <CalendarControls
                    currentDate={currentDate}
                    onPrevMonth={handlePrevMonth}
                    onNextMonth={handleNextMonth}
                    filter={filter}
                    onFilterChange={setFilter}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <CalendarGrid
                            currentDate={currentDate}
                            // @ts-ignore
                            events={events} // Pass fetched events
                            filter={filter}
                        />
                    </div>
                    <div className="lg:col-span-1">
                        {/* @ts-ignore */}
                        <UpcomingEvents events={events} />
                    </div>
                </div>
            </div>
        </div>
    );
}
