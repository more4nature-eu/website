import { NextRequest, NextResponse } from 'next/server';

import { EventsService, Event } from '@/lib/events.service';

import events from '@/data/events';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const { filters } = EventsService.extractFilters(searchParams);
  const eventsService = new EventsService(events, filters);
  const data = {
    upcoming: eventsService.getUpcomingEvents(),
    past: eventsService.getPastEvents(),
  };

  return NextResponse.json({ data });
}
