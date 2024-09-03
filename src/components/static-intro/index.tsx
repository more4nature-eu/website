'use client';

import { cn } from '@/lib/utils';

import Header from '@/containers/header';
import { Media } from '@/containers/media';

import AppMenu from '@/components/app-menu';
import Wrapper from '@/components/ui/wrapper';

export default function StaticIntro({ className }: { className?: HTMLDivElement['className'] }) {
  return (
    <div className={cn('h-[181px] bg-cover bg-center bg-no-repeat md:h-[365px]', className)}>
      <Wrapper className="py-4 md:py-4">
        <Media lessThan="md">
          <Header>
            <AppMenu />
          </Header>
        </Media>
        <Media greaterThanOrEqual="md">
          <Header>
            <AppMenu />
          </Header>
        </Media>
      </Wrapper>
    </div>
  );
}
