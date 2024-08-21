'use client';

import CountryFlag from 'react-country-flag';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { CaseStudy } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const ACCORDION_CONTENT: {
  title: string;
  key: 'citizenScienceInitiatives' | 'citizenScienceData' | 'complianceNeed';
}[] = [
  {
    title: 'Citizen Science Initiatives',
    key: 'citizenScienceInitiatives',
  },
  {
    title: 'Citizen Science Data',
    key: 'citizenScienceData',
  },
  {
    title: 'Compliance Need',
    key: 'complianceNeed',
  },
];

export default function CaseDetailSidebar() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: queryKeys.studyCases.byId(id as string).queryKey,
    queryFn: async (): Promise<CaseStudy> => {
      try {
        const response = await fetch(`/case-studies/${id}`);

        if (!response.ok) {
          throw new Error('Error fetching case study');
        }
        return await response.json();
      } catch (err) {
        throw new Error('Error fetching case study');
      }
    },
  });

  return (
    <ScrollArea className="h-full flex-1">
      <div className="flex flex-col items-start space-y-8 bg-orange-500 p-[50px]">
        <Button asChild variant="ghost" className="border border-grey-900">
          <Link href="/cases">Close detail</Link>
        </Button>
        <h3 className="text-xl">{data?.name}</h3>

        <div className="flex items-center space-x-2">
          <CountryFlag
            svg
            countryCode={data?.country.code as NonNullable<CaseStudy['country']['code']>}
            aria-label={data?.country.name}
            className="!h-[15px] !w-[21px]"
          />
          <span className="text-grey-900">{data?.country.name}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-grey-800 p-[50px] text-white">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col divide-y divide-white/20"
          >
            {ACCORDION_CONTENT.map(({ title, key }) => (
              <AccordionItem key={key} value={title} className="peer w-full py-5 first:pt-0">
                <AccordionTrigger>
                  <div className="flex items-center space-x-5">
                    <span className="text-lg font-semibold">{title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="leading-9">{data?.[key]}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div>
            <div className="flex flex-col items-start space-y-5 border-t border-t-white py-9">
              <span className="text-lg font-semibold">Theme</span>
              <div className="flex gap-4">
                {data?.thematicAreas.map((theme) => <Badge key={theme}>{theme}</Badge>)}
              </div>
            </div>
            <div className="flex flex-col space-y-5 border-t border-t-white pt-9">
              <span className="text-lg font-semibold">Partner</span>
              <span className="flex items-center space-x-2">
                <a
                  href={data?.['partner'].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {data?.['partner'].name}
                </a>
                <HiOutlineExternalLink className="h-[20px] w-[20px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
