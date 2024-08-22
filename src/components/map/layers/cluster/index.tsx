import { useEffect, useMemo, useState } from 'react';

import { Marker, useMap } from 'react-map-gl/maplibre';
import Supercluster from 'supercluster';

import { CaseStudy } from '@/lib/case-studies.service';

import type { ClusterLayerProps } from './types';

export const ClusterLayer = ({
  mapId = 'default',
  data,
  MarkerComponent,
  ClusterComponent,
  onSelectMarker,
}: ClusterLayerProps) => {
  const { [mapId]: mapRef } = useMap();
  const bbox = mapRef?.getBounds().toArray().flat() as [number, number, number, number];
  const zoom = mapRef?.getZoom();
  const [mapSettings, setMapSettings] = useState({
    zoom,
    bbox,
  });

  const SUPERCLUSTER = useMemo(
    () => new Supercluster<(typeof data)[number]['properties']>({ radius: 40 }).load(data),
    [data],
  );

  const clusters = useMemo(() => {
    if (!SUPERCLUSTER) return [];

    return SUPERCLUSTER.getClusters(mapSettings.bbox, mapSettings.zoom as NonNullable<typeof zoom>);
  }, [SUPERCLUSTER, mapSettings]);

  const handleSelectMarker = (
    clusterId: number,
    coordinates: Supercluster.PointFeature<
      CaseStudy['location']['coordinates']['properties']
    >['geometry']['coordinates'],
  ) => {
    const nextZoom = SUPERCLUSTER.getClusterExpansionZoom(clusterId);
    onSelectMarker(nextZoom, coordinates);
  };

  useEffect(() => {
    const updateSettings = () => {
      const bbox = mapRef?.getBounds().toArray().flat() as [number, number, number, number];
      const zoom = mapRef?.getZoom();

      setMapSettings({ bbox, zoom });
    };
    mapRef?.on('move', updateSettings);

    return () => {
      mapRef?.off('move', updateSettings);
    };
  }, [mapRef]);

  return (
    <>
      {clusters.map((feature) => {
        const { id, geometry, properties } = feature;
        const { coordinates } = geometry;
        const [longitude, latitude] = coordinates;

        const clusterFeaturesProps = feature.properties as Supercluster.ClusterProperties;

        if (clusterFeaturesProps.cluster) {
          const { cluster_id: clusterId } = clusterFeaturesProps;
          const leaves = SUPERCLUSTER.getLeaves(clusterId, Infinity);

          return (
            <Marker
              key={id}
              latitude={latitude}
              longitude={longitude}
              onClick={() => handleSelectMarker(clusterId, coordinates)}
            >
              <ClusterComponent properties={clusterFeaturesProps} leaves={leaves} />
            </Marker>
          );
        }

        // If is not a cluster, it's a PointFeature, so the properties will be the FeatureProps
        // Be sure that the id you use in the key is unique, otherwise you will get rerender blinking
        return (
          <Marker key={properties.id} latitude={latitude} longitude={longitude}>
            <MarkerComponent
              key={`marker-${properties.id}`}
              properties={properties as CaseStudy['location']['coordinates']['properties']}
            />
          </Marker>
        );
      })}
    </>
  );
};

export default ClusterLayer;
