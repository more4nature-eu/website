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
    name: 'Improve the understanding of the dynamics in transformative changes, especially regarding the changing roles of citizens, communities and authorities in monitoring, protecting and improving the environment.',
    description:
      'We are defining an overarching conceptual framework for collaborative environmental compliance assurance building on systemic behavioural models that detect obstacles and opportunities for involvement of civil society actors in compliance promotion, monitoring and enforcement. Action research in 40 cases will explore and test a set of behavioural best practices and technical tools and promote their adoption.',
    imageURL: '/images/objectives/objective-01.webp',
  },
  {
    name: 'Increase trust in citizen-generated data as complementary to official observations and enabling its validation, sharing, and reuse.',
    description:
      'Thriving wildlife and resilient ecosystems sustain the diversity of life on our planet. In this theme, more4nature explores how citizen science can help promote and monitor compliance with policies that protect species and ecosystem diversity and monitoring policy effectiveness.',
    imageURL: '/images/objectives/objective-02.webp',
  },
  {
    name: 'Generate indicators to monitor policy implementation.',
    description:
      'We will include citizen generated data in the methodologies for elaborating policy indicators to monitor environmental compliance assurance. There is a need to examine the indicators and compare them with legal thresholds while determining temporal tendencies and future projections in an integrated way for the benefit of local/regional/nations authorities.',
    imageURL: '/images/objectives/objective-03.webp',
  },
  {
    name: 'Empower citizens and communities by co-designing actions with local authorities to protect their environment in diverse LivingLabs via guidance, tools, and capacity building.',
    description:
      'We will go beyond the collection of high-quality data, looking for ways to include citizen generated data in environmental compliance assurance. Recognizing that this could not be sufficient to achieve real impact, other actions will be co-designed between creative and imaginative communities (LivingLabs) and local authorities. This will configure citizen & community-led actions that can be reused by similar communities following the same guidance and tooling.',
    imageURL: '/images/objectives/objective-04.webp',
  },
  {
    name: 'Enable authorities and national agencies to combine authoritative data and citizen science data for monitoring of policy frameworks.',
    description:
      'Citizen science is becoming accepted for biodiversity (e.g., species occurrence quantification and forest monitoring) and air quality (e.g., by the deployment of low-cost sensors) but a deeper transformation is needed in the way authorities collaborate with citizens to integrate citizen generated data in the monitoring frameworks for zero pollution, biodiversity protection, and deforestation prevention.',
    imageURL: '/images/objectives/objective-05.webp',
  },
];

export default function Objectives() {
  return (
    <>
      <Wrapper className="!pt-0">
        <p className="mb-10 leading-9 md:mb-20 md:text-lg">
          The main goal of more4nature is to trigger transformative change in conservation efforts
          regarding zero pollution, biodiversity protection and deforestation prevention by
          strengthening the role of citizens and communities in environmental compliance assurance.
          To achieve this, we have 5 key objectives:
        </p>
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
                  <AccordionTrigger className="gap-3">
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
