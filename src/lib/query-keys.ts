import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';
import { ExtractAtomValue } from 'jotai';

import { filtersAtom } from '@/containers/cases/store';

export const eventKeys = createQueryKeys('events', {
  upcoming: null,
  past: null,
});

export const newsKeys = createQueryKeys('news', {
  paginated: ({ page }) => [{ page }],
});

export const caseStudyKeys = createQueryKeys('studyCases', {
  filteredList: (filters: ExtractAtomValue<typeof filtersAtom>) => [{ ...filters }],
  byId: (id: string) => [id],
});

export const queryKeys = mergeQueryKeys(eventKeys, newsKeys, caseStudyKeys);

export default queryKeys;
