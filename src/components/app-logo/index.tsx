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
    <div
      className={cn('relative flex h-[69px] w-[203px]', {
        'h-[60px] w-[173px]': variant === 'secondary',
      })}
    >
      <Link href="/" className={cn('flex', className)}>
        <Image
          src={variant === 'secondary' ? '/images/m4n-logo-alt.webp' : '/images/m4n-logo.webp'}
          alt="more4nature logo"
          fill
        />
      </Link>
    </div>
  );
}
