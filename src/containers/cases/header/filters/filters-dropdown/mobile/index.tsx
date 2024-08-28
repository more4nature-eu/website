import * as React from 'react';

import { HiOutlineSearch, HiOutlineAdjustments } from 'react-icons/hi';

import { Button } from '@/components/ui/button';

export default function MobileFiltersDropdown({
  onClickSearch,
  onClickFilters,
}: {
  onClickSearch: () => void;
  onClickFilters: () => void;
}) {
  return (
    <div className="flex space-x-4">
      <Button
        onClick={onClickSearch}
        variant="ghost"
        className="h-11 w-11 rounded-full border-2 border-grey-800 p-0"
      >
        <HiOutlineSearch className="h-6 w-6 text-grey-900" />
      </Button>
      <Button
        onClick={onClickFilters}
        variant="ghost"
        className="h-11 w-11 rounded-full border-2 border-grey-800 p-0"
      >
        <HiOutlineAdjustments className="h-6 w-6 rotate-90 text-grey-900" />
      </Button>
    </div>
  );
}
