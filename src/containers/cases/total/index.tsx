'use client';

import { PropsWithChildren } from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { CaseStudy } from '@/lib/case-studies.service';
import { PaginatedResult } from '@/lib/paginator';
import queryKeys from '@/lib/query-keys';

import { filtersAtom } from '@/containers/cases/store';

export default function CaseStudiesTotal({
  children,
  className,
}: PropsWithChildren<{
  className?: HTMLDivElement['className'];
}>) {
  const filters = useAtomValue(filtersAtom);

  const { data } = useQuery<PaginatedResult<CaseStudy[]>>({
    queryKey: queryKeys.studyCases.filteredList(filters).queryKey,
    placeholderData: keepPreviousData,
  });
  const totalCaseStudies = data?.total || 0;

  return (
    <div className={className}>
      <div className="space-y-4 bg-white py-8">
        <h4 className="text-[length:inherit] font-bold">Case studies</h4>
        <p className="text-lg text-gray-600">{totalCaseStudies} case studies</p>
      </div>
      {children}
    </div>
  );
}
