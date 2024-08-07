'use client';

import { useState } from 'react';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { cn } from '@/lib/utils';

import { ScrollArea } from '@/components/ui/scroll-area';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'pointer-events-auto relative flex max-h-screen max-w-[455px] flex-1 flex-col border-r border-r-grey-400 shadow transition-transform',
        {
          'translate-x-0 transform': !isCollapsed,
          '-translate-x-full transform': isCollapsed,
        },
      )}
    >
      <button
        type="button"
        className="absolute -right-7 top-4 z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
        onClick={() => setIsCollapsed((_isCollapsed) => !_isCollapsed)}
      >
        {isCollapsed && <HiOutlineChevronRight />}
        {!isCollapsed && <HiOutlineChevronLeft />}
      </button>
      <ScrollArea className="w-full grow px-[60px] py-8">content</ScrollArea>
    </aside>
  );
}
