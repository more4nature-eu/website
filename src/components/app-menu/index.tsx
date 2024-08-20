'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import { SECTIONS } from '@/containers/header';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function AppMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild className="group">
        <div className="relative flex items-center gap-3">
          <span className="absolute -left-[calc(100%+8px)] top-1/2 hidden -translate-y-1/2 uppercase text-white group-hover:flex">
            Menu
          </span>
          <motion.button
            type="button"
            className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-grey-800 p-4 after:absolute after:left-1/2 after:top-1/2 after:h-11 after:w-11 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border-2 after:border-white"
          >
            <HiOutlineMenuAlt4 className="h-5 w-5 text-white" />
          </motion.button>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ul className="space-y-8 text-right">
          {SECTIONS.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="text-lg hover:underline hover:underline-offset-4">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
