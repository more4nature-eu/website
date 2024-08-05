'use client';

import Image from 'next/image';
import Link from 'next/link';

import { HiEnvelopeOpen } from 'react-icons/hi2';

import { SECTIONS } from '@/containers/header';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SocialMenu } from '@/components/ui/social-menu';

export default function Footer() {
  return (
    <div className="bg-grey-800 text-white">
      <footer className="container py-4 md:py-16">
        <div className="flex flex-col gap-5 md:grid md:grid-cols-12 md:gap-9">
          <div className="col-span-6">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/m4n-logo.webp"
                alt="More4Nature logo"
                width={200}
                height={70}
                className="h-auto w-full"
              />
            </Link>
          </div>
          <div className="col-span-6 flex flex-col space-y-9 md:items-end">
            <SocialMenu>
              <li>
                <Button
                  variant="link"
                  size="icon"
                  className="bg-white/20 text-white transition-colors hover:bg-white/35"
                  asChild
                >
                  <a
                    href="mailto:more4nature_project@un-ihe.org"
                    title="mail to more4nature_project@un-ihe.org"
                  >
                    <HiEnvelopeOpen className="h-4 w-4" />
                  </a>
                </Button>
              </li>
            </SocialMenu>
            <ul className="hidden md:space-x-12 xl:flex">
              {SECTIONS.filter(({ name }) => name !== 'Home').map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="hover:underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-10 md:my-5" />
        <div className="flex flex-col gap-5 md:grid md:grid-cols-12 md:gap-9">
          <div className="space-y-10 md:col-span-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="h-10 min-w-[72px] bg-[url('/images/flag-of-europe.svg')] bg-contain bg-no-repeat" />
              <p className="text-2xs">
                This project has received funding from the European Union’s Horizon Europe research
                and innovation programme under grant agreement No. 101133983.
              </p>
            </div>
          </div>
          <div className="col-span-6 space-y-10">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="h-10 min-w-[124px] bg-[url('/images/UKRI_Innovate-UK_Horizontal_white.webp')] bg-contain bg-no-repeat" />
              <p className="text-2xs">
                UK participants in Horizon Europe Project more4nature are supported by UKRI grant
                numbers: 10108638 UNEP-WCMC and 10110989 Earthwatch Europe.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
          <p className="text-xs">
            The project abides to Open Science and FAIR data:{' '}
            <a
              href="https://open-research-europe.ec.europa.eu/"
              title="EU Open Research Repository (Pilot)"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              EU Open Research Repository (Pilot)
            </a>
          </p>
          <ul className="flex gap-4 md:justify-end">
            <li className="inline-flex">
              <Link href="/privacy-policy" className="text-xs underline">
                Privacy Policy
              </Link>
            </li>
            <li className="inline-flex">
              <Link href="/terms-of-service" className="text-xs underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
