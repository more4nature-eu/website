export type SearchParams = {
  page?: number;
  pageSize?: number;
};

export type PaginatedResult<T> = {
  data: T[];
  total?: number;
  page?: number;
  pageSize?: number;
};

export class Paginator<T> {
  protected items: T[];

  constructor(
    items: T[],
    private params?: SearchParams,
  ) {
    this.items = items;
  }

  paginate(items: T[]): PaginatedResult<T> {
    if (!this.params || this.params.page === undefined || this.params.pageSize === undefined) {
      return {
        data: items,
        total: items.length,
      };
    }

    const page = this.params.page;
    const pageSize = this.params.pageSize;
    const offset = (page - 1) * pageSize;
    const paginatedItems = items.slice(offset, offset + pageSize);

    return {
      data: paginatedItems,
      total: items.length,
      page,
      pageSize,
    };
  }

  static extractPaginationFilters(searchParams: URLSearchParams): SearchParams {
    const filters: SearchParams = {
      page: searchParams.get('page') ? Number(searchParams.get('page')) : undefined,
      pageSize: searchParams.get('pageSize') ? Number(searchParams.get('pageSize')) : undefined,
    };
    return filters;
  }
}
