'use client';

import { useState } from 'react';

import DiscoverMoreButton from '@/components/discover-more-button';
import { Paginator } from '@/components/paginator';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import formatDate from '@/utils/date';

const NEWS = [
  {
    name: 'News 1',
    date: '2022-01-01',
    description: '<p>News 1 description</p>',
    categories: ['category 1', 'category 2'],
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur.',
    date: '2022-01-01',
    description: '<p>News 1 description</p>',
    categories: ['category 1', 'category 2'],
  },
  {
    name: 'News 1',
    date: '2022-01-01',
    description: '<p>News 1 description</p>',
    categories: ['category 1', 'category 2'],
  },
];

function NewsItem({ name, date, description, categories }: (typeof NEWS)[number]) {
  return (
    <div className="grid grid-cols-12 border-t border-t-white/30 py-16 text-white">
      <span className="col-span-3 uppercase">{formatDate(date)}</span>
      <div className="col-span-6 space-y-4">
        <h5 className="text-xl">{name}</h5>
        {categories?.length > 0 && (
          <div className="flex gap-4">
            {categories.map((category) => (
              <span key={category} className="text-sm">
                <Badge className="pointer-events-none">{category}</Badge>
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-3 flex items-start justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <DiscoverMoreButton />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              <DialogDescription>
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default function NewsList() {
  const [page, setPage] = useState(1);

  return (
    <>
      <ul>
        {NEWS.map((news) => (
          <li key={news.name}>
            <NewsItem {...news} />
          </li>
        ))}
      </ul>
      <Paginator
        pageIndex={page}
        pageCount={12}
        totalPagesToDisplay={6}
        onPagePrevious={() => {
          setPage(page - 1);
        }}
        onPageNext={() => {
          setPage(page + 1);
        }}
        onPageIndex={(p) => {
          setPage(p);
        }}
      />
    </>
  );
}
