// src/services/EventsService.ts

import { URLink } from '@/lib/case-studies.service';
import { Paginator } from '@/lib/paginator';

import { sortByDateDescending } from './utils';

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  formatDate?: string;
  image: string;
  location: string;
  theme: string;
  type: string;
  presenters: string[];
  organizations: (string | URLink)[];
  link?: URLink;
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
      const filterByName = filters.title ? event.title.includes(filters.title) : true;
      return filterByLocation && filterByDate && filterByName;
    });
  }

  getUpcomingEvents(): Event[] {
    const upcomingEvents = this.events.filter((event) => event.date > this.currentDate);
    return this.filter(upcomingEvents, this.filters);
  }

  getPastEvents(): Event[] {
    const pastEvents = sortByDateDescending(
      this.events.filter((event) => event.date <= this.currentDate),
    );
    return this.filter(pastEvents, this.filters);
  }

  static extractFilters(searchParams: URLSearchParams): {
    filters: Partial<Event>;
  } {
    const filters: Partial<Event> = {
      location: searchParams.get('location') || undefined,
      date: searchParams.get('date') || undefined,
      title: searchParams.get('title') || undefined,
    };
    return { filters };
  }
}
