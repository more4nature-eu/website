import { ClusterComponentProps } from '@/components/map/layers/cluster/types';

export const MapCluster = ({ properties }: ClusterComponentProps) => {
  const { point_count: pointCount } = properties;

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-grey-600 bg-white">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-grey-800">
        <span className="font-semibold text-white">{pointCount}</span>
      </div>
    </div>
  );
};

export default MapCluster;
