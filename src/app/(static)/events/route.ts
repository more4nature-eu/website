import { NextRequest, NextResponse } from 'next/server';

import { EventsService, Event } from '@/lib/events.service';

import events from '@/data/events';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const filters: Partial<Event> = {
    location: searchParams.get('location') || undefined,
    date: searchParams.get('date') || undefined,
    name: searchParams.get('name') || undefined,
  };
  const eventsService = new EventsService(events, filters);
  const data = {
    upcoming: eventsService.getUpcomingEvents(),
    past: eventsService.getPastEvents(),
  };

  return NextResponse.json({ data });
}
