
// Copy of logic from src/lib/ical.ts to verify parsing
async function fetchCalendarEvents(calendarId: string) {
    const ICS_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`;
    console.log(`Fetching from: ${ICS_URL}`);

    try {
        const response = await fetch(ICS_URL, { cache: 'no-store' });
        if (!response.ok) {
            console.error(`Failed to fetch ICS: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.text();
        console.log(`Fetched ${data.length} bytes`);
        console.log("--- START DATA SNIPPET ---");
        console.log(data.substring(0, 500));
        console.log("--- END DATA SNIPPET ---");

        return parseICS(data);
    } catch (error) {
        console.error("Error fetching calendar events:", error);
        return [];
    }
}

interface CalendarEvent {
    id: string;
    title: string;
    date: Date;
    end?: Date;
    description?: string;
    location?: string;
    category: "Academic" | "Exams" | "Events" | "Holidays";
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
            } else {
                if (!currentEvent) console.log("Event null");
                else if (!currentEvent.title) console.log("Title missing for event", currentEvent);
                else if (!currentEvent.date) console.log("Date missing for event", currentEvent);
            }
            currentEvent = null;
            continue;
        }

        if (inEvent && currentEvent) {
            if (line.startsWith("SUMMARY:")) {
                currentEvent.title = line.substring(8);
            }
            else if (line.startsWith("DTSTART")) {
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

// Run
fetchCalendarEvents("utatuinternational@gmail.com").then(events => {
    console.log("Events found:", events);
});
