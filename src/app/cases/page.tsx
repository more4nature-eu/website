import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { CaseStudyService } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import CASE_STUDIES from '@/data/case-studies';

import CaseStudies from '@/containers/cases';
import Map from '@/containers/cases/map';
import Sidebar from '@/containers/cases/sidebar';
import { INITIAL_FILTERS_STATE } from '@/containers/cases/store';
import CaseStudiesTotal from '@/containers/cases/total';

import { ScrollArea } from '@/components/ui/scroll-area';

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
      <Sidebar>
        <div className="px-[60px]">
          <CaseStudiesTotal />
        </div>
        <ScrollArea className="pb-8">
          <div className="px-[60px]">
            <CaseStudies />
          </div>
        </ScrollArea>
      </Sidebar>
      <Map />
    </HydrationBoundary>
  );
}
