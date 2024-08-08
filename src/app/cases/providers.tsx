'use client';

import { PropsWithChildren } from 'react';

import { MapProvider } from 'react-map-gl/maplibre';

export default function CasesLayoutProviders({ children }: PropsWithChildren) {
  return <MapProvider>{children}</MapProvider>;
}
