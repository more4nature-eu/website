import { atom } from 'jotai';

import { Location, Impact, ThematicArea, ComplianceType } from '@/lib/case-studies.service';

export const sidebarAtom = atom(false);

export const filtersAtom = atom<{
  search: string | '';
  thematicArea: `${ThematicArea}` | null;
  complianceType: `${ComplianceType}` | null;
  impact: `${Impact}` | null;
  location: `${Location}` | null;
}>({
  search: '',
  thematicArea: null,
  complianceType: null,
  impact: null,
  location: null,
});
