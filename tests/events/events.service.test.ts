import { EventsService, Event } from '@/lib/events.service';

const mockEvents: Event[] = [
  {
    name: 'Event 1',
    description: 'Description 1',
    date: '2024-08-10',
    image: '/images/event1.jpg',
    location: 'New York',
  },
  {
    name: 'Event 2',
    description: 'Description 2',
    date: '2024-08-05',
    image: '/images/event2.jpg',
    location: 'San Francisco',
  },
  {
    name: 'Event 3',
    description: 'Description 3',
    date: '2023-08-01',
    image: '/images/event3.jpg',
    location: 'New York',
  },
  {
    name: 'Event 4',
    description: 'Description 4',
    date: '2023-08-20',
    image: '/images/event4.jpg',
    location: 'Boston',
  },
  {
    name: 'Event 5',
    description: 'Description 5',
    date: '2024-09-10',
    image: '/images/event5.jpg',
    location: 'New York',
  },
  {
    name: 'Event 6',
    description: 'Description 6',
    date: '2023-07-15',
    image: '/images/event6.jpg',
    location: 'Boston',
  },
];

describe('EventsService', () => {
  let eventsService: EventsService;
  const fixedDate = new Date('2023-08-10T00:00:00Z');

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(fixedDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return upcoming events', () => {
    const filters: Partial<Event> = {};
    eventsService = new EventsService(mockEvents, filters);
    const upcomingEvents = eventsService.getUpcomingEvents();

    expect(upcomingEvents).toEqual([
      {
        name: 'Event 1',
        description: 'Description 1',
        date: '2024-08-10',
        image: '/images/event1.jpg',
        location: 'New York',
      },
      {
        name: 'Event 2',
        description: 'Description 2',
        date: '2024-08-05',
        image: '/images/event2.jpg',
        location: 'San Francisco',
      },
      {
        name: 'Event 4',
        description: 'Description 4',
        date: '2023-08-20',
        image: '/images/event4.jpg',
        location: 'Boston',
      },
      {
        name: 'Event 5',
        description: 'Description 5',
        date: '2024-09-10',
        image: '/images/event5.jpg',
        location: 'New York',
      },
    ]);
  });

  it('should return past events', () => {
    const filters: Partial<Event> = {};
    eventsService = new EventsService(mockEvents, filters);
    const pastEvents = eventsService.getPastEvents();

    expect(pastEvents).toEqual([
      {
        name: 'Event 3',
        description: 'Description 3',
        date: '2023-08-01',
        image: '/images/event3.jpg',
        location: 'New York',
      },
      {
        name: 'Event 6',
        description: 'Description 6',
        date: '2023-07-15',
        image: '/images/event6.jpg',
        location: 'Boston',
      },
    ]);
  });

  it('should return upcoming events filtered by location', () => {
    const filters: Partial<Event> = { location: 'New York' };
    eventsService = new EventsService(mockEvents, filters);
    const upcomingEvents = eventsService.getUpcomingEvents();

    expect(upcomingEvents).toEqual([
      {
        name: 'Event 1',
        description: 'Description 1',
        date: '2024-08-10',
        image: '/images/event1.jpg',
        location: 'New York',
      },
      {
        name: 'Event 5',
        description: 'Description 5',
        date: '2024-09-10',
        image: '/images/event5.jpg',
        location: 'New York',
      },
    ]);
  });

  it('should return past events filtered by location', () => {
    const filters: Partial<Event> = { location: 'Boston' };
    eventsService = new EventsService(mockEvents, filters);
    const pastEvents = eventsService.getPastEvents();

    expect(pastEvents).toEqual([
      {
        name: 'Event 6',
        description: 'Description 6',
        date: '2023-07-15',
        image: '/images/event6.jpg',
        location: 'Boston',
      },
    ]);
  });

  it('should return upcoming events filtered by name', () => {
    const filters: Partial<Event> = { name: 'Event 2' };
    eventsService = new EventsService(mockEvents, filters);
    const upcomingEvents = eventsService.getUpcomingEvents();

    expect(upcomingEvents).toEqual([
      {
        name: 'Event 2',
        description: 'Description 2',
        date: '2024-08-05',
        image: '/images/event2.jpg',
        location: 'San Francisco',
      },
    ]);
  });

  it('should return past events filtered by name', () => {
    const filters: Partial<Event> = { name: 'Event 3' };
    eventsService = new EventsService(mockEvents, filters);
    const pastEvents = eventsService.getPastEvents();

    expect(pastEvents).toEqual([
      {
        name: 'Event 3',
        description: 'Description 3',
        date: '2023-08-01',
        image: '/images/event3.jpg',
        location: 'New York',
      },
    ]);
  });

  it('should return upcoming events filtered by location and name', () => {
    const filters: Partial<Event> = { location: 'New York', name: 'Event 1' };
    eventsService = new EventsService(mockEvents, filters);
    const upcomingEvents = eventsService.getUpcomingEvents();

    expect(upcomingEvents).toEqual([
      {
        name: 'Event 1',
        description: 'Description 1',
        date: '2024-08-10',
        image: '/images/event1.jpg',
        location: 'New York',
      },
    ]);
  });

  it('should return past events filtered by location and name', () => {
    const filters: Partial<Event> = { location: 'Boston', name: 'Event 6' };
    eventsService = new EventsService(mockEvents, filters);
    const pastEvents = eventsService.getPastEvents();

    expect(pastEvents).toEqual([
      {
        name: 'Event 6',
        description: 'Description 6',
        date: '2023-07-15',
        image: '/images/event6.jpg',
        location: 'Boston',
      },
    ]);
  });
});
