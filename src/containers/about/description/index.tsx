import Image from 'next/image';

import { HiOutlineExternalLink } from 'react-icons/hi';

import DiscoverMoreButton from '@/components/discover-more-button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Wrapper from '@/components/ui/wrapper';

import ForestPerson from '../../../../public/images/forest-person.webp';

export default function AboutDescription() {
  return (
    <Wrapper className="space-y-10">
      <div className="space-y-4 lg:grid lg:grid-cols-12">
        <p className="uppercase tracking-wide lg:col-span-6">A Horizon Europe project</p>
        <h2 className="text-xl font-semibold lg:col-span-6 lg:text-3xl">
          Doing
          <br /> more
          <span className="font-thin">4</span>
          nature with citizen science
        </h2>
      </div>
      <div className="items-end space-y-10 lg:grid lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <Image src={ForestPerson} alt="person in a forest" />
        </div>
        <div className="space-y-4 leading-8 lg:col-span-6 lg:col-start-8">
          <p>
            more4nature is a Horizon Europe project that started in January 2024, ending in December
            2027, formed by a consortium of 21 partners and led by IHE Delft.
          </p>
          <Separator className="my-4 bg-grey-800/20" />
          <p>
            more4nature (10.3030/101133983) is structured into work packages that reflect the&nbsp;
            <span className="font-bold">socio-technical approach</span> of the project.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <DiscoverMoreButton className="text-grey-800" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Project structure</DialogTitle>
                <DialogDescription>
                  <p>
                    WP1 is dedicated to the social aspects of empowering citizens and citizen
                    science initiatives in collaborative environmental compliance assurance, while
                    WP2 deals with the technical dimensions of these changes. Both WPs support WP3
                    which implements 40 cases (in Europe, Latin America, Asia and Africa) on
                    collaborative environmental compliance assurance for zero pollution,
                    biodiversity protection and deforestation prevention in Europe and abroad. In
                    addition, we selected LivingLabs and Fab Labs across Europe. WP4 supports the
                    creation of impact via the broad communication, dissemination and exploitation
                    of more4nature results to specific target audiences.
                  </p>
                  <p>
                    To discover more about EU research results,{' '}
                    <a href="https://cordis.europa.eu/" rel="noopener noreferrer" target="_blank">
                      <span className="underline">visit CORDIS</span>
                      <HiOutlineExternalLink className="h-[20px] w-[20px] shrink-0" />
                    </a>
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Wrapper>
  );
}
