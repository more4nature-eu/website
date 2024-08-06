import Description from '@/containers/about/description';
import Objectives from '@/containers/about/objectives';
import Partners from '@/containers/about/partners';
import WorkPackages from '@/containers/about/work-packages';

import StaticIntro from '@/components/static-intro';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <>
      <StaticIntro className="bg-[url('/images/twilight.webp')] bg-bottom" />
      <Description />
      <Objectives />
      <WorkPackages />
      <Partners />
      <Separator className="bg-grey-800/30" />
    </>
  );
}
