import { ExtractAtomValue } from 'jotai/index';

import { ComplianceType, ThematicArea, Impact, Location } from '@/lib/case-studies.service';

import { filtersAtom } from '@/containers/cases/store';

export const FILTERS: {
  name: string;
  key: keyof Omit<ExtractAtomValue<typeof filtersAtom>, 'search'>;
  options: (
    | { label: `${ThematicArea}`; value: `${ThematicArea}` }
    | { label: `${ComplianceType}`; value: `${ComplianceType}` }
    | { label: `${Impact}`; value: `${Impact}` }
    | { label: `${Location}`; value: `${Location}` }
  )[];
}[] = [
  {
    name: 'By thematic area',
    key: 'thematicArea',
    options: [
      {
        label: ThematicArea.ZERO_POLLUTION,
        value: ThematicArea.ZERO_POLLUTION,
      },
      {
        label: ThematicArea.BIODIVERSITY_PROTECTION,
        value: ThematicArea.BIODIVERSITY_PROTECTION,
      },
      {
        label: ThematicArea.DEFORESTATION_PREVENTION,
        value: ThematicArea.DEFORESTATION_PREVENTION,
      },
    ],
  },
  {
    name: 'By compliance type',
    key: 'complianceType',
    options: [
      {
        label: ComplianceType.PROMOTING,
        value: ComplianceType.PROMOTING,
      },
      {
        label: ComplianceType.MONITORING,
        value: ComplianceType.MONITORING,
      },
      {
        label: ComplianceType.ENFORCEMENT,
        value: ComplianceType.ENFORCEMENT,
      },
    ],
  },
  {
    name: 'By impact',
    key: 'impact',
    options: [
      {
        label: Impact.LOCAL,
        value: Impact.LOCAL,
      },
      {
        label: Impact.NATIONAL,
        value: Impact.NATIONAL,
      },
    ],
  },
  {
    name: 'By location',
    key: 'location',
    options: [
      {
        label: Location.EUROPE,
        value: Location.EUROPE,
      },
      {
        label: Location.ASIA,
        value: Location.ASIA,
      },
      {
        label: Location.AFRICA,
        value: Location.AFRICA,
      },
      {
        label: Location.AMERICAS,
        value: Location.AMERICAS,
      },
    ],
  },
];
