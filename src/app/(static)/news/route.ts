// src/app/(static)/news/route.ts

import { NextRequest, NextResponse } from 'next/server';

import { NewsService } from '@/lib/news.service';

import NEWS from '@/data/news';

export async function GET(request: NextRequest) {
  /**
   * @note Following the underlying express engine's behavior, array query params must be sent as multiple query params with the same key.
   *       For example, to send the categories ['1', '2'], the query params should be `?categories=1&categories=2`.
   *       So we can properly parse the query params into an array using the native URLSearchParams API.
   */
  const { searchParams } = request.nextUrl;

  const { filters, paginationFilters } = NewsService.extractFilters(searchParams);

  const newsService = new NewsService(NEWS, filters, paginationFilters);
  const result = newsService.searchNews();

  return NextResponse.json(result);
}
