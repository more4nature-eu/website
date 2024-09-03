import { useCallback, MouseEvent } from 'react';

import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { useMap } from 'react-map-gl/maplibre';
import { MapRef } from 'react-map-gl/maplibre';

import { cn } from '@/lib/utils';

import { BUTTON_CLASSES } from '../utils';

export default function ZoomControl({
  id = 'default',
  className,
}: {
  id?: string;
  className?: HTMLDivElement['className'];
}) {
  const { [id]: mapRef } = useMap();

  const zoom = mapRef?.getZoom() as NonNullable<ReturnType<MapRef['getZoom']>>;
  const minZoom = mapRef?.getMinZoom() as NonNullable<ReturnType<MapRef['getMinZoom']>>;
  const maxZoom = mapRef?.getMaxZoom() as NonNullable<ReturnType<MapRef['getMaxZoom']>>;

  const increaseZoom = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (!mapRef) return null;

      mapRef.zoomIn();
    },
    [mapRef],
  );

  const decreaseZoom = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (!mapRef) return null;

      mapRef.zoomOut();
    },
    [mapRef],
  );

  return (
    <div className={cn('inline-flex flex-col space-y-2', className)}>
      <button
        className={cn(BUTTON_CLASSES.default, {
          [BUTTON_CLASSES.hover]: zoom < maxZoom,
          [BUTTON_CLASSES.disabled]: zoom >= maxZoom,
        })}
        aria-label="Zoom in"
        type="button"
        disabled={zoom >= maxZoom}
        onClick={increaseZoom}
      >
        <HiOutlinePlus className="h-6 w-6" />
      </button>

      <button
        className={cn(BUTTON_CLASSES.default, {
          [BUTTON_CLASSES.hover]: zoom > minZoom,
          [BUTTON_CLASSES.disabled]: zoom <= minZoom,
        })}
        aria-label="Zoom out"
        type="button"
        disabled={zoom <= minZoom}
        onClick={decreaseZoom}
      >
        <HiOutlineMinus className="h-6 w-6" />
      </button>
    </div>
  );
}
