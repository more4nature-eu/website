'use client';

import { useSetAtom } from 'jotai';

import { filtersAtom } from '@/containers/cases/store';

import Search from '@/components/search';

export default function CaseFilters() {
  const setFilters = useSetAtom(filtersAtom);

  return (
    <div>
      <Search
        placeholder="Search case studies by keyword..."
        onChange={(search) => {
          setFilters((prev) => ({ ...prev, search }));
        }}
      />
    </div>
  );
}
