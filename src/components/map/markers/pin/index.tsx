import { useMemo } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell } from 'recharts';

import { ThematicArea } from '@/lib/case-studies.service';

import { PinComponentProps } from '@/components/map/layers/cluster/types';

export const getThematicAreaColor = (thematicArea: ThematicArea) => {
  switch (thematicArea) {
    case ThematicArea.ZERO_POLLUTION:
      return 'fill-blue-500';
    case ThematicArea.BIODIVERSITY_PROTECTION:
      return 'fill-orange-500';
    case ThematicArea.DEFORESTATION_PREVENTION:
      return 'fill-green-500';
    default:
      return 'fill-gray-500';
  }
};

export default function MapPin({ properties }: PinComponentProps) {
  const { id, name, thematicAreas } = properties;

  const data = useMemo(() => {
    return thematicAreas.map((thematicArea) => ({
      name: thematicArea,
      value: 1,
    }));
  }, [thematicAreas]);

  return (
    <Link href={`/cases/${id}`} className="cursor-pointer">
      <motion.div
        className="relative flex items-center transition-transform hover:scale-125"
        variants={{
          initial: { opacity: 1 },
          hidden: { opacity: 0 },
          hover: {
            opacity: 1,
          },
        }}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        <PieChart
          width={40}
          height={40}
          className="relative !cursor-pointer before:absolute before:left-1/2 before:top-1/2 before:z-50 before:h-[24px] before:w-[24px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-grey-800 after:absolute after:left-1/2 after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-grey-800"
        >
          <Pie
            data={data}
            startAngle={-270}
            dataKey="value"
            isAnimationActive={false}
            stroke="none"
          >
            {data.map(({ name }) => (
              <Cell key={`cell-${name}`} className={`${getThematicAreaColor(name)}`} />
            ))}
          </Pie>
        </PieChart>
        <motion.div
          variants={{
            initial: { opacity: 0, x: -20, y: '-50%', display: 'none' },
            hover: { opacity: 1, x: 0, y: '-50%', display: 'block' },
          }}
          className="absolute left-full top-1/2 -translate-y-1/2 text-nowrap rounded-3xl bg-grey-500/15 px-4 py-1 backdrop-blur"
        >
          {name}
        </motion.div>
      </motion.div>
    </Link>
  );
}
