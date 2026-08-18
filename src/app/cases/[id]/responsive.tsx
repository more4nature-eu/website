'use client';

import dynamic from 'next/dynamic';

import CaseDetailSidebar from '@/containers/case-detail/sidebar';
import Sidebar from '@/containers/cases/sidebar';
import { Media } from '@/containers/media';

const CasesMap = dynamic(() => import('@/containers/cases/map'), { ssr: false });

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
