'use client';

import { useState } from 'react';

import Case from '@maplibre/maplibre-gl-style-spec/src/expression/definitions/case';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { CaseStudy } from '@/lib/case-studies.service';
import { News } from '@/lib/news.service';
import { PaginatedResult } from '@/lib/paginator';
import queryKeys from '@/lib/query-keys';

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

// function NewsItem({ name, date, description, categories }: News) {
//   return (
//     <div className="grid grid-cols-12 border-t border-t-white/30 py-16 text-white">
//       <span className="col-span-3 uppercase">{formatDate(date)}</span>
//       <div className="col-span-6 space-y-4">
//         <h5 className="text-xl">{name}</h5>
//         {categories?.length > 0 && (
//           <div className="flex gap-4">
//             {categories.map((category) => (
//               <span key={category} className="text-sm">
//                 <Badge className="pointer-events-none">{category}</Badge>
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="col-span-3 flex items-start justify-end">
//         <Dialog>
//           <DialogTrigger asChild>
//             <DiscoverMoreButton />
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>{name}</DialogTitle>
//               <DialogDescription>
//                 <div
//                   className="space-y-4"
//                   dangerouslySetInnerHTML={{
//                     __html: description,
//                   }}
//                 />
//               </DialogDescription>
//             </DialogHeader>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

const PAGE_SIZE = 5;

export default function CaseStudyList({ data }: PaginatedResult<CaseStudy>) {
  const [page, setPage] = useState(0);

  return (
    <>
      <ul>
        {data?.map((news) => (
          <li key={news.name} className="text-red-500">
            {news.name}
          </li>
        ))}
      </ul>
      {/*<Paginator*/}
      {/*  pageIndex={page}*/}
      {/*  pageCount={Math.ceil(*/}
      {/*    (data?.total as NonNullable<PaginatedResult<News>['total']>) / PAGE_SIZE,*/}
      {/*  )}*/}
      {/*  totalPagesToDisplay={6}*/}
      {/*  onPagePrevious={() => {*/}
      {/*    setPage(page - 1);*/}
      {/*  }}*/}
      {/*  onPageNext={() => {*/}
      {/*    setPage(page + 1);*/}
      {/*  }}*/}
      {/*  onPageIndex={(p) => {*/}
      {/*    setPage(p);*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  );
}
