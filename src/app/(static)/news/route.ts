// src/app/(static)/news/route.ts

import { NextRequest, NextResponse } from 'next/server';

import { NewsService } from '@/lib/news.service';

import NEWS from '@/data/news';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const { filters, paginationFilters } = NewsService.extractFilters(searchParams);

  const newsService = new NewsService(NEWS, filters, paginationFilters);
  const result = newsService.searchNews();

  return NextResponse.json(result);
}
