// TODO: define how to show the available filters for this entity: show enums, retrieve from data, smart filtering...
//       i.e, location is an available filter but the prop is defined as a string as it is not clear which the available values are.

import { NextRequest, NextResponse } from 'next/server';

import { CaseStudyService } from '@/lib/case-studies.service';

import { CASE_STUDIES } from '@/data/case-studies';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const { filters, paginationFilters } = CaseStudyService.extractFilters(searchParams);
  const caseStudyService = new CaseStudyService(CASE_STUDIES, filters, paginationFilters);
  const result = caseStudyService.searchCaseStudies();

  return NextResponse.json(result);
}
