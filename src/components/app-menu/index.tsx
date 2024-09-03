'use client';

import { motion } from 'framer-motion';
import { Cross as Hamburger } from 'hamburger-react';
import { useAtom } from 'jotai';

import { menuOpenAtom } from '@/app/store';

import { Media } from '@/containers/media';

import { Nav } from '@/components/app-menu/content';

export default function AppMenu() {
  const [open, setOpen] = useAtom(menuOpenAtom);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <div className="relative flex flex-row-reverse items-center gap-3">
        <motion.button
          type="button"
          aria-label="menu"
          className="peer flex items-center justify-center rounded-full border-2 border-white bg-grey-800 outline-white ring-2 ring-grey-800 hover:bg-grey-900"
          onClick={handleOpen}
        >
          <Hamburger color="#FFF" size={24} toggled={open} rounded />
        </motion.button>
        <Media
          greaterThanOrEqual="md"
          className="pointer-events-none top-1/2 text-transparent opacity-0 transition-all duration-300 peer-hover:-translate-x-1/4 peer-hover:opacity-100"
        >
          <span className="uppercase text-white">Menu</span>
        </Media>
      </div>
      <Nav />
    </div>
  );
}
