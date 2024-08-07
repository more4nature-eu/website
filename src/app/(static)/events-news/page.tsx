import { QueryClient, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';

import queryKeys from '@/lib/query-keys';

import EventsShowcase from '@/containers/events-news/events';
import News from '@/containers/events-news/news';

import StaticIntro from '@/components/static-intro';
import APP_HOSTNAME from '@/lib';

const INITIAL_NEWS_PAGE = 1;

const prefetchData = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: queryKeys.events.past.queryKey,
    queryFn: async () => {
      try {
        const response = await fetch(`${APP_HOSTNAME}/events
`);
        if (!response.ok) {
          throw new Error('Failed to fetch past events');
        }

        const data = await response.json();
        return data?.data.past;
      } catch (err) {
        throw new Error('Failed to fetch past events');
      }
    },
  });

  await queryClient.prefetchQuery({
    queryKey: queryKeys.events.upcoming.queryKey,
    queryFn: async () => {
      try {
        const response = await fetch(`${APP_HOSTNAME}/events
  `);
        if (!response.ok) {
          throw new Error('Failed to fetch upcoming events');
        }

        const data = await response.json();
        return data?.data.upcoming;
      } catch (err) {
        throw new Error('Failed to fetch upcoming events');
      }
    },
  });

  await queryClient.prefetchQuery({
    queryKey: queryKeys.news.paginated({ page: INITIAL_NEWS_PAGE }).queryKey,
    queryFn: async () => {
      try {
        const response = await fetch(`${APP_HOSTNAME}/news?page=${INITIAL_NEWS_PAGE}`);

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        return data?.data.upcoming;
      } catch (err) {
        throw new Error('Failed to fetch news');
      }
    },
  });
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
