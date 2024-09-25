import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Event } from './events.service';
import { News } from './news.service';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortByDateDescending<T extends Event | News>(data: T[]): T[] {
  return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
