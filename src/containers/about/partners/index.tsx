'use client';

import Image from 'next/image';

import { HiOutlineExternalLink, HiOutlinePlus } from 'react-icons/hi';

import { PARTNERS } from '@/containers/about/partners/constants';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Wrapper from '@/components/ui/wrapper';

export default function Partners() {
  return (
    <Wrapper className="space-y-10">
      <h3 className="text-xl font-semibold">Partners</h3>
      <p className="leading-8">
        The multidisciplinary more4nature consortium brings together a unique combination of
        collaborations, with scientific experts from the social sciences, data science and
        technology, and natural sciences, most of whom also have substantial experience with
        hands-on Citizen Science. The consortium also consists of institutional actors,
        environmental NGOs practicing Citizen Science, as well as a network of Fab Labs and
        designers and the private sector. This enables the more4nature consortium to implement its
        ambitious and truly innovative approach.
      </p>
      <ul className="grid flex-wrap divide-grey-800/30 border-l border-t border-grey-800/30 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PARTNERS.map(({ name, description, logo, url }) => (
          <li
            key={name}
            className="flex h-[242px] w-full items-center justify-center border-b border-r border-grey-800/30 md:bg-white lg:[&:nth-child(4n)]:border-r"
          >
            <div className="relative flex h-full w-full shrink-0 items-center justify-center rounded-full bg-white">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative flex h-full w-full cursor-pointer items-center justify-center"
                  >
                    <Image
                      src={logo.url}
                      alt={`${name} logo`}
                      width={logo.size[0]}
                      height={logo.size[1]}
                    />
                    <div className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-grey-800 transition-colors hover:bg-grey-900 md:hidden">
                      <HiOutlinePlus className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-white" />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                    <DialogFooter>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={name}
                        className="flex items-center space-x-2 underline"
                      >
                        <span>Visit partner&apos;s website</span>
                        <HiOutlineExternalLink className="h-6 w-6" />
                      </a>
                    </DialogFooter>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
