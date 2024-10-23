import Wrapper from '@/components/ui/wrapper';

const MISSION_STRATEGY_STEPS = [
  {
    name: 'Unlocking the Potential of Citizen Science',
    description:
      'Citizen Science is an untapped asset for many authorities and governance. We are working to enable Citizen Science Initiatives to influence policy implementation.',
  },
  {
    name: 'Transforming data into actionable information and knowledge',
    description:
      'We are developing tools to validate citizen generated data, compute indicators for monitoring policies and alert about infringement of regulations.',
  },
  {
    name: 'Speed up the pace of change',
    description:
      'Via large scale demonstration, we validate a set of behavioural best practices and technical tools and promote their adoption beyond the project.\n',
  },
];

export default function MissionStrategy() {
  return (
    <Wrapper className="!pt-0">
      <div className="grid grid-cols-12">
        <div className="col-span-12 space-y-9 lg:col-span-6">
          <h2 className="text-xl font-bold text-grey-800 md:text-2xl">Our mission and strategy</h2>
          <p className="leading-9 md:text-lg">
            We aim to strengthen collaboration and partnerships between citizen science initiatives
            and local, regional and even national authorities in charge of environmental compliance
            assurance and we are achieving it via three main paths:
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
