import Wrapper from '@/components/ui/wrapper';

const MISSION_STRATEGY_STEPS = [
  {
    name: 'Unlocking the potential of citizen science.',
    description:
      'Citizen science is an untapped asset for authorities and governance. We are working to ensure that it informs essential and urgent decisions.',
  },
  {
    name: 'Bridging data and policy gaps',
    description:
      'We want to  ensure that valuable data directly informs essential and urgent decisions at all levels of government, from local to international.',
  },
  {
    name: 'Developing data visualization tools',
    description:
      'Our purpose is developing tools to validate data from citizens, contributing to its incorporation into environmental governance authorities.',
  },
];

export default function MissionStrategy() {
  return (
    <Wrapper className="!pt-0">
      <div className="grid grid-cols-12">
        <div className="col-span-12 space-y-9 lg:col-span-6">
          <h2 className="text-xl font-bold text-grey-800 md:text-2xl">Our mission and strategy</h2>
          <p className="leading-9 md:text-lg">
            We aim to redefine conservation by placing the power of change into the hands of every
            citizen and we are achieving it by three main paths:
          </p>
        </div>
      </div>
      <div className="grid grid-rows-3 gap-6 py-10 md:py-16 lg:grid-cols-12 lg:grid-rows-none">
        {MISSION_STRATEGY_STEPS.map(({ name, description }) => (
          <div
            key={name}
            className="relative space-y-4 border-t-2 border-t-grey-800 before:absolute before:left-0 before:top-[50px] before:block before:h-5 before:w-5 before:rounded-full before:bg-grey-800 md:col-span-4 md:flex md:flex-col md:justify-between md:space-y-0"
          >
            <h3 className="max-w-[235px] py-9 pl-12 text-lg font-bold">{name}</h3>
            <p className="leading-9">{description}</p>
          </div>
        ))}
      </div>
      <div className="min-h-[363px] bg-[url('/images/citizen-science.webp')] bg-cover bg-center bg-no-repeat md:min-h-[615px]" />
    </Wrapper>
  );
}
