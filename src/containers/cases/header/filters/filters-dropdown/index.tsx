import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import FiltersContent from '@/containers/cases/header/filters/filters-dropdown/content';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function FiltersDropdown() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="group space-x-2 border-2 border-grey-800 hover:bg-grey-800 hover:text-white data-[state=open]:bg-grey-800 data-[state=open]:text-white"
        >
          <span>Filters</span>
          <HiOutlineChevronUp className="hidden h-5 w-5 text-current group-data-[state=open]:block" />
          <HiOutlineChevronDown className="h-5 w-5 text-current group-data-[state=open]:hidden" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="relative h-[375px] w-[455px] rounded-none border-grey-800 bg-grey-800 p-10 text-white"
        sideOffset={26}
      >
        <FiltersContent />
      </PopoverContent>
    </Popover>
  );
}
