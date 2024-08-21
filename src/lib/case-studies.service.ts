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

// TODO: Looking to the design, tags should have any value of Impact, ThematicArea and Location. Not sure how to handle this because in the design only countries are shown as location,
//       even having Local as impact. However, for other entities, location has a unknown granularity.
export type Tag = Impact | ThematicArea | Location;
export type Partner = { name: string; url: string };
export enum Location {
  EUROPE = 'Europe',
  AMERICAS = 'Americas',
  ASIA = 'Asia',
  AFRICA = 'Africa',
  OCEANIA = 'Oceania',
}

// TODO: It is not clear if Impact and Compliance and Partner types should be an array of values or a single value.
export type CaseStudy = {
  id: string;
  name: string;
  description: string;
  citizenScienceInitiatives: string[];
  citizenScienceData: string[];
  complianceNeed: string[];
  partner: Partner;
  location: Location;
  impact: Impact;
  complianceType: ComplianceType;
  thematicAreas: ThematicArea[];
  tags: Tag[];
  country: {
    name: string;
    code: string;
  };
  point: Feature<
    Geometry,
    {
      id: string;
      name: string;
      thematicAreas: ThematicArea[];
    }
  >;
};

export type CaseStudyFilters = {
  thematicAreas?: ThematicArea[] | undefined;
  complianceTypes?: ComplianceType[] | undefined;
  impacts?: Impact[] | undefined;
  locations?: Location[] | undefined;
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
        ? this.filters.thematicAreas.every((area) => caseStudy.thematicAreas.includes(area))
        : true;
      const filterByComplianceType = this.filters.complianceTypes
        ? this.filters.complianceTypes.includes(caseStudy.complianceType)
        : true;

      const filterByImpact = this.filters.impacts
        ? this.filters.impacts.includes(caseStudy.impact)
        : true;
      const filterByLocation = this.filters.locations
        ? this.filters.locations.includes(caseStudy.location)
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
        ? searchParams.getAll('locations').map((location) => location as Location)
        : undefined,
      keyword: searchParams.get('keyword') || undefined,
    };
    const paginationFilters = this.extractPaginationFilters(searchParams);
    return { filters, paginationFilters };
  }
}
