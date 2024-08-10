import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';

export const eventKeys = createQueryKeys('events', {
  upcoming: null,
  past: null,
});

export const newsKeys = createQueryKeys('news', {
  paginated: ({ page }) => [{ page }],
});

export const caseStudyKeys = createQueryKeys('cases', {
  paginated: ({ page }) => [{ page }],
});

export const queryKeys = mergeQueryKeys(eventKeys, newsKeys, caseStudyKeys);

export default queryKeys;
