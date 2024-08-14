import { atom } from 'jotai';

import { CaseStudyFilters } from '@/lib/case-studies.service';

export const sidebarAtom = atom(false);

export const filtersAtom = atom<CaseStudyFilters>({
  keyword: undefined,
  thematicAreas: [],
  complianceTypes: [],
  impacts: [],
  locations: [],
});
