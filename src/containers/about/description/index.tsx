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

export default function AboutDescription() {
  return (
    <Wrapper className="space-y-10">
      <div className="space-y-4 md:grid md:grid-cols-12">
        <p className="uppercase tracking-wide md:col-span-6">A Horizon Europe project</p>
        <h2 className="text-xl font-semibold md:col-span-6 md:text-3xl">
          Doing
          <br /> more
          <span className="font-thin">4</span>
          nature with citizen science
        </h2>
      </div>
      <div className="items-end space-y-10 md:grid md:grid-cols-12">
        <div className="relative h-[343px] md:col-span-5 md:h-[525px]">
          <Image src="/images/forest-person.webp" alt="person in forest" fill />
        </div>
        <div className="space-y-4 leading-8 md:col-span-6 md:col-start-8">
          <p>
            more4nature is a Horizon Europe project funded under Food, Bioeconomy Natural Resources,
            Agriculture and Environment that started in January 2024, ending in December 2027,
            formed by a consortium of 21 partners and led by IHE Delft.
          </p>
          <Separator className="my-4 bg-grey-800/20" />
          <p>
            more4nature (10.3030/101133983) is structured into work packages that reflect the&nbsp;
            <span className="font-bold">socio-technical approach</span> of the project.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <DiscoverMoreButton />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>TODO</DialogTitle>
                <DialogDescription>
                  <p>TODO</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Wrapper>
  );
}
