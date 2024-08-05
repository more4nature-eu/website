import AnimatedCounter from '@/components/animated-counter';
import { SocialMenu } from '@/components/ui/social-menu';
import Wrapper from '@/components/ui/wrapper';

const COMMUNITY_NUMBERS = [
  {
    description: 'Cases worldwide',
    quantity: 40,
  },
  {
    description: 'Authorities and  national agencies',
    quantity: 98,
  },
  {
    description: 'Citizen Science Initiatives',
    quantity: 160,
  },
];

export default function Community() {
  return (
    <>
      <div className="bg-green-500 bg-[url('/images/lines.svg')] bg-right-top bg-no-repeat">
        <Wrapper>
          <div className="grid grid-cols-12">
            <div className="col-span-9 space-y-9 xl:col-span-5">
              <h2 className="text-xl font-bold text-grey-800 md:text-2xl">
                Who we are working with
              </h2>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-6 py-16 md:grid-cols-12 md:grid-rows-none">
            {COMMUNITY_NUMBERS.map(({ quantity, description }) => (
              <figure key={description} className="border-t-2 border-t-grey-800 md:col-span-4">
                <h4 className="py-9 text-3xl">
                  <AnimatedCounter from={0} to={quantity} />
                </h4>
                <figcaption className="text-lg leading-9">{description}</figcaption>
              </figure>
            ))}
          </div>
        </Wrapper>
      </div>
      <div className="bg-grey-800 py-16">
        <div className="container space-y-9">
          <h3 className="text-center text-xl text-white md:text-2xl">Join our community</h3>
          <SocialMenu className="justify-center" />
        </div>
      </div>
      <div className="min-h-[452px] bg-[url('/images/norway-lake.webp')] bg-cover bg-center bg-no-repeat" />
    </>
  );
}
