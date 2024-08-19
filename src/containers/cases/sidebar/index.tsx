'use client';

import { useAtom } from 'jotai';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { cn } from '@/lib/utils';

import CaseStudies from '@/containers/cases';
import { sidebarAtom } from '@/containers/cases/store';
import CaseStudiesTotal from '@/containers/cases/total';

import { ScrollArea } from '@/components/ui/scroll-area';

export const SIDEBAR_WIDTH = 455;

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useAtom(sidebarAtom);

  return (
    <aside
      className={cn(
        'pointer-events-auto absolute bottom-0 top-0 z-10 flex max-h-screen max-w-[455px] flex-1 flex-col border-r border-r-grey-400 bg-white shadow transition-transform',
        {
          'translate-x-0 transform': isExpanded,
          '-translate-x-full transform': !isExpanded,
        },
      )}
    >
      <button
        type="button"
        className={cn(
          'absolute -right-7 top-4 z-10 z-20 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow-md',
          {
            'translate-x-3/4': !isExpanded,
          },
        )}
        onClick={() => setIsExpanded((_isExpanded) => !_isExpanded)}
      >
        {isExpanded && <HiOutlineChevronLeft />}
        {!isExpanded && <HiOutlineChevronRight />}
      </button>
      <div className="px-[60px]">
        <CaseStudiesTotal />
      </div>
      <ScrollArea className="pb-8">
        <div className="px-[60px]">
          <CaseStudies />
        </div>
      </ScrollArea>
    </aside>
  );
}
