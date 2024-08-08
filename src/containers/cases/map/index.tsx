'use client';

import { useEffect } from 'react';

import { useAtomValue } from 'jotai';
import { useMap } from 'react-map-gl/maplibre';

import { sidebarAtom } from '@/containers/cases/store';

import Map from '@/components/map';
import centerMap from '@/components/map/utils';

export default function CasesMap() {
  const isCollapsed = useAtomValue(sidebarAtom);
  const { default: map } = useMap();

  useEffect(() => {
    centerMap(map, isCollapsed);
  }, [map, isCollapsed]);

  return (
    <div className="w-full">
      <Map />
    </div>
  );
}
