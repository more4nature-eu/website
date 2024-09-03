'use client';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineCalendarDays } from 'react-icons/hi2';

import { type Event } from '@/lib/events.service';
import queryKeys from '@/lib/query-keys';

import DiscoverMoreButton from '@/components/discover-more-button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import formatDate from '@/utils/date';

export default function UpcomingEvents() {
  const { data } = useQuery<Event[]>({
    queryKey: queryKeys.events.upcoming.queryKey,
  });

  return (
    <ul>
      {data?.map(({ title, image, location, date, description }) => (
        <li
          key={title}
          className="grid grid-cols-12 gap-14 border-t border-t-grey-800/30 py-[60px]"
        >
          <div className="relative col-span-6 h-[242px]">
            <Image src={image} alt={title} fill />
          </div>
          <div className="col-span-6 flex flex-col items-start justify-between">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <span className="flex items-center space-x-2">
                  <HiOutlineCalendarDays className="h-6 w-6" />
                  <span>{formatDate(date)}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <HiOutlineLocationMarker className="h-6 w-6" />
                  <span>{location}</span>
                </span>
              </div>
              <h4 className="text-xl">{title}</h4>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <DiscoverMoreButton className="text-gray-800" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
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
        </li>
      ))}
    </ul>
  );
}
