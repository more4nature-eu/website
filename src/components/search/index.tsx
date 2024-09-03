'use client';

import * as React from 'react';
import { useState } from 'react';

import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import { useDebouncedCallback } from 'use-debounce';

import { cn } from '@/lib/utils';

export default function Search({
  placeholder,
  onChange,
  onClose,
  className,
  autoFocus = false,
  showCloseIconAlways = false,
}: {
  placeholder?: string;
  onChange: (v: string | undefined) => void;
  onClose?: () => void;
  className?: HTMLDivElement['className'] | undefined;
  autoFocus?: HTMLInputElement['autofocus'] | undefined;
  showCloseIconAlways?: boolean | undefined;
}) {
  const [value, setValue] = useState('');

  const debouncedOnChange = useDebouncedCallback((value: string | undefined) => {
    onChange(value);
  }, 150);

  return (
    <div className={cn('flex', className)}>
      <HiOutlineSearch className="h-6 w-6 text-grey-900" />
      <div className="relative flex w-full">
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
          autoFocus={autoFocus}
        />

        <span
          role="button"
          className={cn(
            'absolute right-0 block h-6 w-6 p-1 text-grey-800 hover:text-grey-900 focus:outline-none',
            {
              hidden: value === '' && !showCloseIconAlways,
            },
          )}
          onClick={() => {
            setValue('');
            debouncedOnChange(undefined);
            onClose?.();
          }}
        >
          <HiOutlineX className="text-current" />
        </span>
      </div>
    </div>
  );
}
