import { NewsCategory, News } from '@/lib/news.service';

const NEWS: News[] = [
  {
    name: 'Joan Maso Pau presents "Empowering Citizens in Collaborative Environmental Compliance Assurance; Promote, Monitor, and Enforce.',
    date: '2024-06-18',
    description:
      '<p>While at the European Space Agency Environmental Crimes Workshop, Joan Maso (CREAF) showcased how more4nature aims to drive impactful change in conservation efforts. The poster highlighted to role of citizen science in strengthening datasets, developing tools to validate citizen science data and making such data available in the Green Deal Data Space.</p>',
    categories: [
      NewsCategory.CONFERENCES,
      NewsCategory.PUBLICATIONS,
      NewsCategory.POLICY_LEGAL,
      NewsCategory.WORLD_NATIONAL_EVENTS,
    ],
  },
];

export default NEWS;
