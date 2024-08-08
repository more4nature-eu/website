'use client';

import { useEffect, useState, useCallback, FC } from 'react';

import ReactMapGL, {
  ViewState,
  ViewStateChangeEvent,
  MapEvent,
  useMap,
} from 'react-map-gl/maplibre';
import { useDebounce } from 'rooks';

import { cn } from '@/lib/utils';

import type { CustomMapProps } from './types';

export const DEFAULT_VIEW_STATE: Partial<ViewState> = {
  zoom: 3,
  latitude: 0,
  longitude: 0,
};

export const Map: FC<CustomMapProps> = ({
  id = 'default',
  children,
  className,
  viewState,
  constrainedAxis,
  initialViewState,
  bounds,
  onMapViewStateChange,
  onLoad,
  ...mapboxProps
}: CustomMapProps) => {
  /**
   * REFS
   */
  const { [id]: mapRef } = useMap();

  /**
   * STATE
   */
  const [localViewState, setLocalViewState] = useState<Partial<ViewState> | null>(
    !initialViewState
      ? {
          ...DEFAULT_VIEW_STATE,
          ...viewState,
        }
      : null,
  );
  const [isFlying, setFlying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  /**
   * CALLBACKS
   */
  const debouncedViewStateChange = useDebounce((_viewState: Partial<ViewState>) => {
    if (onMapViewStateChange) onMapViewStateChange(_viewState);
  }, 250);

  const handleFitBounds = useCallback(() => {
    if (mapRef && bounds) {
      const { bbox, options } = bounds;
      // enabling fly mode avoids the map to be interrupted during the bounds transition
      setFlying(true);

      mapRef.fitBounds(
        [
          [bbox[0], bbox[1]],
          [bbox[2], bbox[3]],
        ],
        options,
      );
    }
  }, [bounds, mapRef]);

  const handleMapMove = useCallback(
    ({ viewState: _viewState }: ViewStateChangeEvent) => {
      const newViewState = {
        ..._viewState,
        latitude: constrainedAxis === 'y' ? localViewState?.latitude : _viewState.latitude,
        longitude: constrainedAxis === 'x' ? localViewState?.longitude : _viewState.longitude,
      };
      setLocalViewState(newViewState);
      debouncedViewStateChange(newViewState);
    },
    [
      constrainedAxis,
      localViewState?.latitude,
      localViewState?.longitude,
      debouncedViewStateChange,
    ],
  );

  const handleMapLoad = useCallback(
    (e: MapEvent) => {
      setLoaded(true);

      if (onLoad) {
        onLoad(e);
      }
    },
    [onLoad],
  );

  useEffect(() => {
    if (mapRef && bounds) {
      handleFitBounds();
    }
  }, [mapRef, bounds, handleFitBounds]);

  useEffect(() => {
    setLocalViewState((prevViewState) => ({
      ...prevViewState,
      ...viewState,
    }));
  }, [viewState]);

  useEffect(() => {
    if (!bounds) return undefined;

    const { options } = bounds;
    const animationDuration = options?.duration || 0;
    let timeoutId: number;

    if (isFlying) {
      timeoutId = window.setTimeout(() => {
        setFlying(false);
      }, animationDuration);
    }

    return () => {
      if (timeoutId) {
        window.clearInterval(timeoutId);
      }
    };
  }, [bounds, isFlying]);

  return (
    <div className={cn('relative z-0 h-full w-full', className)}>
      <ReactMapGL
        id={id}
        initialViewState={initialViewState}
        onMove={handleMapMove}
        onLoad={handleMapLoad}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        {...mapboxProps}
        {...localViewState}
      >
        {!!mapRef && loaded && children}
      </ReactMapGL>
    </div>
  );
};

export default Map;
