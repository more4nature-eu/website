'use client';

import { FC, useRef } from 'react';

import { KeyframeOptions, animate, useInView, useIsomorphicLayoutEffect } from 'framer-motion';

const AnimatedCounter: FC<{
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
}> = ({ from, to, animationOptions }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 3,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
