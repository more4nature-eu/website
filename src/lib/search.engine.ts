export type SearchParams = {
  page?: number;
  pageSize?: number;
};

export type PaginatedResult<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};

export class SearchEngine<T> {
  protected items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  protected paginate(items: T[], page?: number, pageSize?: number): Partial<PaginatedResult<T>> {
    if (page === undefined || pageSize === undefined) {
      return {
        data: items,
      };
    }
    const offset = (page - 1) * pageSize;
    const paginatedItems = items.slice(offset, offset + pageSize);
    return {
      data: paginatedItems,
      total: items.length,
      page,
      pageSize,
    };
  }

  search(params: SearchParams): Partial<PaginatedResult<T>> {
    const { page, pageSize } = params;
    return this.paginate(this.items, page, pageSize);
  }
}

export default SearchEngine;
