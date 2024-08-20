'use client';

import CountryFlag from 'react-country-flag';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { CaseStudy } from '@/lib/case-studies.service';
import queryKeys from '@/lib/query-keys';

import { Button } from '@/components/ui/button';

export default function CaseDetailSidebar() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: queryKeys.studyCases.byId(id as string).queryKey,
    queryFn: async (): Promise<CaseStudy> => {
      try {
        const response = await fetch(`/case-studies/${id}`);

        if (!response.ok) {
          throw new Error('Error fetching case studies');
        }
        return await response.json();
      } catch (err) {
        throw new Error('Error fetching case studies');
      }
    },
  });

  console.log(data);

  return (
    <>
      <div className="flex flex-col space-y-8 bg-orange-500 px-[60px]">
        <Button asChild variant="link">
          <Link href="/cases">Close detail</Link>
        </Button>
        <h3>{data?.name}</h3>

        <CountryFlag
          // className="emojiFlag"
          countryCode={data?.country.code as NonNullable<string>}
          svg
          style={{
            fontSize: '2em',
            lineHeight: '2em',
          }}
          aria-label={data?.country.name}
        />
      </div>
    </>
  );
}
