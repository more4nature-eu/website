'use client';

import { useParams } from 'next/navigation';

import CaseFilters from '@/containers/cases/header/filters';
import { Media } from '@/containers/media';

import AppLogo from '@/components/app-logo';
import AppMenu from '@/components/app-menu';

export default function Header() {
  const { id } = useParams();

  return (
    <header className="flex items-center justify-between border-b border-b-grey-400 px-4 py-2 md:px-[60px] md:py-5">
      <AppLogo variant="secondary" />
      <Media greaterThanOrEqual="md">{!id && <CaseFilters />}</Media>
      <AppMenu />
    </header>
  );
}
