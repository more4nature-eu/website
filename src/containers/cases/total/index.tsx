'use client';

import { useQuery } from '@tanstack/react-query';

import queryKeys from '@/lib/query-keys';

export default function CaseStudiesTotal() {
  const { data } = useQuery<number>({
    queryKey: queryKeys.totalCases.total.queryKey,
  });
  const totalCaseStudies = data || 0;

  return (
    <div className="mb-8">
      <h1 className="mb-3 text-xl font-bold text-gray-800">Case studies</h1>
      <p className="text-lg text-gray-500">{totalCaseStudies} case studies</p>
    </div>
  );
}
