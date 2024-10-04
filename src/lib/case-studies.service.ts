import { Feature, Geometry } from 'geojson';

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

export type URLink = { title: string; url: string };

export type Tag = Impact | ThematicArea | Continent | ComplianceType;
export enum Continent {
  EUROPE = 'Europe',
  AMERICAS = 'Americas',
  ASIA = 'Asia',
  AFRICA = 'Africa',
}

export type CaseStudy = {
  id: string;
  title: string;
  subTheme: string;
  citizenScienceInitiatives: (string | URLink)[];
  citizenScienceData: (string | URLink)[];
  complianceNeed: (string | URLink | { impact: { name: Impact; list: (string | URLink)[] } })[];
  stakeholders: (string | URLink | { impact: { name: Impact; list: (string | URLink)[] } })[];
  authorities: (string | URLink | { impact: { name: Impact; list: (string | URLink)[] } })[];
  relevantPoliciesLaw?: (
    | string
    | URLink
    | { impact: { name: Impact; list: (string | URLink)[] } }
  )[];
  contact: URLink;
  impact: Impact[];
  thematicAreas: ThematicArea[];
  tags: Tag[];
  location: {
    continent: Continent;
    country: {
      name: string;
      code: string;
    };
    coordinates: Feature<
      Geometry,
      {
        id: string;
        name: string;
        thematicAreas: ThematicArea[];
      }
    >;
  };
};

export type CaseStudyFilters = {
  thematicAreas?: ThematicArea[] | undefined;
  complianceTypes?: ComplianceType[] | undefined;
  impacts?: Impact[] | undefined;
  locations?: Continent[] | undefined;
  keyword?: string | undefined;
};

export class CaseStudyService extends Paginator<CaseStudy> {
  private readonly filters: CaseStudyFilters;

  constructor(caseStudies: CaseStudy[], filters: CaseStudyFilters, params?: SearchParams) {
    super(caseStudies, params);
    this.filters = filters || ({} as CaseStudyFilters);
  }

  protected filter(items: CaseStudy[]): CaseStudy[] {
    const keywordRegex = this.filters.keyword ? new RegExp(this.filters.keyword, 'i') : null;

    return items.filter((caseStudy) => {
      const filterByThematicArea = this.filters.thematicAreas
        ? this.filters.thematicAreas.some((area) => caseStudy.thematicAreas.includes(area))
        : true;
      const filterByComplianceType = this.filters.complianceTypes
        ? this.filters.complianceTypes.some((compliance) => caseStudy.tags.includes(compliance))
        : true;

      const filterByImpact = this.filters.impacts
        ? this.filters.impacts.some((impact) => caseStudy.impact.includes(impact))
        : true;
      const filterByLocation = this.filters.locations
        ? this.filters.locations.includes(caseStudy.location.continent)
        : true;

      const filterByKeyword = keywordRegex
        ? keywordRegex.test(caseStudy.title) || caseStudy.tags.some((tag) => keywordRegex.test(tag))
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

  public searchById(id: string): CaseStudy | undefined {
    return this.items.find((item) => item.id === id);
  }

  static extractFilters(searchParams: URLSearchParams): {
    filters: CaseStudyFilters;
    paginationFilters: SearchParams;
  } {
    const filters: CaseStudyFilters = {
      thematicAreas: searchParams.getAll('thematicAreas').length
        ? searchParams.getAll('thematicAreas').map((area) => area as ThematicArea)
        : undefined,
      complianceTypes: searchParams.getAll('complianceTypes').length
        ? searchParams
            .getAll('complianceTypes')
            .map((complianceType) => complianceType as ComplianceType)
        : undefined,

      impacts: searchParams.getAll('impacts').length
        ? searchParams.getAll('impacts').map((impact) => impact as Impact)
        : undefined,
      locations: searchParams.getAll('locations').length
        ? searchParams.getAll('locations').map((location) => location as Continent)
        : undefined,
      keyword: searchParams.get('keyword') || undefined,
    };
    const paginationFilters = this.extractPaginationFilters(searchParams);
    return { filters, paginationFilters };
  }
}
