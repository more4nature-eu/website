import Image from 'next/image';

import { FaArrowRight } from 'react-icons/fa6';
import { HiOutlineExternalLink, HiPlus } from 'react-icons/hi';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Wrapper from '@/components/ui/wrapper';

const PARTNERS = [
  {
    name: 'Institute for Water Education',
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias, consequatur
          deleniti dignissimos dolor dolorem dolores earum, error fuga in libero, odit officiis
          praesentium provident quae quod soluta velit!{' '}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias, consequatur
          deleniti dignissimos dolor dolorem dolores earum, error fuga in libero, odit officiis
          praesentium provident quae quod soluta velit!{' '}
        </p>
      </>
    ),
    logo: {
      url: '/images/partners/ihe-delft.webp',
      size: [160, 80],
    },
    url: 'https://www.un-ihe.org/',
  },
  {
    name: 'CREAF',
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias, consequatur
          deleniti dignissimos dolor dolorem dolores earum, error fuga in libero, odit officiis
          praesentium provident quae quod soluta velit!{' '}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias, consequatur
          deleniti dignissimos dolor dolorem dolores earum, error fuga in libero, odit officiis
          praesentium provident quae quod soluta velit!{' '}
        </p>
      </>
    ),
    logo: {
      url: '/images/partners/creaf.webp',
      size: [160, 129],
    },
    url: 'https://www.creaf.cat/',
  },
  {
    name: 'earthwatch',
    description: '',
    logo: {
      url: '/images/partners/earthwatch.webp',
      size: [160, 129],
    },
    url: 'https://earthwatch.org/',
  },
  {
    name: 'earthwatch',
    description: '',
    logo: {
      url: '/images/partners/earthwatch.webp',
      size: [160, 129],
    },
    url: 'https://earthwatch.org/',
  },
  {
    name: 'earthwatch',
    description: '',
    logo: {
      url: '/images/partners/earthwatch.webp',
      size: [160, 129],
    },
    url: 'https://earthwatch.org/',
  },
];

export default function Partners() {
  return (
    <Wrapper className="space-y-10">
      <h3 className="text-xl font-semibold">Partners</h3>
      <p className="text-lg leading-9">
        The more4nature activities are focused on three key thematic areas in environmental
        protection:
      </p>
      <p className="leading-8">
        The multidisciplinary more4nature consortium brings together a unique combination of
        collaborations, with scientific experts from the social sciences, data science and
        technology, and natural sciences, most of whom also have substantial experience with
        hands-on Citizen Science. The consortium combines institutional actors, namely environmental
        agencies and institutions with citizen science initiatives and environmental NGOs practicing
        Citizen Science and intermediaries as well as a network of Fab Labs and Designers and the
        private sector. This enables the consortium to implement its ambitious and truly innovative
        socio-technical approach for large-scale double loop Action Research.
      </p>
      <Separator className="bg-grey-800/30" />
      <ul className="flex flex-wrap divide-grey-800/30 border border-grey-800/30">
        {PARTNERS.map(({ name, description, logo, url }) => (
          <li
            key={name}
            className="flex h-[242px] w-[242px] items-center justify-center bg-blue-500 p-2"
          >
            <div className="relative flex h-full w-full shrink-0 items-center justify-center rounded-full bg-white">
              <Image
                src={logo.url}
                alt={`${name} logo`}
                width={logo.size[0]}
                height={logo.size[1]}
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="absolute bottom-0 right-2 h-14 w-14 rounded-full"
                  >
                    <HiPlus className="h-6 w-6 text-white" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                    <DialogFooter>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={name}
                        className="flex items-center space-x-2 underline"
                      >
                        <span>Visit partner&apos;s website</span>
                        <HiOutlineExternalLink className="h-6 w-6" />
                      </a>
                    </DialogFooter>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
