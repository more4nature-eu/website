export enum NewsCategory {
  CATEGORY_1 = 'category 1',
  CATEGORY_2 = 'category 2',
  CATEGORY_3 = 'category 3',
  CATEGORY_4 = 'category 4',
}

export type News = {
  name: string;
  date: string;
  description: string;
  categories: NewsCategory[];
};
