'use client';

import { useState } from 'react';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { HiOutlineCalendarDays } from 'react-icons/hi2';

import type { Event } from '@/lib/events.service';
import queryKeys from '@/lib/query-keys';
import { cn } from '@/lib/utils';

import DiscoverMoreButton from '@/components/discover-more-button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import formatDate from '@/utils/date';

function PastEvent({ name, date, image, description }: Event) {
  return (
    <div className="flex h-full flex-col space-y-8 border-l border-l-grey-900/30 px-6">
      <Image src={image} alt={name} width={310} height={203} className="h-[203px] max-w-[310px]" />
      <div className="flex flex-1 flex-col items-start justify-between space-y-8">
        <div className="shrink-0 space-y-4">
          <span className="flex items-center space-x-2">
            <HiOutlineCalendarDays className="h-6 w-6" />
            <span>{formatDate(date)}</span>
          </span>
          <h4 className="text-lg">{name}</h4>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <DiscoverMoreButton className="text-gray-800" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              <DialogDescription>
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </DialogDescription>
            </DialogHeader>
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

  return (
    <div className="space-y-14">
      <div className="flex items-center justify-between">
        <h3 className="text-xl">Past Events</h3>
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
      </div>
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: false,
          }}
        >
          <CarouselContent>
            {data?.map((event) => (
              <CarouselItem key={event.name} className="basis-1/3">
                <PastEvent {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
