import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';

export const eventKeys = createQueryKeys('events', {
  upcoming: null,
  past: null,
});

export const newsKeys = createQueryKeys('news', {
  paginated: ({ page = 1 }) => [{ page }],
});

export const queryKeys = mergeQueryKeys(eventKeys, newsKeys);

export default queryKeys;
