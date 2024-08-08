import { Point } from 'maplibre-gl';
import { useMap } from 'react-map-gl/maplibre';

import { SIDEBAR_WIDTH } from '@/containers/cases/sidebar';

export const centerMap = (mapRef: ReturnType<typeof useMap>['current'], isSidebarOpen: boolean) => {
  if (mapRef) {
    const { lat, lng } = mapRef?.getCenter();
    const { x, y } = mapRef?.project([lng, lat]);
    const sidebarX = isSidebarOpen ? -SIDEBAR_WIDTH / 2 : SIDEBAR_WIDTH / 2;
    const centerPoint = new Point(x + sidebarX, y);
    const latLng = mapRef?.unproject(centerPoint);
    mapRef?.flyTo({ center: latLng });
  }
};

export default centerMap;
