'use client';

import CountryFlag from 'react-country-flag';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';
import { HiOutlineExternalLink, HiOutlineXCircle } from 'react-icons/hi';

import { ThematicArea, URLink } from '@/lib/case-studies.service';
import { CaseStudy } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import { Media } from '@/containers/media';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

function renderItem(item: string | URLink) {
  if (typeof item === 'string') {
    return <span dangerouslySetInnerHTML={{ __html: item }} />;
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 underline"
    >
      <span>{item.title}</span> <HiOutlineExternalLink className="h-[20px] w-[20px] shrink-0" />
    </a>
  );
}

function getThematicStyle(thematicArea: CaseStudy['thematicAreas']) {
  if (thematicArea?.length > 1) return 'bg-grey-500';

  switch (thematicArea?.[0]) {
    case ThematicArea.ZERO_POLLUTION:
      return 'bg-blue-500';
    case ThematicArea.DEFORESTATION_PREVENTION:
      return 'bg-green-500';
    case ThematicArea.BIODIVERSITY_PROTECTION:
      return 'bg-orange-500';
    default:
      return 'bg-grey-500';
  }
}

export default function CaseDetailSidebar() {
  const { id } = useParams();

  const { data, isSuccess } = useQuery({
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

  if (!isSuccess) return null;

  const accordionItems = [
    {
      value: 'citizenScienceData',
      title: 'Citizen Science Data',
      data: data?.citizenScienceData || [],
    },
    {
      value: 'complianceNeed',
      title: 'Compliance Need',
      data: data?.complianceNeed || [],
    },
    // Add these when needed:
    // {
    //   value: 'citizenScienceInitiatives',
    //   title: 'Citizen Science Initiatives',
    //   data: data?.citizenScienceInitiatives,
    // },
    // {
    //   value: 'stakeholders',
    //   title: 'Stakeholders',
    //   data: data?.stakeholders,
    // },
    // {
    //   value: 'authorities',
    //   title: 'Authorities',
    //   data: data?.authorities,
    // },
  ];

  return (
    <ScrollArea className="h-full flex-1">
      <div
        className={`flex flex-col items-start space-y-8 ${getThematicStyle(data?.thematicAreas)} px-4 pb-10 pt-4 md:p-[50px]`}
      >
        <Media greaterThanOrEqual="md">
          {(className: string, renderChildren: boolean) =>
            renderChildren ? (
              <Button asChild variant="secondary" className="border border-grey-900 text-white">
                <Link href="/cases">Back</Link>
              </Button>
            ) : (
              <Button
                asChild
                variant="ghost"
                className="absolute right-4 h-auto w-14 p-0 hover:bg-white"
              >
                <Link href="/cases">
                  <HiOutlineXCircle className="h-14 w-14" strokeWidth={1} />
                </Link>
              </Button>
            )
          }
        </Media>
        <div className="space-y-2 pt-8 md:pt-0">
          <h3 className="text-xl">{data?.title}</h3>
          <h4 className="text-lg">{data?.subTheme}</h4>
        </div>

        <div className="flex items-center space-x-2">
          <CountryFlag
            svg
            countryCode={
              data?.location.country.code as NonNullable<CaseStudy['location']['country']['code']>
            }
            aria-label={data?.location.country.name}
            className="!h-[15px] !w-[21px]"
          />
          <span className="text-grey-900">{data?.location.country.name}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-grey-800 px-4 py-10 text-white md:p-[50px]">
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col divide-y divide-white/20"
            defaultValue={accordionItems[0].value}
          >
            {/*<AccordionItem*/}
            {/*  value="citizenScienceInitiatives"*/}
            {/*  className="peer w-full py-5 first:pt-0"*/}
            {/*>*/}
            {/*  <AccordionTrigger>*/}
            {/*    <div className="flex items-center space-x-5">*/}
            {/*      <span className="text-lg font-semibold">Citizen Science Initiatives</span>*/}
            {/*    </div>*/}
            {/*  </AccordionTrigger>*/}
            {/*  <AccordionContent className="leading-9">*/}
            {/*    <ul>*/}
            {/*      {data?.citizenScienceInitiatives.map((item, index) => (*/}
            {/*        <li key={index}>{renderItem(item)}</li>*/}
            {/*      ))}*/}
            {/*    </ul>*/}
            {/*  </AccordionContent>*/}
            {/*</AccordionItem>*/}
            <AccordionItem value="citizenScienceData" className="peer w-full py-5 first:pt-0">
              <AccordionTrigger>
                <div className="flex items-center space-x-5">
                  <span className="text-lg font-semibold">Citizen Science Data</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="leading-9">
                <ul>
                  {data?.citizenScienceData.map((item, index) => (
                    <li key={index}>{renderItem(item)}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="complianceNeed" className="peer w-full py-5 first:pt-0">
              <AccordionTrigger>
                <div className="flex items-center space-x-5">
                  <span className="text-lg font-semibold">Compliance Need</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="leading-9">
                <ul className="space-y-4">
                  {data?.complianceNeed.map((item, index) => (
                    <li key={index}>
                      {typeof item === 'object' && 'impact' in item ? (
                        <>
                          <h4 className="font-semibold">{item.impact.name}</h4>
                          <ul className="space-y-2">
                            {item.impact.list.map((subItem, index) => (
                              <li key={index}>{renderItem(subItem)}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        renderItem(item)
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            {data?.relevantPoliciesLaw && data.relevantPoliciesLaw.length > 0 && (
              <AccordionItem value="relevantPoliciesLaw" className="peer w-full py-5 first:pt-0">
                <AccordionTrigger>
                  <div className="flex items-center space-x-5">
                    <span className="text-lg font-semibold">Relevant policy/laws</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="leading-9">
                  <ul className="space-y-4">
                    {data.relevantPoliciesLaw.map((item, index) => (
                      <li key={index}>
                        {typeof item === 'object' && 'impact' in item ? (
                          <>
                            <h4 className="font-semibold">{item.impact.name}</h4>
                            <ul className="space-y-2">
                              {item.impact.list.map((subItem, index) => (
                                <li key={index}>{renderItem(subItem)}</li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          renderItem(item)
                        )}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
            {/*<AccordionItem value="stakeholders" className="peer w-full py-5 first:pt-0">*/}
            {/*  <AccordionTrigger>*/}
            {/*    <div className="flex items-center space-x-5">*/}
            {/*      <span className="text-lg font-semibold">Stakeholders</span>*/}
            {/*    </div>*/}
            {/*  </AccordionTrigger>*/}
            {/*  <AccordionContent className="leading-9">*/}
            {/*    <ul className="space-y-4">*/}
            {/*      {data?.stakeholders.map((item, index) => (*/}
            {/*        <li key={index}>*/}
            {/*          {typeof item === 'object' && 'impact' in item ? (*/}
            {/*            <>*/}
            {/*              <h4 className="font-semibold">{item.impact.name}</h4>*/}
            {/*              <ul className="space-y-2">*/}
            {/*                {item.impact.list.map((subItem, index) => (*/}
            {/*                  <li key={index}>{renderItem(subItem)}</li>*/}
            {/*                ))}*/}
            {/*              </ul>*/}
            {/*            </>*/}
            {/*          ) : (*/}
            {/*            renderItem(item)*/}
            {/*          )}*/}
            {/*        </li>*/}
            {/*      ))}*/}
            {/*    </ul>*/}
            {/*  </AccordionContent>*/}
            {/*</AccordionItem>*/}
            {/*<AccordionItem value="authorities" className="peer w-full py-5 first:pt-0">*/}
            {/*  <AccordionTrigger>*/}
            {/*    <div className="flex items-center space-x-5">*/}
            {/*      <span className="text-lg font-semibold">Authorities</span>*/}
            {/*    </div>*/}
            {/*  </AccordionTrigger>*/}
            {/*  <AccordionContent className="leading-9">*/}
            {/*    <ul className="space-y-4">*/}
            {/*      {data?.authorities.map((item, index) => (*/}
            {/*        <li key={index}>*/}
            {/*          {typeof item === 'object' && 'impact' in item ? (*/}
            {/*            <>*/}
            {/*              <h4 className="font-semibold">{item.impact.name}</h4>*/}
            {/*              <ul className="space-y-2">*/}
            {/*                {item.impact.list.map((subItem, index) => (*/}
            {/*                  <li key={index}>{renderItem(subItem)}</li>*/}
            {/*                ))}*/}
            {/*              </ul>*/}
            {/*            </>*/}
            {/*          ) : (*/}
            {/*            renderItem(item)*/}
            {/*          )}*/}
            {/*        </li>*/}
            {/*      ))}*/}
            {/*    </ul>*/}
            {/*  </AccordionContent>*/}
            {/*</AccordionItem>*/}
          </Accordion>
          <div>
            <div className="flex flex-col items-start space-y-5 border-t border-t-white py-9">
              <span className="text-lg font-semibold">Theme</span>
              <div className="flex gap-4">
                {data?.thematicAreas.map((theme) => (
                  <Badge key={theme} className="pointer-events-none">
                    {theme}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-5 border-t border-t-white pt-9">
              <span className="text-lg font-semibold">Contact</span>
              <span className="flex items-center space-x-2">
                <a
                  href={data?.contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 underline"
                >
                  <span>{data?.contact.title}</span>
                  <HiOutlineExternalLink className="h-[20px] w-[20px] shrink-0" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
