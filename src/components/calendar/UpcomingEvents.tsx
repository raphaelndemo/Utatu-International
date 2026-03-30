"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

            <div className="space-y-6">
                {upcomingEvents.map((event) => (
                    <Card key={event.id} className="flex overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-20 bg-primary text-primary-foreground flex flex-col items-center justify-center p-2 text-center shrink-0">
                            <span className="text-2xl font-bold">{event.date.getDate()}</span>
                            <span className="text-sm uppercase">{event.date.toLocaleString('default', { month: 'short' })}</span>
                        </div>
                        <div className="flex-1 p-4">
                            <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                            <div className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                                <Clock className="h-3 w-3" /> All Day
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                                <MapPin className="h-3 w-3" /> Utatu Main Campus
                            </div>
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${event.category === "Academic" ? "bg-blue-100 text-blue-700" :
                                event.category === "Exams" ? "bg-red-100 text-red-700" :
                                    event.category === "Events" ? "bg-green-100 text-green-700" :
                                        "bg-amber-100 text-amber-700"
                                }`}>
                                {event.category}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
