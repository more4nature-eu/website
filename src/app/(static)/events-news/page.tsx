import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { EventsService } from '@/lib/events.service';
import NewsService from '@/lib/news.service';
import queryKeys from '@/lib/query-keys';

import events from '@/data/events';
import news from '@/data/news';

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

  const newsService = new NewsService(news, {}, { page: INITIAL_NEWS_PAGE, pageSize: 5 });
  const paginatedNews = newsService.searchNews();

  queryClient.setQueryData(
    queryKeys.news.paginated({ page: INITIAL_NEWS_PAGE }).queryKey,
    paginatedNews,
  );
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
