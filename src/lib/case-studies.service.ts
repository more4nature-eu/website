import { Paginator, SearchParams, PaginatedResult } from '@/lib/paginator';

export enum Impact {
  LOCAL = 'Local',
  NATIONAL = 'National',
}

export enum ThematicArea {
  ZERO_POLLUTION = 'Zero Pollution',
  BIODIVERSITY_PROTECTION = 'Biodiversity Protection',
  DEFORESTATION_PREVENTION = 'Deforestation Prevention',
}

export enum ComplianceType {
  PROMOTING = 'Promoting',
  MONITORING = 'Monitoring',
  ENFORCEMENT = 'Enforcement',
}

// TODO: Looking to the design, tags should have any value of Impact, ThematicArea and Location. Not sure how to handle this because in the design only countries are shown as location,
//       even having Local as impact. However, for other entities, location has a unknown granularity.
export type Tag = Impact | ThematicArea | string;
export type Partner = { name: string; url: string };

// TODO: It is not clear if Impact and Compliance and Partner types should be an array of values or a single value.
export type CaseStudy = {
  name: string;
  description: string;
  citizenScienceInitiatives: string[];
  citizenScienceData: string[];
  partner: Partner;
  location: string;
  impact: Impact;
  complianceType: ComplianceType;
  thematicAreas: ThematicArea[];
  tags: Tag[];
};

export class CaseStudyService extends Paginator<CaseStudy> {
  private readonly filters: Partial<CaseStudy & { keyword?: string }>;

  constructor(
    caseStudies: CaseStudy[],
    filters: Partial<CaseStudy & { keyword?: string }>,
    params?: SearchParams,
  ) {
    super(caseStudies, params);
    this.filters = filters || {};
  }

  protected filter(items: CaseStudy[]): CaseStudy[] {
    const keywordRegex = this.filters.keyword ? new RegExp(this.filters.keyword, 'i') : null;

    return items.filter((caseStudy) => {
      const filterByThematicArea = this.filters.thematicAreas
        ? this.filters.thematicAreas.every((area) => caseStudy.thematicAreas.includes(area))
        : true;
      const filterByComplianceType = this.filters.complianceType
        ? caseStudy.complianceType === this.filters.complianceType
        : true;
      const filterByImpact = this.filters.impact ? caseStudy.impact === this.filters.impact : true;
      const filterByLocation = this.filters.location
        ? caseStudy.location.includes(this.filters.location)
        : true;

      const filterByKeyword = keywordRegex
        ? keywordRegex.test(caseStudy.name) || caseStudy.tags.some((tag) => keywordRegex.test(tag))
        : true;

      return (
        filterByThematicArea &&
        filterByComplianceType &&
        filterByImpact &&
        filterByLocation &&
        filterByKeyword
      );
    });
  }

  public searchCaseStudies(): PaginatedResult<CaseStudy> {
    const filteredItems = this.filter(this.items);
    return this.paginate(filteredItems);
  }

  static extractFilters(searchParams: URLSearchParams): {
    filters: Partial<CaseStudy>;
    paginationFilters: SearchParams;
  } {
    const filters: Partial<CaseStudy & { keyword?: string }> = {
      thematicAreas:
        searchParams.getAll('thematicAreas').map((area) => area as ThematicArea) || undefined,
      complianceType: (searchParams.get('complianceType') as ComplianceType) || undefined,
      impact: (searchParams.get('impact') as Impact) || undefined,
      location: searchParams.get('location') || undefined,
      keyword: searchParams.get('keyword') || undefined,
    };
    const paginationFilters = this.extractPaginationFilters(searchParams);
    return { filters, paginationFilters };
  }
}
