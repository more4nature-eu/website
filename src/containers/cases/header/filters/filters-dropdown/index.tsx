import { useCallback, useState } from 'react';

import { ExtractAtomValue, useSetAtom } from 'jotai';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineTrash,
  HiOutlineX,
} from 'react-icons/hi';

import { filtersAtom } from '@/containers/cases/store';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';

import { FILTERS } from './constants';

const INITIAL_FILTERS_STATE: Omit<ExtractAtomValue<typeof filtersAtom>, 'search'> = {
  complianceType: [],
  impact: [],
  location: [],
  thematicArea: [],
};

export default function FiltersDropdown() {
  const [filters, setFilters] = useState(INITIAL_FILTERS_STATE);
  const setGlobalFilters = useSetAtom(filtersAtom);

  const onClearFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS_STATE);
  }, []);

  const onApplyFilters = useCallback(() => {
    setGlobalFilters((prev) => ({
      ...prev,
      ...filters,
    }));
  }, [setGlobalFilters, filters]);

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
        <ScrollArea className="h-[calc(100%-80px)] pr-2">
          <div className="space-y-4">
            {FILTERS.map(({ name, key, options }) => (
              <div key={key} className="space-y-4">
                <h5>{name}</h5>
                <ul className="flex flex-wrap gap-4">
                  {options.map((option) => (
                    <li key={option.value}>
                      <Badge
                        // @ts-expect-error to type
                        data-active={filters[key].includes(option.value)}
                        onClick={() => {
                          // @ts-expect-error to type
                          if (filters[key].includes(option.value)) return null;

                          setFilters((prev) => ({
                            ...prev,
                            [key]: [...prev[key], option.value],
                          }));
                        }}
                        className="space-x-1"
                      >
                        <span>{option.label}</span>
                        {/*// @ts-expect-error to type */}
                        {filters[key].includes(option.value) && (
                          <HiOutlineX
                            className="ml-1 h-4 w-4 text-current"
                            onClick={() => {
                              setFilters((prev) => ({
                                ...prev,
                                [key]: prev[key].filter((v) => v !== option.value),
                              }));
                            }}
                          />
                        )}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="fixed bottom-0 left-0 w-full border-t border-t-grey-600 bg-grey-800 p-5 text-white">
          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="link"
              className="group space-x-2 text-gray-500 hover:text-white"
              onClick={onClearFilters}
            >
              <HiOutlineTrash className="h-6 w-6 text-current" />
              <span className="underline">Clear filters</span>
            </Button>
            <Button type="button" variant="secondary" onClick={onApplyFilters}>
              Apply filters
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
