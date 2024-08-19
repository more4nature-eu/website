'use client';

import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import { CaseStudy } from '@/lib/case-studies.service';
import { PaginatedResult } from '@/lib/paginator';
import queryKeys from '@/lib/query-keys';

import { filtersAtom } from '@/containers/cases/store';

export default function CaseStudiesTotal() {
  const filters = useAtomValue(filtersAtom);

  const { data } = useQuery<PaginatedResult<CaseStudy[]>>({
    queryKey: queryKeys.studyCases.filteredList(filters).queryKey,
  });
  const totalCaseStudies = data?.total || 0;

  return (
    <div className="sticky top-0 z-10 space-y-4 bg-white py-8">
      <h4 className="text-xl font-bold">Case studies</h4>
      <p className="text-lg text-gray-600">{totalCaseStudies} case studies</p>
    </div>
  );
}
