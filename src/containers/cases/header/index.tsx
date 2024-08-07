import CaseFilters from '@/containers/cases/header/filters';

import AppLogo from '@/components/app-logo';
import AppMenu from '@/components/app-menu';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-grey-400 px-4 py-2 md:px-[60px] md:py-4">
      <AppLogo variant="secondary" />
      <CaseFilters />
      <AppMenu />
    </header>
  );
}
