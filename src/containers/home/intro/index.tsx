'use client';

import Header from '@/containers/header';
import { Media } from '@/containers/media';

import AppMenu from '@/components/app-menu';
import { SocialMenu } from '@/components/ui/social-menu';

export default function Intro() {
  return (
    <div className="relative h-[635px] md:h-[775px]">
      <video
        src="/videos/intro.mp4"
        className="absolute h-full w-full object-cover after:absolute"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 h-full w-full bg-gradient-to-r from-grey-900/80 to-transparent" />
      <div className="container relative z-10 flex h-full flex-col py-4">
        <Media lessThan="md">
          <Header>
            <AppMenu />
          </Header>
        </Media>
        <Media greaterThanOrEqual="md">
          <Header>
            <div className="flex items-center space-x-24">
              <SocialMenu />
              <AppMenu />
            </div>
          </Header>
        </Media>

        <div className="flex flex-1 flex-col items-start justify-center space-y-9 md:grid md:grid-cols-12 md:items-center md:justify-between">
          <div className="space-y-9 text-white md:col-span-8">
            <h1 className="text-xl text-white md:text-3xl">
              Welcome to more
              <span className="font-thin">4</span>
              nature
            </h1>
            <p className="text-lg">
              Reversing the trend in environmental degradation through{' '}
              <span className="font-bold">collaboration</span> of{' '}
              <span className="font-bold md:text-nowrap">
                Citizen Science initiatives with authorities.
              </span>
            </p>
          </div>
          <SocialMenu className="col-span-4 justify-center md:hidden" />
        </div>
      </div>
    </div>
  );
}
