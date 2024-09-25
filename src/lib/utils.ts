import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Event } from './events.service';
import { News } from './news.service';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortByDate<T extends Event | News>(data: T[], order: 'ASC' | 'DESC' = 'DESC'): T[] {
  return data.sort(function (a, b) {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (order === 'ASC') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
}
