import { useRef, useEffect } from 'react';

import { useCycle, motion } from 'framer-motion';

import { MenuToggle } from '@/components/animated-menu/toggle';

// @ts-expect-error fix later
export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 710px 42px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 710px 42px)',
    transition: {
      // delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function AnimatedMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="absolute bottom-0 right-0 top-0 w-[740px]"
    >
      <motion.div
        className="absolute bottom-0 right-0 top-0 w-[740px] bg-orange-500"
        variants={sidebar}
      />
      {/*<Navigation />*/}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
