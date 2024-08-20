'use client';

import { cn } from '@/lib/utils';

import AppLogo from '@/components/app-logo';
import AppMenu from '@/components/app-menu';
import { SocialMenu } from '@/components/ui/social-menu';

export const SECTIONS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Cases', href: '/cases' },
  { name: 'Events & News', href: '/events-news' },
  { name: 'Contact us', href: '/#contact-us' },
];

export default function Header({
  className,
  showSocial = false,
}: {
  className?: HTMLDivElement['className'];
  showSocial?: boolean;
}) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <AppLogo />
      <div className="flex items-center space-x-24">
        {showSocial && <SocialMenu />}
        <AppMenu />
      </div>
    </header>
  );
}
