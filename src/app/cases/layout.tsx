import { PropsWithChildren } from 'react';

import 'maplibre-gl/dist/maplibre-gl.css';

import CasesLayoutProviders from '@/app/cases/providers';

import Header from '@/containers/cases/header';

export default function CasesLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <CasesLayoutProviders>
      <main className="flex min-h-[calc(100svh)] flex-col">
        <Header />
        <div className="relative flex flex-1">{children}</div>
      </main>
    </CasesLayoutProviders>
  );
}
