import { atom } from 'jotai';

import { CaseStudyFilters } from '@/lib/case-studies.service';

const sidebarAtom = atom(false);

export const INITIAL_FILTERS_STATE: CaseStudyFilters = {
  keyword: undefined,
  thematicAreas: [],
  complianceTypes: [],
  impacts: [],
  locations: [],
};

const filtersAtom = atom<CaseStudyFilters>(INITIAL_FILTERS_STATE);

const store = { sidebarAtom, filtersAtom };

export { store, sidebarAtom, filtersAtom };

export default store;
