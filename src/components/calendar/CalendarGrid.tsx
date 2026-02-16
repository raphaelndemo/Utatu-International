"use client";

import { cn } from "@/lib/utils";

interface Event {
    id: string;
    title: string;
    date: Date; // Keep as Date object for comparison
    end?: Date;
    category: "Academic" | "Exams" | "Events" | "Holidays";
    color?: string;
}

interface CalendarGridProps {
    currentDate: Date;
    events: Event[];
    filter: string;
}

export function CalendarGrid({ currentDate, events, filter }: CalendarGridProps) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Days in month
    const daysInMonth = lastDay.getDate();

    // Day of week the month starts on (0 = Sunday, 1 = Monday, ...)
    const startDayOfWeek = firstDay.getDay();

    // Create array of days
    const days = [];
    // Add padding for previous month
    for (let i = 0; i < startDayOfWeek; i++) {
        days.push(null);
    }
    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(year, month, i));
    }

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Filter events
    const filteredEvents = events.filter((event) =>
        filter === "All" || event.category === filter
    );

    const getEventsForDay = (date: Date) => {
        return filteredEvents.filter((event) => {
            const eventStart = new Date(event.date);
            eventStart.setHours(0, 0, 0, 0);

            // If end date exists, use it. Otherwise assume 1 day duration.
            const eventEnd = event.end ? new Date(event.end) : new Date(eventStart);
            if (!event.end) {
                eventEnd.setDate(eventEnd.getDate() + 1); // 1 day event ends next day
            }
            eventEnd.setHours(0, 0, 0, 0);

            const checkDate = new Date(date);
            checkDate.setHours(0, 0, 0, 0);

            return checkDate >= eventStart && checkDate < eventEnd;
        });
    };

    return (
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-7 border-b bg-muted/40">
                {weekDays.map((day) => (
                    <div key={day} className="py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {day}
                    </div>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 auto-rows-[minmax(100px,auto)] divide-x divide-y">
                {days.map((date, index) => {
                    if (!date) {
                        return <div key={`empty-${index}`} className="bg-muted/5 p-2" />;
                    }

                    const dayEvents = getEventsForDay(date);
                    const isToday = new Date().toDateString() === date.toDateString();

                    return (
                        <div key={date.toISOString()} className={cn("relative p-2 transition-colors hover:bg-muted/5", isToday && "bg-primary/5")}>
                            <span className={cn("flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium", isToday ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>
                                {date.getDate()}
                            </span>

                            <div className="mt-2 space-y-1">
                                {dayEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className={cn(
                                            "cursor-pointer truncate rounded px-1.5 py-0.5 text-[10px] font-medium text-white shadow-sm transition-opacity hover:opacity-90",
                                            event.category === "Academic" && "bg-blue-500",
                                            event.category === "Exams" && "bg-red-500",
                                            event.category === "Events" && "bg-green-500",
                                            event.category === "Holidays" && "bg-amber-500",
                                        )}
                                        title={event.title}
                                    >
                                        {event.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
