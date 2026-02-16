import { fetchCalendarEvents } from "@/lib/ical";
import { SchoolCalendarClient } from "./SchoolCalendarClient";

// Server Component: Fetches data and passes it to the Client Component
export default async function SchoolCalendarPage() {
    const calendarId = "utatuinternational@gmail.com";
    const googleEvents = await fetchCalendarEvents(calendarId);

    return <SchoolCalendarClient events={googleEvents} />;
}
