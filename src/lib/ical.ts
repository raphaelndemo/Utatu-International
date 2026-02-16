export interface CalendarEvent {
    id: string;
    title: string;
    date: Date;
    end?: Date;
    description?: string;
    location?: string;
    category: "Academic" | "Exams" | "Events" | "Holidays";
}

export async function fetchCalendarEvents(calendarId: string): Promise<CalendarEvent[]> {
    const ICS_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`;

    try {
        const response = await fetch(ICS_URL, { next: { revalidate: 60 } }); // Cache for 1 minute in dev, maybe 3600 in prod
        if (!response.ok) {
            console.error(`Failed to fetch ICS: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.text();
        const events = parseICS(data);

        if (events.length === 0) {
            console.warn(`Fetch successful but no events found in ICS for calendar: ${calendarId}. 
            Possible causes:
            1. Calendar is private (Make sure 'Make available to public' is checked).
            2. 'See all event details' is NOT selected in permission settings.
            3. Calendar has no future events.`);
            console.log("Raw ICS data snippet:", data.substring(0, 500)); // Log first 500 chars for debugging
        } else {
            console.log(`Successfully fetched ${events.length} events for calendar: ${calendarId}`);
        }

        return events;
    } catch (error) {
        console.error("Error fetching calendar events:", error);
        return [];
    }
}

function parseICS(data: string): CalendarEvent[] {
    const events: CalendarEvent[] = [];
    const lines = data.split(/\r\n|\n|\r/);

    let currentEvent: Partial<CalendarEvent> | null = null;
    let inEvent = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("BEGIN:VEVENT")) {
            inEvent = true;
            currentEvent = {};
            continue;
        }

        if (line.startsWith("END:VEVENT")) {
            inEvent = false;
            if (currentEvent && currentEvent.title && currentEvent.date) {
                // Assign default category or infer from summary/description
                // Simple heuristic: look for keywords
                let category: CalendarEvent["category"] = "Events";
                const text = (currentEvent.title + " " + (currentEvent.description || "")).toLowerCase();

                if (text.includes("exam") || text.includes("test")) category = "Exams";
                else if (text.includes("holiday") || text.includes("break") || text.includes("closed")) category = "Holidays";
                else if (text.includes("term") || text.includes("school") || text.includes("class")) category = "Academic";

                events.push({
                    ...currentEvent,
                    category,
                    id: currentEvent.id || Math.random().toString(36).substr(2, 9),
                } as CalendarEvent);
            }
            currentEvent = null;
            continue;
        }

        if (inEvent && currentEvent) {
            if (line.startsWith("SUMMARY:")) {
                currentEvent.title = line.substring(8);
            }
            else if (line.startsWith("DTSTART")) {
                // Handle DTSTART:20230101T120000Z or DTSTART;VALUE=DATE:20230101
                const value = line.substring(line.indexOf(":") + 1);
                currentEvent.date = parseICSDate(value);
            }
            else if (line.startsWith("DTEND")) {
                const value = line.substring(line.indexOf(":") + 1);
                currentEvent.end = parseICSDate(value);
            }
            else if (line.startsWith("DESCRIPTION:")) {
                currentEvent.description = line.substring(12);
            }
            else if (line.startsWith("LOCATION:")) {
                currentEvent.location = line.substring(9);
            }
            else if (line.startsWith("UID:")) {
                currentEvent.id = line.substring(4);
            }
        }
    }

    return events;
}

function parseICSDate(value: string): Date {
    // Format: YYYYMMDD or YYYYMMDDTHHMMSSZ
    const year = parseInt(value.substring(0, 4));
    const month = parseInt(value.substring(4, 6)) - 1;
    const day = parseInt(value.substring(6, 8));

    if (value.length > 8) {
        const hour = parseInt(value.substring(9, 11));
        const minute = parseInt(value.substring(11, 13));
        const second = parseInt(value.substring(13, 15));
        // Check for 'Z' indicating UTC
        if (value.endsWith('Z')) {
            return new Date(Date.UTC(year, month, day, hour, minute, second));
        }
        return new Date(year, month, day, hour, minute, second);
    }

    return new Date(year, month, day);
}
