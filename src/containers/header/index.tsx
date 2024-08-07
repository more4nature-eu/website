'use client';

import { useCallback } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import { cn } from '@/lib/utils';

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { SocialMenu } from '@/components/ui/social-menu';

export const SECTIONS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Cases', href: '/cases' },
  { name: 'Events & News', href: '/events-news' },
];

export default function Header({
  className,
  showSocial = false,
}: {
  className?: HTMLDivElement['className'];
  showSocial: boolean;
}) {
  const handleContactUs = useCallback(() => {
    document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <header className={cn('flex items-center justify-between', className)}>
      <Link href="/" className="inline-flex">
        <Image
          src="/images/m4n-logo.webp"
          alt="More4Nature logo"
          width={200}
          height={70}
          className="h-auto w-full"
        />
      </Link>

      <div className="flex items-center space-x-24">
        {showSocial && <SocialMenu />}
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
              <li>
                <button
                  type="button"
                  className="text-lg hover:underline hover:underline-offset-4"
                  onClick={handleContactUs}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
