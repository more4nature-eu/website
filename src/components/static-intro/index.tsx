import { cn } from '@/lib/utils';

import Header from '@/containers/header';

import Wrapper from '@/components/ui/wrapper';

export default function StaticIntro({ className }: { className?: HTMLDivElement['className'] }) {
  return (
    <div className={cn('h-[181px] bg-cover bg-center bg-no-repeat md:h-[365px]', className)}>
      <Wrapper className="py-4 md:py-4">
        <Header />
      </Wrapper>
    </div>
  );
}
