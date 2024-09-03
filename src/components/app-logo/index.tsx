import { ComponentProps } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import M4NLogoAlt from '../../../public/images/m4n-logo-alt.webp';
import M4NLogo from '../../../public/images/m4n-logo.webp';

export default function AppLogo({
  className,
  variant = 'default',
}: {
  className?: ComponentProps<typeof Link>['className'];
  variant?: 'default' | 'secondary';
}) {
  return (
    <Link href="/" className={cn('flex', className)}>
      <Image src={variant === 'secondary' ? M4NLogoAlt : M4NLogo} alt="more4nature logo" />
    </Link>
  );
}
