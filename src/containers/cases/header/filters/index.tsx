'use client';

import { useSetAtom } from 'jotai';

import FiltersDropdown from '@/containers/cases/header/filters/filters-dropdown';
import { filtersAtom } from '@/containers/cases/store';

import Search from '@/components/search';

export default function CaseFilters() {
  const setFilters = useSetAtom(filtersAtom);

  return (
    <div className="flex items-center space-x-5">
      <Search
        placeholder="Search case studies by title or tag..."
        onChange={(keyword) => {
          setFilters((prev) => ({ ...prev, keyword }));
        }}
      />
      <FiltersDropdown />
    </div>
  );
}
