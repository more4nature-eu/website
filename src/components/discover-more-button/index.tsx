import { FaArrowRight } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import { Button, ButtonProps } from '@/components/ui/button';

export default function DiscoverMoreButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      type="button"
      variant="link"
      size="none"
      className={cn('space-x-2 text-white', className)}
      {...props}
    >
      <span className="uppercase underline">Discover more</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white">
        <FaArrowRight />
      </span>
    </Button>
  );
}
