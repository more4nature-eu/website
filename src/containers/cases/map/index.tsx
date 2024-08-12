'use client';

import { useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';
import { bbox as getBbox } from '@turf/turf';
import { useAtomValue } from 'jotai';
import { LngLatBoundsLike, useMap } from 'react-map-gl/maplibre';
import Supercluster from 'supercluster';

import { CaseStudy } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import { SIDEBAR_WIDTH } from '@/containers/cases/sidebar';
import { filtersAtom, sidebarAtom } from '@/containers/cases/store';

import Map from '@/components/map';
import FitBoundsControl from '@/components/map/controls/fit-bounds';
import ZoomControl from '@/components/map/controls/zoom';
import ClusterLayer from '@/components/map/layers/cluster';
import { ClusterLayerProps } from '@/components/map/layers/cluster/types';
import MarkerCluster from '@/components/map/markers/cluster';
import MarkerPin from '@/components/map/markers/pin';

export default function CasesMap() {
  const isCollapsed = useAtomValue(sidebarAtom);
  const { default: map } = useMap();
  const bbox = map?.getBounds().toArray().flat() as [number, number, number, number];
  const filters = useAtomValue(filtersAtom);

  const { data } = useQuery({
    queryKey: queryKeys.studyCases.filteredList(filters).queryKey,
    queryFn: async (): Promise<{ data: CaseStudy[]; total: number }> => {
      try {
        const response = await fetch('/case-studies');

        if (!response.ok) {
          throw new Error('Error fetching case studies');
        }
        return await response.json();
      } catch (err) {
        throw new Error('Error fetching case studies');
      }
    },
    select: (data) => {
      return data?.data.map(({ point }) => point);
    },
  });

  const onSelectMarker = (
    nextZoom: number,
    coordinates: Supercluster.PointFeature<Supercluster.AnyProps>['geometry']['coordinates'],
  ) => {
    map?.flyTo({ zoom: nextZoom, center: coordinates as [number, number] });
  };

  const initialBbox = getBbox({
    type: 'FeatureCollection',
    features: data as NonNullable<typeof data>,
  });

  const resetMapView = useCallback(() => {
    map?.fitBounds(initialBbox as LngLatBoundsLike, {
      padding: {
        top: 25,
        bottom: 25,
        left: isCollapsed ? 25 : SIDEBAR_WIDTH + 25,
        right: 25,
      },
    });
  }, [map, isCollapsed, initialBbox]);

  return (
    <Map
      initialViewState={{
        bounds: initialBbox as LngLatBoundsLike,
        fitBoundsOptions: {
          padding: {
            top: 25,
            bottom: 25,
            left: isCollapsed ? 25 : SIDEBAR_WIDTH + 25,
            right: 25,
          },
        },
      }}
    >
      <>
        <ClusterLayer
          mapId="default"
          data={data as NonNullable<ClusterLayerProps['data']>}
          MarkerComponent={MarkerPin}
          ClusterComponent={MarkerCluster}
          onSelectMarker={onSelectMarker}
        />
        <div className="absolute bottom-12 right-[10px] space-y-2">
          <ZoomControl />
          <FitBoundsControl onFitBoundsChange={resetMapView} bounds={{ bbox }} />
        </div>
      </>
    </Map>
  );
}
