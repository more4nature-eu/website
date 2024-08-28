'use client';

import CaseDetailSidebar from '@/containers/case-detail/sidebar';
import CasesMap from '@/containers/cases/map';
import Sidebar from '@/containers/cases/sidebar';
import { Media } from '@/containers/media';

export default function ResponsiveCaseDetailPage() {
  return (
    <>
      <Media lessThan="md" className="flex-1">
        <CaseDetailSidebar />
      </Media>
      <Media greaterThanOrEqual="md" className="relative flex flex-1">
        <>
          <Sidebar>
            <CaseDetailSidebar />
          </Sidebar>
          <CasesMap />
        </>
      </Media>
    </>
  );
}
