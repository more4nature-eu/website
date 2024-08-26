import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import AppLogo from '@/components/app-logo';

export const SECTIONS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Cases', href: '/cases' },
  { name: 'Events & News', href: '/events-news' },
  { name: 'Contact us', href: '/#contact-us' },
];

export default function Header({
  className,
  children,
}: PropsWithChildren<{
  className?: HTMLDivElement['className'];
}>) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <AppLogo />
      {children}
    </header>
  );
}
