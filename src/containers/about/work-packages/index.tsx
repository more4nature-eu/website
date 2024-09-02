'use client';

import { useEffect, useRef, useState } from 'react';

import { Media } from '@/containers/media';

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
        WP2 takes existing Citizens Generated Data and applies geospatial standards to make it FAIR.
        By increasing the level of data quality, it generates trust to the end-users. Tools are
        created to automatically derive environmental indicators to monitor progress towards and to
        generate (near) real-time infringement alerts for compliance enforcement.
      </p>
    ),
    organization: 'CREAF',
  },
  {
    name: 'Case studies on collaborative environmental compliance assurance for zero pollution, biodiversity protection and deforestation prevention.',
    description: (
      <p>
        WP3 runs 40 case studies to research the transition towards collaborative environmental
        compliance assurance, empowering citizens, communities and Citizen Science Initiatives in
        environmental protection through the integration of their data, knowledge and actions.
      </p>
    ),
    organization: 'EarthWatch',
  },
  {
    name: 'Communication, Dissemination and Exploitation.',
    description: (
      <p>
        WP4 creates impact via the communication, dissemination and exploitation of project results
        to specific target audiences
      </p>
    ),
    organization: 'Vizzuality',
  },
];

function getScrollPositionRelativeToElement(element: HTMLLIElement) {
  const rect = element.getBoundingClientRect();

  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
}

export default function WorkPackages() {
  const [pagePositionY, setPagePositionY] = useState(0);
  const itemsRefs = useRef<HTMLLIElement[]>([]);
  const [itemsBreakpoints, setItemsBreakpoints] = useState<
    {
      start: number;
      end: number;
    }[]
  >([]);
  const [currentWorkPackage, setCurrentWorkPackage] = useState(1);

  useEffect(() => {
    const getPositionY = () => {
      setPagePositionY(window.scrollY);
    };
    window.addEventListener('scroll', getPositionY);

    return () => {
      window.removeEventListener('scroll', getPositionY);
    };
  }, []);

  useEffect(() => {
    if (itemsRefs.current?.length) {
      const newItemsBreakpoints = itemsRefs.current.map((itemRef) => {
        const { top } = getScrollPositionRelativeToElement(itemRef);
        return {
          start: top,
          end: top + itemRef.clientHeight,
        };
      });
      setItemsBreakpoints(newItemsBreakpoints);
    }
  }, []);

  useEffect(() => {
    itemsBreakpoints.forEach((item, index) => {
      if (pagePositionY >= item.start && pagePositionY <= item.end) {
        setCurrentWorkPackage(index + 1);
      }
    });
  }, [itemsBreakpoints, pagePositionY]);

  return (
    <div className="bg-grey-800 text-white">
      <Wrapper className="space-y-8 lg:space-y-14">
        <h3 className="text-xl lg:text-2xl">Work Packages</h3>
        <Media lessThan="md">
          <ul className="col-span-10 grid-cols-10 space-y-10">
            {WORK_PACKAGES.map(({ name, description, organization }, index) => (
              <li
                key={name}
                // @ts-expect-error fix later
                ref={(el) => (itemsRefs.current[index] = el as NonNullable<typeof el>)}
              >
                <div className="space-y-8">
                  <div className="flex flex-col space-y-2">
                    <div>
                      <span className="text-xl">0{index + 1}</span>
                      <span className="text-white/30">/0{WORK_PACKAGES.length}</span>
                    </div>
                    <h4 className="text-lg">{name}</h4>
                  </div>
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
        </Media>
        <Media greaterThanOrEqual="md">
          <div className="relative grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <span className="sticky top-0 pt-10">
                <span className="text-xl">0{currentWorkPackage}</span>
                <span className="text-white/30">/0{WORK_PACKAGES.length}</span>
              </span>
            </div>
            <ul className="col-span-10 grid-cols-10 space-y-20 pt-10">
              {WORK_PACKAGES.map(({ name, description, organization }, index) => (
                <li
                  key={name}
                  // @ts-expect-error fix later
                  ref={(el) => (itemsRefs.current[index] = el as NonNullable<typeof el>)}
                >
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
        </Media>
      </Wrapper>
    </div>
  );
}
