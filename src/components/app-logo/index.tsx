import { ComponentProps } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export default function AppLogo({
  className,
  variant = 'default',
}: {
  className?: ComponentProps<typeof Link>['className'];
  variant?: 'default' | 'secondary';
}) {
  return (
    <Link href="/" className={cn('inline-flex', className)}>
      <Image
        src={variant === 'secondary' ? '/images/m4n-logo-alt.webp' : '/images/m4n-logo.webp'}
        alt="more4nature logo"
        width={200}
        height={70}
        className="h-auto w-full"
      />
    </Link>
  );
}
