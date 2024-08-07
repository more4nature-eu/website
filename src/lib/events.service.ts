// src/services/EventsService.ts

import { Paginator } from '@/lib/paginator';

export type Event = {
  name: string;
  description: string;
  date: string;
  image: string;
  location: string;
};

export class EventsService extends Paginator<Event> {
  private readonly currentDate: string;
  private readonly events: Event[];
  private readonly filters: Partial<Event>;

  constructor(events: Event[], filters: Partial<Event>) {
    super(events);
    this.currentDate = new Date().toISOString().split('T')[0];
    this.events = events;
    this.filters = filters || {};
  }

  protected filter(items: Event[], filters: Partial<Event>): Event[] {
    return items.filter((event) => {
      const filterByLocation = filters.location ? event.location === filters.location : true;
      const filterByDate = filters.date ? event.date === filters.date : true;
      const filterByName = filters.name ? event.name.includes(filters.name) : true;
      return filterByLocation && filterByDate && filterByName;
    });
  }

  getUpcomingEvents(): Event[] {
    const upcomingEvents = this.events.filter((event) => event.date > this.currentDate);
    return this.filter(upcomingEvents, this.filters);
  }

  getPastEvents(): Event[] {
    const pastEvents = this.events.filter((event) => event.date <= this.currentDate);
    return this.filter(pastEvents, this.filters);
  }

  static extractFilters(searchParams: URLSearchParams): {
    filters: Partial<Event>;
  } {
    const filters: Partial<Event> = {
      location: searchParams.get('location') || undefined,
      date: searchParams.get('date') || undefined,
      name: searchParams.get('name') || undefined,
    };
    return { filters };
  }
}
