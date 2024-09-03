'use client';

import Link from 'next/link';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import queryString from 'query-string';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { CaseStudy, ThematicArea } from '@/lib/case-studies.service';
import { PaginatedResult } from '@/lib/paginator';
import queryKeys from '@/lib/query-keys';
import { cn } from '@/lib/utils';

import { filtersAtom } from '@/containers/cases/store';

import Loader from '@/components/icons/loader';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const getThematicAreaColor = (thematicArea: ThematicArea | undefined) => {
  switch (thematicArea) {
    case ThematicArea.ZERO_POLLUTION:
      return {
        badge: 'bg-blue-500',
        border: 'before:bg-blue-500',
        background: 'hover:bg-blue-500',
      };
    case ThematicArea.BIODIVERSITY_PROTECTION:
      return {
        badge: 'bg-orange-500',
        border: 'before:bg-orange-500',
        background: 'hover:bg-orange-500',
      };
    case ThematicArea.DEFORESTATION_PREVENTION:
      return {
        badge: 'bg-green-500',
        border: 'before:bg-green-500',
        background: 'hover:bg-green-500',
      };
    default:
      return {
        badge: 'bg-grey-800',
        border: 'before:bg-grey-800',
        background: 'hover:bg-grey-800',
      };
  }
};

interface CaseStudyItemProps {
  caseStudy: CaseStudy;
}

function getThematicStyles(caseStudy: CaseStudy) {
  if (caseStudy.thematicAreas.length === 1) {
    return getThematicAreaColor(caseStudy.thematicAreas[0]);
  }

  return getThematicAreaColor(undefined);
}

function CaseStudyItem({ caseStudy }: CaseStudyItemProps) {
  const thematicStyles = getThematicStyles(caseStudy);

  return (
    <div
      className={`flex flex-1 space-x-5 bg-white transition-colors before:h-full before:w-[5px] before:shrink-0 ${thematicStyles.border} ${thematicStyles.background} group`}
    >
      <div className="flex flex-col space-y-3 py-2 pl-3">
        <div className="flex items-center gap-2 space-x-2">
          {caseStudy.thematicAreas.map((thematicArea, index) => (
            <Badge
              key={index}
              className={`text-xs ${getThematicAreaColor(thematicArea).badge} pointer-events-none`}
            >
              <span className="relative pl-4 leading-none before:absolute before:left-0 before:top-1/2 before:block before:h-[9px] before:w-[9px] before:-translate-y-1/2 before:rounded-full before:bg-grey-800">
                {thematicArea}
              </span>
            </Badge>
          ))}
        </div>
        <motion.div
          className="flex items-baseline space-x-1 overflow-hidden"
          variants={{
            initial: { x: 0 },
            hover: {
              x: 25,
            },
          }}
          initial="initial"
          animate="initial"
          whileHover="hover"
        >
          <HiOutlineArrowRight className="h-4 w-4 shrink-0 text-grey-800" />
          <Link
            href={`/cases/${caseStudy.id}`}
            className={cn('left-0 text-lg font-semibold leading-6 hover:underline', {
              'group-hover:text-white': caseStudy.thematicAreas.length > 1,
            })}
          >
            {caseStudy.title}
          </Link>
        </motion.div>
        <div className="space-y-2">
          <span
            className={cn({
              'group-hover:text-white': caseStudy.thematicAreas.length > 1,
            })}
          >
            Related tags:
          </span>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <Badge
                key={index}
                variant={caseStudy.thematicAreas.length > 1 ? 'default' : 'secondary'}
                className={cn('pointer-events-none', {
                  'group-hover:text-white': caseStudy.thematicAreas.length > 1,
                })}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyList() {
  const filters = useAtomValue(filtersAtom);

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: queryKeys.studyCases.filteredList(filters).queryKey,
    queryFn: async (): Promise<PaginatedResult<CaseStudy>> => {
      const serialized = queryString.stringify(filters);
      try {
        const response = await fetch(`/case-studies?${serialized}`);
        if (!response.ok) throw new Error('An error occurred while fetching the data');
        return response.json();
      } catch (error) {
        throw new Error('An error occurred while fetching the data');
      }
    },
    select: (data) => data?.data,
    placeholderData: keepPreviousData,
  });

  return (
    <>
      {isFetching && (
        <div className="flex grow items-center justify-center">
          <Loader />
        </div>
      )}
      {!isFetching && isSuccess && (
        <ScrollArea className="h-full pb-8">
          <div className="md:px-[60px]">
            <ul className="space-y-3">
              {data?.map((caseStudy) => (
                <li key={caseStudy.id} className="flex">
                  <CaseStudyItem caseStudy={caseStudy} />
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      )}
    </>
  );
}
