import { useCallback, useState } from 'react';

import { useSetAtom } from 'jotai/index';
import { HiOutlineTrash, HiOutlineX } from 'react-icons/hi';

import { FILTERS } from '@/containers/cases/header/filters/filters-dropdown/constants';
import { filtersAtom, INITIAL_FILTERS_STATE } from '@/containers/cases/store';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function FiltersContent({
  onSetFiltersDone,
  onClearFiltersDone,
}: {
  onSetFiltersDone?: () => void;
  onClearFiltersDone?: () => void;
}) {
  const [filters, setFilters] = useState(INITIAL_FILTERS_STATE);
  const setGlobalFilters = useSetAtom(filtersAtom);

  const onClearFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS_STATE);
    setGlobalFilters(INITIAL_FILTERS_STATE);
    onClearFiltersDone?.();
  }, [setGlobalFilters, onClearFiltersDone]);

  const onApplyFilters = useCallback(() => {
    setGlobalFilters((prev) => ({
      ...prev,
      ...filters,
    }));
    onSetFiltersDone?.();
  }, [setGlobalFilters, filters, onSetFiltersDone]);

  return (
    <div className="h-full bg-grey-800 text-white">
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
                      data-active={filters[key]?.includes(option.value)}
                      onClick={() => {
                        // @ts-expect-error to type
                        if (filters[key].includes(option.value)) return null;

                        setFilters((prev) => ({
                          ...prev,
                          // @ts-expect-error to type
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
                              // @ts-expect-error to type
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
    </div>
  );
}
