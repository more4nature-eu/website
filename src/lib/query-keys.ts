import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';

export const eventKeys = createQueryKeys('events', {
  upcoming: null,
  past: null,
});

export const newsKeys = createQueryKeys('news', {
  paginated: ({ page }) => [{ page }],
});

export const caseStudyKeys = createQueryKeys('cases', {
  cases: null,
});

export const totalCaseStudiesKeys = createQueryKeys('totalCases', {
  total: null,
});

export const queryKeys = mergeQueryKeys(eventKeys, newsKeys, caseStudyKeys, totalCaseStudiesKeys);

export default queryKeys;
