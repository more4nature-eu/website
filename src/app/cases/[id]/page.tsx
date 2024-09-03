import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { CaseStudyService } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import CASE_STUDIES from '@/data/case-studies';

import ResponsiveCaseDetailPage from '@/app/cases/[id]/responsive';

import { INITIAL_FILTERS_STATE } from '@/containers/cases/store';

const prefetchData = async (queryClient: QueryClient, id: string) => {
  const caseStudiesService = new CaseStudyService(CASE_STUDIES, {}, {});
  const allCaseStudies = caseStudiesService.searchCaseStudies();

  const studyCase = caseStudiesService.searchById(id);

  queryClient.setQueryData(
    queryKeys.studyCases.filteredList({ ...INITIAL_FILTERS_STATE }).queryKey,
    allCaseStudies,
  );

  if (studyCase) {
    queryClient.setQueryData(queryKeys.studyCases.byId(id).queryKey, studyCase);
  }
};

export default async function CaseDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = new QueryClient();
  await prefetchData(queryClient, id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ResponsiveCaseDetailPage />
    </HydrationBoundary>
  );
}
