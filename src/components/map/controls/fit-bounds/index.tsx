import { useCallback } from 'react';

import { LuLocateFixed } from 'react-icons/lu';

import { cn } from '@/lib/utils';

import { CustomMapProps } from '@/components/map/types';

import { BUTTON_CLASSES } from '../utils';

export default function FitBoundsControl({
  bounds,
  className,
  onFitBoundsChange,
}: {
  bounds?: CustomMapProps['bounds'];
  className?: string;
  onFitBoundsChange: (bounds: CustomMapProps['bounds']) => void;
}) {
  const handleFitBoundsChange = useCallback(() => {
    onFitBoundsChange(bounds);
  }, [bounds, onFitBoundsChange]);

  return (
    <button
      aria-label="Fit to bounds"
      className={cn(BUTTON_CLASSES.default, {
        [BUTTON_CLASSES.hover]: !!bounds,
        [BUTTON_CLASSES.disabled]: !bounds,
        className,
      })}
      type="button"
      disabled={!bounds}
      onClick={handleFitBoundsChange}
    >
      <LuLocateFixed className="h-6 w-6" />
    </button>
  );
}
