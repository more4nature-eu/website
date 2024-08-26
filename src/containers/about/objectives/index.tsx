'use client';

import { Media } from '@/containers/media';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Wrapper from '@/components/ui/wrapper';

const OBJECTIVES = [
  {
    name: 'Create transformative change in citizens, communities and authorities in monitoring, protecting and improving pollution, biodiversity and deforestation.',
    description:
      'Clean rivers, lakes, oceans, soils and skies are the basic building blocks of healthy ecosystems and communities. In this theme, more4nature explores how citizen science can monitor, promote and enforce current policies to prevent air, water and plastic pollution.',
    imageURL: '/images/objectives/create.webp',
  },
  {
    name: 'Increase trust in citizen-generated data as complementary to official observations and enabling its validation, sharing, and reuse.',
    description:
      'Thriving wildlife and resilient ecosystems sustain the diversity of life on our planet. In this theme, more4nature explores how citizen science can help by promoting compliance with policies that protect species and ecosystem diversity and monitoring policy effectiveness.',
    imageURL: '/images/objectives/create.webp',
  },
  {
    name: 'Generation of indicators using the European Open Science Cloud (EOSC) as a platform.',
    description:
      'Deforestation and forest degradation aggravates climate change and the loss of biodiversity. The main driver of deforestation is the expansion of agricultural land, and the EU is responsible for about 20% of deforestation and forest degradation worldwide mainly through imports of agricultural products. In this theme, more4nature explores how citizen generated data can best support deforestation-free imports and the implementation of complementary international agreements by ensuring uptake of relevant citizen generated data in compliance assurance.',
    imageURL: '/images/objectives/generation.webp',
  },
  {
    name: 'Empower citizens and communities by co-designing actions with local authorities to protect their environment in diverse LivingLabs via guidance, tools and capacity building.',
    description:
      'Deforestation and forest degradation aggravates climate change and the loss of biodiversity. The main driver of deforestation is the expansion of agricultural land, and the EU is responsible for about 20% of deforestation and forest degradation worldwide mainly through imports of agricultural products. In this theme, more4nature explores how citizen generated data can best support deforestation-free imports and the implementation of complementary international agreements by ensuring uptake of relevant citizen generated data in compliance assurance.',
    imageURL: '/images/objectives/empower.webp',
  },
  {
    name: 'Enable authorities and national agencies to combine authoritative data and citizen science data for monitoring of policy frameworks.',
    description:
      'Citizen science is becoming accepted for biodiversity (e.g. species occurrence quantification and forest monitoring) and air quality (e.g. by the deployment of low-cost sensors) but a deeper transformation is needed in the way authorities collaborate with citizens to integrate CGD in the monitoring frameworks for Zero pollution, biodiversity protection and deforestation prevention.',
    imageURL: '/images/objectives/enable.webp',
  },
];

export default function Objectives() {
  return (
    <>
      <Wrapper>
        <Media lessThan="lg">
          <ul className="space-y-10 divide-y divide-grey-800/20">
            {OBJECTIVES.map(({ name, description, imageURL }, index) => (
              <li key={name} className="flex flex-col space-y-4 [&:not(:first-child)]:pt-10">
                <div
                  className="flex h-[110px] w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${imageURL})`,
                  }}
                />

                <div className="flex flex-col space-y-4 text-lg">
                  <span>0{index + 1}</span>
                  <span className="font-semibold">{name}</span>
                </div>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </Media>
        <Media greaterThanOrEqual="lg">
          <Accordion type="single" collapsible className="flex w-full flex-col">
            {OBJECTIVES.map(({ name, description, imageURL }) => (
              <div key={name} className="flex h-full w-full flex-1 flex-row-reverse">
                <AccordionItem key={name} value={name} className="peer w-full px-14 py-10">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-5">
                      <span className="text-lg">{name}</span>
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
      <Wrapper className="space-y-4">
        <span className="text-lg font-semibold">Methodology</span>
        <h3 className="tex-lg lg:text-xl lg:leading-[48px]">
          A socio-technical approach implemented via Dooble Loop Action Research.
        </h3>
        {/*  todo: ask for picture */}
      </Wrapper>
    </>
  );
}
