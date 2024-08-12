import { atom } from 'jotai';

import { CaseStudyFilters } from '@/lib/case-studies.service';

export const sidebarAtom = atom(false);

export const INITIAL_FILTERS_STATE: CaseStudyFilters = {
  keyword: undefined,
  thematicAreas: [],
  complianceTypes: [],
  impacts: [],
  locations: [],
};

export const filtersAtom = atom<CaseStudyFilters>(INITIAL_FILTERS_STATE);
