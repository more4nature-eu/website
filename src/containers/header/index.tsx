'use client';

import { PropsWithChildren, useRef, useState } from 'react';

import { motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion';

import { cn } from '@/lib/utils';

import AppLogo from '@/components/app-logo';

export const SECTIONS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Cases', href: '/cases' },
  { name: 'Events & News', href: 'https://blog.more4nature.eu' },
  { name: 'Contact us', href: 'mailto:more4nature_project@un-ihe.org' },
] as const;

export default function Header({
  className,
  children,
}: PropsWithChildren<{
  className?: HTMLDivElement['className'];
}>) {
  const menuRef = useRef<HTMLDivElement>(null);
  const inView = useInView(menuRef);
  const [latestScrollYPosition, setLatestScrollYPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const Content = (
    <header className={cn('flex items-center justify-between', className)}>
      <AppLogo />
      {children}
    </header>
  );
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrollingUp(latest < latestScrollYPosition);
    setLatestScrollYPosition(latest);
  });

  return (
    <>
      <div ref={menuRef}>{Content}</div>
      <motion.div
        className="fixed left-0 right-0 top-0 z-40 w-full border-b border-b-white/20 bg-grey-800 py-4"
        variants={{
          initial: { opacity: 0, y: -100 },
          show: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={!inView && isScrollingUp ? 'show' : 'initial'}
        transition={{
          ease: 'linear',
          duration: 0.25,
        }}
      >
        <div className="container">{Content}</div>
      </motion.div>
    </>
  );
}
