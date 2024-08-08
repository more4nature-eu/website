import { PropsWithChildren } from 'react';

import 'maplibre-gl/dist/maplibre-gl.css';
import CasesLayoutProviders from '@/app/cases/providers';

export default function CasesLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <CasesLayoutProviders>
      <main className="flex min-h-[calc(100svh)] flex-col">{children}</main>
    </CasesLayoutProviders>
  );
}
