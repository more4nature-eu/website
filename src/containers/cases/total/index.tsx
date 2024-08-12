'use client';

import { useQuery } from '@tanstack/react-query';

import { CaseStudy } from '@/lib/case-studies.service';
import { PaginatedResult } from '@/lib/paginator';
import queryKeys from '@/lib/query-keys';

export default function CaseStudiesTotal() {
  const { data } = useQuery<PaginatedResult<CaseStudy[]>>({
    queryKey: queryKeys.cases.cases.queryKey,
  });
  const totalCaseStudies = data?.total || 0;

  return (
    <div className="mb-8">
      <h1 className="mb-3 text-xl font-bold text-gray-800">Case studies</h1>
      <p className="text-lg text-gray-500">{totalCaseStudies} case studies</p>
    </div>
  );
}
