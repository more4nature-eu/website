'use client';

import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import queryString from 'query-string';

import { CaseStudy, ThematicArea } from '@/lib/case-studies.service';
import { PaginatedResult } from '@/lib/paginator';
import queryKeys from '@/lib/query-keys';

import { filtersAtom } from '@/containers/cases/store';

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

export default function CaseStudyList() {
  const filters = useAtomValue(filtersAtom);
  const { data } = useQuery<PaginatedResult<CaseStudy>>({
    queryKey: [queryKeys.cases.cases.queryKey, filters],
    queryFn: async () => {
      const serialized = queryString.stringify(filters);

      // const serialized = queryString.stringify(filters);
      // //console.log('keyword', serialized);
      const response = await fetch(`/case-studies?${serialized}`);
      return response.json();
    },
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
    </>
  );
}
