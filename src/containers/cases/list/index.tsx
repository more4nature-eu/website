'use client';

import { useState } from 'react';

import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { CaseStudy, ThematicArea } from '@/lib/case-studies.service';
import { News } from '@/lib/news.service';
import { PaginatedResult } from '@/lib/paginator';
import queryKeys from '@/lib/query-keys';

import DiscoverMoreButton from '@/components/discover-more-button';
import { Paginator } from '@/components/paginator';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import formatDate from '@/utils/date';

const getThematicAreaColor = (thematicArea: ThematicArea) => {
  switch (thematicArea) {
    case ThematicArea.ZERO_POLLUTION:
      return 'bg-blue-100 text-blue-800';
    case ThematicArea.BIODIVERSITY_PROTECTION:
      return 'bg-orange-100 text-orange-800';
    case ThematicArea.DEFORESTATION_PREVENTION:
      return 'bg-lime-100 text-lime-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

interface CaseStudyItemProps {
  caseStudy: CaseStudy;
}

function CaseStudyItem({ caseStudy }: CaseStudyItemProps) {
  console.log(caseStudy);
  return (
    <div className="mb-8 flex flex-col">
      <div className="flex items-center space-x-2">
        <span
          className={`inline-block h-2 w-2 rounded-full ${getThematicAreaColor(caseStudy.thematicAreas[0])}`}
        />
        <span className={`text-xs font-bold ${getThematicAreaColor(caseStudy.thematicAreas[0])}`}>
          {caseStudy.thematicAreas[0]}
        </span>
      </div>
      <h2 className="mt-2 text-lg font-bold leading-tight text-gray-900">{caseStudy.name}</h2>
      <div className="mt-1">
        <span className="text-xs font-semibold text-gray-600">Related tags:</span>
        <div className="mt-1 flex flex-wrap gap-1">
          {caseStudy.tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const PAGE_SIZE = 5;

export default function CaseStudyList() {
  const [page, setPage] = useState(0);
  const { data } = useQuery<PaginatedResult<CaseStudy>>({
    queryKey: queryKeys.news.paginated({ page: page + 1 }).queryKey,
    queryFn: async () => {
      try {
        const response = await fetch(`/case-studies?page=${page + 1}&pageSize=${PAGE_SIZE}`);

        if (!response.ok) {
          throw new Error('Error fetching news');
        }
        return await response.json();
      } catch (err) {
        throw new Error('Error fetching news');
      }
    },
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <ul>
        {data?.data.map((caseStudy) => (
          <li key={caseStudy.name}>
            <CaseStudyItem caseStudy={caseStudy} />
          </li>
        ))}
      </ul>
      {/*<Paginator*/}
      {/*  pageIndex={page}*/}
      {/*  pageCount={Math.ceil(*/}
      {/*    (data?.total as NonNullable<PaginatedResult<News>['total']>) / PAGE_SIZE,*/}
      {/*  )}*/}
      {/*  totalPagesToDisplay={6}*/}
      {/*  onPagePrevious={() => {*/}
      {/*    setPage(page - 1);*/}
      {/*  }}*/}
      {/*  onPageNext={() => {*/}
      {/*    setPage(page + 1);*/}
      {/*  }}*/}
      {/*  onPageIndex={(p) => {*/}
      {/*    setPage(p);*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  );
}
