import { PropsWithChildren } from 'react';

import { FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

const SOCIAL_NETWORKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/more4nature',
    icon: <FaLinkedin className="h-4 w-4" />,
  },
  {
    name: 'X',
    url: 'https://x.com/more4nature',
    icon: <FaXTwitter className="h-4 w-4" />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@more4nature',
    icon: <FaYoutube className="h-4 w-4" />,
  },
];

export const SocialMenu = ({
  children,
  className,
}: PropsWithChildren<{
  className?: HTMLUListElement['className'];
}>) => {
  return (
    <ul className={cn('flex gap-5 md:gap-3', className)}>
      {children}
      {SOCIAL_NETWORKS.map(({ name, url, icon }) => (
        <li key={name}>
          <Button
            variant="link"
            size="icon"
            className="bg-white/20 text-white transition-colors hover:bg-white/35"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
              {icon}
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
};
