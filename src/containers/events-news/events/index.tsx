import UpcomingEvents from '@/containers/events-news/events/upcoming-events';

import Wrapper from '@/components/ui/wrapper';

export default function EventsShowcase() {
  return (
    <Wrapper>
      <div className="grid grid-cols-12">
        <div className="col-span-12 space-y-9 md:col-span-7">
          <h2 className="text-xl font-bold text-grey-800 md:text-2xl">Events</h2>
          <p className="leading-9 md:text-lg">
            Explore our current initiatives, upcoming events, and opportunities to engage with
            more4nature.
          </p>
        </div>
      </div>
      <UpcomingEvents />
    </Wrapper>
  );
}
