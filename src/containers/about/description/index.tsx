import Image from 'next/image';

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
    <Wrapper className="space-y-10 lg:space-y-20">
      <div className="space-y-4">
        <p className="uppercase tracking-wide">A Horizon Europe Project</p>
        <h2 className="text-xl font-semibold lg:text-3xl">
          <span className="text-wrap">
            Doing more
            <span className="font-thin">4</span>nature
          </span>
          <span className="text-nowrap"> with citizen science</span>
        </h2>
      </div>
      <div className="space-y-4 lg:grid lg:grid-cols-12 lg:space-y-0">
        <div className="relative lg:col-span-5">
          <Image src={ForestPerson} alt="person in a forest" />
        </div>
        <div className="space-y-4 leading-8 lg:col-span-6 lg:col-start-8">
          <p>
            more4nature is a Horizon Europe project that started in January 2024, ending in December
            2027, formed by a consortium of 21 partners and led by Uta Wehn from IHE Delft.
          </p>
          <Separator className="my-4 bg-grey-800/20" />
          <p>
            more4nature is structured into work packages that reflect the&nbsp;
            <span className="text-nowrap font-bold">socio-technical approach</span> of the project.
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
                    WP1 is dedicated to the social dimensions of empowering citizens and citizen
                    science initiatives in collaborative environmental compliance assurance, while
                    WP2 deals with the technical aspects of these changes. Both WPs support WP3
                    which implements 40 cases (in Europe, Latin America, Asia, and Africa) in
                    collaborative environmental compliance assurance for zero pollution,
                    biodiversity protection, and deforestation prevention in Europe and abroad. In
                    addition, we collaborate with selected LivingLabs and Fab Labs across Europe.
                    WP4 supports the creation of impact via the broad communication, dissemination,
                    and exploitation of more4nature results to specific target audiences.
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
