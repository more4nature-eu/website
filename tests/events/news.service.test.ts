import { NewsService, News, NewsCategory } from '@/lib/news.service';
import { SearchParams } from '@/lib/paginator';

const mockNews: News[] = [
  {
    name: 'News 1',
    date: '2022-01-01',
    description: '<p>News 1 description</p>',
    categories: [NewsCategory.CATEGORY_1, NewsCategory.CATEGORY_2],
  },
  {
    name: 'News 2',
    date: '2022-02-01',
    description: '<p>News 2 description</p>',
    categories: [NewsCategory.CATEGORY_2],
  },
  {
    name: 'News 3',
    date: '2022-03-01',
    description: '<p>News 3 description</p>',
    categories: [NewsCategory.CATEGORY_1],
  },
  {
    name: 'News 4',
    date: '2022-04-01',
    description: '<p>News 4 description</p>',
    categories: [NewsCategory.CATEGORY_3],
  },
  {
    name: 'News 5',
    date: '2022-05-01',
    description: '<p>News 5 description</p>',
    categories: [NewsCategory.CATEGORY_4],
  },
];

describe('NewsService', () => {
  it('should filter news by name', () => {
    const filters = { name: 'News 1' };
    const newsService = new NewsService(mockNews, filters);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'News 1',
        date: '2022-01-01',
        description: '<p>News 1 description</p>',
        categories: [NewsCategory.CATEGORY_1, NewsCategory.CATEGORY_2],
      },
    ]);
  });

  it('should filter news by date', () => {
    const filters = { date: '2022-02-01' };
    const newsService = new NewsService(mockNews, filters);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'News 2',
        date: '2022-02-01',
        description: '<p>News 2 description</p>',
        categories: [NewsCategory.CATEGORY_2],
      },
    ]);
  });

  it('should filter news by categories', () => {
    const filters = { categories: [NewsCategory.CATEGORY_1] };
    const newsService = new NewsService(mockNews, filters);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'News 1',
        date: '2022-01-01',
        description: '<p>News 1 description</p>',
        categories: [NewsCategory.CATEGORY_1, NewsCategory.CATEGORY_2],
      },
      {
        name: 'News 3',
        date: '2022-03-01',
        description: '<p>News 3 description</p>',
        categories: [NewsCategory.CATEGORY_1],
      },
    ]);
  });

  it('should paginate news', () => {
    const filters = {};
    const paginationParams: SearchParams = { page: 1, pageSize: 2 };
    const newsService = new NewsService(mockNews, filters, paginationParams);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'News 1',
        date: '2022-01-01',
        description: '<p>News 1 description</p>',
        categories: [NewsCategory.CATEGORY_1, NewsCategory.CATEGORY_2],
      },
      {
        name: 'News 2',
        date: '2022-02-01',
        description: '<p>News 2 description</p>',
        categories: [NewsCategory.CATEGORY_2],
      },
    ]);
    expect(result.total).toBe(5);
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(2);
  });

  it('should paginate and filter news', () => {
    const filters = { categories: [NewsCategory.CATEGORY_2] };
    const paginationParams: SearchParams = { page: 1, pageSize: 1 };
    const newsService = new NewsService(mockNews, filters, paginationParams);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'News 1',
        date: '2022-01-01',
        description: '<p>News 1 description</p>',
        categories: [NewsCategory.CATEGORY_1, NewsCategory.CATEGORY_2],
      },
    ]);
    expect(result.total).toBe(2);
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(1);
  });
});
