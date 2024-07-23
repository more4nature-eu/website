import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const Wrapper: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('container py-10 md:py-20', className)} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
