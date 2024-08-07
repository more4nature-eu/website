import { QueryClient, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';

import { EventsService } from '@/lib/events.service';
import queryKeys from '@/lib/query-keys';

import events from '@/data/events';

import EventsShowcase from '@/containers/events-news/events';
import News from '@/containers/events-news/news';

import StaticIntro from '@/components/static-intro';

const INITIAL_NEWS_PAGE = 1;

const prefetchData = async (queryClient: QueryClient) => {
  const eventsService = new EventsService(events, {});
  const data = {
    upcoming: eventsService.getUpcomingEvents(),
    past: eventsService.getPastEvents(),
  };

  queryClient.setQueryData(queryKeys.events.past.queryKey, data.past);
  queryClient.setQueryData(queryKeys.events.upcoming.queryKey, data.upcoming);

  // todo: prefetch news
};

export default async function EventsNews() {
  const queryClient = new QueryClient();

  await prefetchData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StaticIntro className="bg-[url('/images/twilight.webp')] bg-bottom" />
      <EventsShowcase />
      <News />
    </HydrationBoundary>
  );
}
