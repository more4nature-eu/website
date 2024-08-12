import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { CaseStudyService } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import CASE_STUDIES from '@/data/case-studies';

import Header from '@/containers/cases/header';
import Map from '@/containers/cases/map';
import Sidebar from '@/containers/cases/sidebar';

const INITIAL_NEWS_PAGE = 1;

const prefetchData = async (queryClient: QueryClient) => {
  const caseStudiesService = new CaseStudyService(
    CASE_STUDIES,
    {},
    { page: INITIAL_NEWS_PAGE, pageSize: 5 },
  );
  const paginatedCaseStudies = caseStudiesService.searchCaseStudies();
  const totalCaseStudies = paginatedCaseStudies.total;

  queryClient.setQueryData(
    queryKeys.cases.paginated({ page: INITIAL_NEWS_PAGE }).queryKey,
    paginatedCaseStudies,
  );
  queryClient.setQueryData(queryKeys.totalCases.total.queryKey, totalCaseStudies);
};

export default async function Cases() {
  const queryClient = new QueryClient();
  await prefetchData(queryClient);
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header />
        <div className="relative flex flex-1">
          <Sidebar />
          <Map />
        </div>
      </HydrationBoundary>
    </>
  );
}
