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

const WORK_PACKAGES = [
  {
    name: 'Social dimensions: Empowering citizens in collaborative environmental compliance assurance.',
    description: (
      <p>
        WP1 provides and advances relevant social science approaches and guidance that will help to
        integrate Citizen Generated Data and citizen & community-led actions in environmental
        compliance assurance, triggering transformative change and empowering citizens.
      </p>
    ),
    organization: 'IHE',
  },
  {
    name: 'Technical dimensions: Geospatial modelling with FAIR Citizen Generated Data.',
    description: (
      <p>
        WP1 provides and advances relevant social science approaches and guidance that will help to
        integrate Citizen Generated Data and citizen & community-led actions in environmental
        compliance assurance, triggering transformative change and empowering citizens.
      </p>
    ),
    organization: 'IHE',
  },
  {
    name: 'Case studies on collaborative environmental compliance assurance for zero pollution, biodiversity protection and deforestation prevention.',
    description: (
      <p>
        WP1 provides and advances relevant social science approaches and guidance that will help to
        integrate Citizen Generated Data and citizen & community-led actions in environmental
        compliance assurance, triggering transformative change and empowering citizens.
      </p>
    ),
    organization: 'IHE',
  },
  {
    name: 'Communication, Dissemination and Exploitation.',
    description: (
      <p>
        WP1 provides and advances relevant social science approaches and guidance that will help to
        integrate Citizen Generated Data and citizen & community-led actions in environmental
        compliance assurance, triggering transformative change and empowering citizens.
      </p>
    ),
    organization: 'IHE',
  },
];

export default function WorkPackages() {
  return (
    <div className="bg-grey-800 text-white">
      <Wrapper className="space-y-14">
        <h3 className="text-2xl">Work Packages</h3>
        <div className="relative grid grid-cols-12 gap-4">
          <div className="col-span-2">01/0{WORK_PACKAGES.length}</div>
          <ul className="col-span-10 grid-cols-10 space-y-20">
            {WORK_PACKAGES.map(({ name, description, organization }) => (
              <li key={name}>
                <div className="space-y-8">
                  <h4 className="text-xl">{name}</h4>
                  <Dialog>
                    <DialogTrigger asChild>
                      <DiscoverMoreButton />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{name}</DialogTitle>
                        <DialogDescription>
                          <>
                            <p>Led by {organization}</p>
                            {description}
                          </>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
