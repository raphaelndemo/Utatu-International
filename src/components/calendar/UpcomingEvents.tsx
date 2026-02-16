"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
    id: string;
    title: string;
    date: Date;
    category: "Academic" | "Exams" | "Events" | "Holidays";
    description?: string;
    end?: Date;
}

interface UpcomingEventsProps {
    events: Event[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
    // Sort events by date and take the next 5
    const upcomingEvents = events
        .filter(event => {
            const now = new Date();
            now.setHours(0, 0, 0, 0);

            const end = event.end ? new Date(event.end) : new Date(event.date);
            // If it's a single day event, end date is same as start date (effectively spans 1 day)
            // If end date exists, check if end date is in future or today
            // Note: ICS end date is exclusive for all-day events, so if ends Feb 24, last day is Feb 23.
            return end >= now;
        }) // Only future or ongoing events
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .slice(0, 5);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-heading text-primary">Upcoming Events</h3>
                <Button variant="outline" size="sm">Download Term Dates PDF</Button>
            </div>

            <div className="divide-y rounded-xl border bg-white shadow-sm">
                {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-4 p-4 transition-colors hover:bg-muted/50">
                        <div className="flex flex-col items-center justify-center rounded-lg border bg-muted/30 p-2 min-w-[60px]">
                            <span className="text-xs font-bold text-muted-foreground uppercase">{event.date.toLocaleString('default', { month: 'short' })}</span>
                            <span className="text-xl font-bold text-primary">{event.date.getDate()}</span>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-semibold text-foreground">{event.title}</h4>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>All Day</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    <span>Utatu Main Campus</span>
                                </div>
                            </div>
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${event.category === "Academic" ? "bg-blue-100 text-blue-700" :
                                event.category === "Exams" ? "bg-red-100 text-red-700" :
                                    event.category === "Events" ? "bg-green-100 text-green-700" :
                                        "bg-amber-100 text-amber-700"
                                }`}>
                                {event.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
