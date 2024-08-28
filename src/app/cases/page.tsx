import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { CaseStudyService } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import CASE_STUDIES from '@/data/case-studies';

import ResponsiveCasesPage from '@/app/cases/responsive';

import { INITIAL_FILTERS_STATE } from '@/containers/cases/store';

const prefetchData = async (queryClient: QueryClient) => {
  const caseStudiesService = new CaseStudyService(CASE_STUDIES, {}, {});
  const allCaseStudies = caseStudiesService.searchCaseStudies();

  queryClient.setQueryData(
    queryKeys.studyCases.filteredList({ ...INITIAL_FILTERS_STATE }).queryKey,
    allCaseStudies,
  );
};

export default async function Cases() {
  const queryClient = new QueryClient();
  await prefetchData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ResponsiveCasesPage />
    </HydrationBoundary>
  );
}
