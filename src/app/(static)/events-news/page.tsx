import EventsShowcase from '@/containers/events-news/events';

import StaticIntro from '@/components/static-intro';

export default function EventsNews() {
  return (
    <>
      <StaticIntro className="bg-[url('/images/twilight.webp')] bg-bottom" />
      <EventsShowcase />
    </>
  );
}
