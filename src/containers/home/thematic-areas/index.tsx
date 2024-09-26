'use client';

import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { Media } from '@/containers/media';

import BiodiversityIcon from '@/components/icons/biodiversity';
import DeforestationIcon from '@/components/icons/deforestation';
import ZeroPollutionIcon from '@/components/icons/zero-pollution';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Wrapper from '@/components/ui/wrapper';

const IconBackground = ({
  children,
  className,
}: PropsWithChildren<{ className?: HTMLDivElement['className'] }>) => (
  <div
    className={cn(
      'flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full',
      className,
    )}
  >
    {children}
  </div>
);

const THEMATIC_AREAS = [
  {
    name: 'Zero Pollution',
    description:
      'Clean rivers, lakes, oceans, soils and skies are the basic building blocks of healthy ecosystems and communities. In this theme, more4nature explores how citizen science can monitor, promote and enforce current policies to prevent air, water and plastic pollution.',
    icon: (
      <IconBackground className="bg-blue-500">
        <ZeroPollutionIcon className="h-[64px] w-[64px] fill-grey-800" />
      </IconBackground>
    ),
    imageURL: '/images/thematic-areas/zero-pollution.webp',
  },
  {
    name: 'Biodiversity protection',
    description:
      'Thriving wildlife and resilient ecosystems sustain the diversity of life on our planet. In this theme, more4nature explores how citizen science can help by promoting compliance with policies that protect species and ecosystem diversity and monitoring policy effectiveness.',
    icon: (
      <IconBackground className="bg-orange-500">
        <BiodiversityIcon className="h-[64px] w-[64px] fill-grey-800" />
      </IconBackground>
    ),
    imageURL: '/images/thematic-areas/biodiversity.webp',
  },
  {
    name: 'Deforestation prevention',
    description:
      'Deforestation and forest degradation aggravates climate change and the loss of biodiversity. The main driver of deforestation is the expansion of agricultural land, and the EU is responsible for about 20% of deforestation and forest degradation worldwide mainly through imports of agricultural products. In this theme, more4nature explores how citizen generated data can best support deforestation-free imports and the implementation of complementary international agreements by ensuring uptake of relevant citizen generated data in compliance assurance.',
    icon: (
      <IconBackground className="bg-green-500">
        <DeforestationIcon className="h-[64px] w-[64px] fill-grey-800" />
      </IconBackground>
    ),
    imageURL: '/images/thematic-areas/deforestation.webp',
  },
];

export default function ThematicAreas() {
  return (
    <>
      <Wrapper className="space-y-10 md:space-y-20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 space-y-9 lg:col-span-6">
            <h2 className="text-xl font-bold text-grey-800 md:text-2xl">Thematic areas</h2>
            <p className="leading-9 md:text-lg">
              The more4nature activities are focused on three key thematic areas in environmental
              protection:
            </p>
          </div>
        </div>
        <Media lessThan="lg">
          <ul className="space-y-10 divide-y divide-grey-800/20">
            {THEMATIC_AREAS.map(({ name, description, imageURL, icon }) => (
              <li key={name} className="flex flex-col space-y-4 [&:not(:first-child)]:pt-10">
                <div
                  className="flex h-[110px] w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${imageURL})`,
                  }}
                />
                <div className="flex items-center space-x-5">
                  {icon}
                  <span className="text-lg">{name}</span>
                </div>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </Media>
        <Media greaterThanOrEqual="lg">
          <Accordion type="single" collapsible className="flex w-full flex-col">
            {THEMATIC_AREAS.map(({ name, description, imageURL, icon }) => (
              <div
                key={name}
                className="flex h-full w-full flex-1 flex-row-reverse border-b-grey-800/30 last-of-type:border-b"
              >
                <AccordionItem key={name} value={name} className="peer w-full px-14 py-10">
                  <AccordionTrigger>
                    <div className="flex flex-1 items-center space-x-5">
                      {icon}
                      <span className="text-left text-4xl">{name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="leading-9">{description}</AccordionContent>
                </AccordionItem>
                <div
                  className="flex w-[395px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${imageURL})`,
                  }}
                />
              </div>
            ))}
          </Accordion>
        </Media>
      </Wrapper>
      <Media greaterThanOrEqual="lg">
        <Separator className="mb-16 mt-12 bg-grey-800/30" />
      </Media>
    </>
  );
}
