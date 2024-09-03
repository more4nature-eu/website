import React from 'react';

import Supercluster from 'supercluster';

import { CaseStudy } from '@/lib/case-studies.service';

export type PinComponentProps = {
  properties: CaseStudy['location']['coordinates']['properties'];
};

export type ClusterComponentProps = {
  properties: Supercluster.ClusterProperties;
  leaves: Supercluster.PointFeature<CaseStudy['location']['coordinates']['properties']>[];
};

export type ClusterLayerProps = {
  mapId: string;
  data: Supercluster.PointFeature<CaseStudy['location']['coordinates']['properties']>[];
  MarkerComponent: React.FC<PinComponentProps>;
  ClusterComponent: React.FC<ClusterComponentProps>;
  onSelectMarker: (
    nextZoom: number,
    coordinates: Supercluster.PointFeature<
      CaseStudy['location']['coordinates']
    >['geometry']['coordinates'],
  ) => void;
};
