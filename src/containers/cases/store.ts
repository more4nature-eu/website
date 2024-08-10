import { atom } from 'jotai';

import { Location, Impact, ThematicArea, ComplianceType } from '@/lib/case-studies.service';

export const sidebarAtom = atom(false);

export const filtersAtom = atom<{
  search: string | '';
  thematicArea: `${ThematicArea}`[];
  complianceType: `${ComplianceType}`[];
  impact: `${Impact}`[];
  location: `${Location}`[];
}>({
  search: '',
  thematicArea: [],
  complianceType: [],
  impact: [],
  location: [],
});

export const totalCaseStudiesAtom = atom<number>(0);
