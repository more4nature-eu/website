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
import Wrapper from '@/components/ui/wrapper';

import M4NGoals from '../../../../public/images/m4n-goals.avif';

export default function Goals() {
  return (
    <div className="bg-grey-800">
      <Wrapper>
        <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-12">
          <div className="col-span-12 space-y-9 text-white md:col-span-8">
            <h2>more4nature aim</h2>
            <p className="text-lg md:text-xl">
              more4nature aims to bring about{' '}
              <strong className="font-bold">transformative change</strong> in environmental
              protection by including citizens and communities as key actors in collaborative
              environmental compliance assurance.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <DiscoverMoreButton />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>more4nature aim</DialogTitle>
                  <DialogDescription>
                    <p>We are facing biodiversity loss, polluted environments and deforestation.</p>
                    <p>
                      Although policies and laws are generally in place to manage environmental
                      resources, environmental compliance assurance is still lacking. More data and
                      information are needed, and we need to improve public awareness and take
                      action to avoid further environmental degradation in terms of pollution of
                      natural resources, biodiversity loss and deforestation.
                    </p>
                    <p>
                      Citizen science initiatives present innovative ways of joint data and
                      knowledge generation (&quot;Citizen Generated Data&quot;) and can empower
                      citizens and communities in environmental protection.
                    </p>
                    <p>
                      More4nature works on institutionalising citizen science in key aspects of
                      environmental compliance assurance, from promotion to monitoring and
                      enforcement.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="md:col-span-4">
            <Image
              src="/images/people.webp"
              width={325}
              height={520}
              alt="m4n-citizens"
              className="h-auto w-auto -translate-y-1/4"
            />
          </div>
        </div>
        <div className="mt-8">
          <Image src={M4NGoals} alt="m4n-goals" width={1974} height={1250} />
        </div>
      </Wrapper>
    </div>
  );
}
