import { PropsWithChildren, useEffect } from 'react';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import Hamburger from 'hamburger-react';
import { useAtom, useSetAtom } from 'jotai';

import { cn } from '@/lib/utils';

import { menuOpenAtom } from '@/app/store';

import { SECTIONS } from '@/containers/header';

const navItemContainerClass =
  'hover:text-navy-500 relative inline-flex items-center space-x-6 text-xl text-grey-800 2xl:text-4xl' as const;
const NavItem = (props: PropsWithChildren<LinkProps>) => {
  const setOpen = useSetAtom(menuOpenAtom);
  const Text = (
    <>
      <span className="peer block">{props.children}</span>
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-grey-800 transition-all duration-300 peer-hover:w-full" />
    </>
  );

  if (/^https?:\/\//.test(props.href.toString())) {
    return (
      <a
        href={props.href.toString()}
        className={navItemContainerClass}
        onClick={() => {
          setOpen(false);
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Text}
      </a>
    );
  }

  return (
    <Link
      href={props.href}
      className={navItemContainerClass}
      onClick={() => {
        setOpen(false);
      }}
    >
      {Text}
    </Link>
  );
};

export const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useAtom(menuOpenAtom);
  const isCasesPage = pathname === '/cases';

  const handleOpen = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  return (
    <div
      className={cn({
        'pointer-events-none fixed left-0 top-0 z-[60] h-screen w-full overflow-y-auto bg-white opacity-0 transition-all':
          true,
        'pointer-events-auto opacity-100': open,
      })}
    >
      <div
        className={cn('py-4', {
          container: !isCasesPage,
          'py-2 md:py-4': isCasesPage,
        })}
      >
        <div
          className={cn({
            'flex h-[69px] items-center justify-end': true,
            'h-[60px] px-4 md:px-[60px]': isCasesPage,
          })}
        >
          <button
            type="button"
            aria-label="menu"
            className="outline-navy-700 flex items-center justify-center rounded-full border-2 border-transparent bg-grey-800 ring-2 ring-grey-800 transition-colors hover:bg-grey-900"
            onClick={handleOpen}
          >
            <Hamburger color="#FFF" size={24} toggled={open} rounded />
          </button>
        </div>
      </div>

      <div
        className={cn({
          container: !isCasesPage,
          'px-4 md:px-[60px]': isCasesPage,
        })}
      >
        <nav
          className={cn({
            'transition-transform': true,
            '-translate-y-4': !open,
            'translate-y-0': open,
          })}
        >
          <ul className="flex flex-col gap-5 lg:gap-8">
            {SECTIONS.map((item) => (
              <li key={item.href} className="text-right">
                <NavItem href={item.href}>{item.name}</NavItem>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
