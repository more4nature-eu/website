'use client';

import { useState } from 'react';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineExternalLink } from 'react-icons/hi';
import { HiOutlineCalendarDays } from 'react-icons/hi2';

import type { Event } from '@/lib/events.service';
import queryKeys from '@/lib/query-keys';
import { cn } from '@/lib/utils';

import { Media } from '@/containers/media';

import DiscoverMoreButton from '@/components/discover-more-button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import dateFormatter from '@/utils/date';

function PastEvent(event: Event) {
  return (
    <div className="flex h-full flex-col space-y-8 border-l border-l-grey-900/30 px-6 first:border-l-0 first:pl-0">
      <Image
        src={event.image}
        alt={event.title}
        width={310}
        height={203}
        className="h-[203px] w-full"
      />
      <div className="flex flex-1 flex-col items-start justify-between space-y-8">
        <div className="shrink-0 space-y-4">
          <span className="flex items-center space-x-2">
            <HiOutlineCalendarDays className="h-6 w-6" />
            <span>{dateFormatter(event.date, event.formatDate)}</span>
          </span>
          <h4 className="text-lg">{event.title}</h4>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <DiscoverMoreButton className="text-gray-800" />
          </DialogTrigger>
          <DialogContent className="flex flex-col">
            <ScrollArea className="flex max-h-[calc(100svh_-_theme(space.60))] grow flex-col pr-4">
              <DialogHeader>
                <DialogTitle>{event.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="flex flex-col space-y-2">
                  {event.type && (
                    <div>
                      <span className="font-semibold">Event type: </span>
                      <span>{event.type}</span>
                    </div>
                  )}
                  {event.theme && (
                    <div>
                      <span className="font-semibold">Theme: </span>
                      <span>{event.theme}</span>
                    </div>
                  )}
                  {event.location && (
                    <div>
                      <span className="font-semibold">Location: </span>
                      <span>{event.location}</span>
                    </div>
                  )}
                  {event.date && (
                    <div>
                      <span className="font-semibold">Date: </span>
                      <span>{dateFormatter(event.date, event?.formatDate)}</span>
                    </div>
                  )}
                  {event.organizations && (
                    <div>
                      <span className="font-semibold">
                        {`Organization${event.organizations.length > 1 ? 's' : ''}:`}{' '}
                      </span>
                      <span>{event.organizations.join(', ')}</span>
                    </div>
                  )}
                  {event.presenters && (
                    <div>
                      <span className="font-semibold">Presenters:</span>
                      <ul>
                        {event.presenters.map((presenter) => (
                          <li key={presenter}>{presenter}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: event.description,
                  }}
                />
                {event.link?.url && (
                  <div>
                    <a
                      href={event.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 underline"
                    >
                      <span>Visit event&apos;s website </span>
                      <HiOutlineExternalLink className="h-[20px] w-[20px]" />
                    </a>
                  </div>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default function PastEvents() {
  const { data } = useQuery<Event[]>({
    queryKey: queryKeys.events.past.queryKey,
  });

  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);
  console.log(api);

  return (
    <div className="space-y-14">
      <div className="flex items-center justify-between">
        <h3 className="flex-1 text-xl">Past Events</h3>
        <Media greaterThanOrEqual="md">
          <div className="flex space-x-4">
            <button
              type="button"
              className={cn('flex items-center space-x-1 transition-colors', {
                'cursor-default text-grey-800/20': !api?.canScrollPrev(),
              })}
              disabled={!api?.canScrollPrev()}
              onClick={() => {
                setCurrent((api?.selectedScrollSnap() || 0) + 1);
                api?.scrollPrev();
              }}
            >
              <HiOutlineChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <button
              type="button"
              className={cn(
                'flex items-center space-x-1 border-l border-l-grey-900/30 pl-4 transition-colors',
                {
                  'cursor-default text-grey-800/20': !api?.canScrollNext(),
                },
              )}
              disabled={!api?.canScrollNext()}
              onClick={() => {
                setCurrent((api?.selectedScrollSnap() || 0) + 1);
                api?.scrollNext();
              }}
            >
              <span>Next</span>
              <HiOutlineChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Media>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent infinite>
          {data?.map((event) => (
            <CarouselItem
              key={event.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <PastEvent {...event} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
