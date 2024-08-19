'use client';

import * as React from 'react';
import { useState } from 'react';

import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import { useDebouncedCallback } from 'use-debounce';

import { cn } from '@/lib/utils';

export default function Search({
  placeholder,
  onChange,
}: {
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  const [value, setValue] = useState('');

  const debouncedOnChange = useDebouncedCallback((value: string) => {
    onChange(value);
  }, 150);

  return (
    <div className="flex">
      <HiOutlineSearch className="h-6 w-6 text-grey-900" />
      <div className="relative flex">
        <input
          className={cn(
            'flex w-[310px] items-center bg-white pl-6 pr-6 placeholder:text-grey-600 focus:outline-none',
          )}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
            debouncedOnChange(e.target.value);
          }}
          value={value}
        />

        <span
          role="button"
          className={cn(
            'absolute right-0 block h-6 w-6 p-1 text-grey-800 hover:text-grey-900 focus:outline-none',
            {
              hidden: value === '',
            },
          )}
          onClick={() => {
            setValue('');
          }}
        >
          <HiOutlineX className="text-current" />
        </span>
      </div>
    </div>
  );
}
