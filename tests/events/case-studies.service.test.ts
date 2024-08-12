import {
  CaseStudy,
  CaseStudyService,
  ComplianceType,
  Impact,
  ThematicArea,
  Location,
} from '@/lib/case-studies.service';

const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    name: 'Pioneer Case 1 and 2',
    description: 'Description for Case Study Alpha',
    location: Location.ASIA,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.PROMOTING,
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, Location.ASIA],
    citizenScienceInitiatives: ['Initiative 1A', 'Initiative 1B'],
    citizenScienceData: ['Data 1A', 'Data 1B'],
    partner: { name: 'Partner 1', url: 'http://partner1.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.441795399183874, 55.984683236682784],
      },
      properties: {
        id: '1',
        name: 'Pioneer Case 1 and 2',
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
      },
    },
  },
  {
    id: '2',
    name: 'Pioneer Case 3 and 4',
    description: 'Description for Beta Study',
    location: Location.AMERICAS,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.MONITORING,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.AMERICAS],
    citizenScienceInitiatives: ['Initiative 2A', 'Initiative 2B'],
    citizenScienceData: ['Data 2A', 'Data 2B'],
    partner: { name: 'Partner 2', url: 'http://partner2.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-8.043277825790401, 40.01914953666145],
      },
      properties: {
        id: '2',
        name: 'Pioneer Case 3 and 4',
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
      },
    },
  },
  {
    id: '3',
    name: 'Pioneer Case 5',
    description: 'Description for Case Study Gamma',
    location: Location.AFRICA,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.ENFORCEMENT,
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    tags: [Impact.LOCAL, ThematicArea.DEFORESTATION_PREVENTION, Location.AFRICA],
    citizenScienceInitiatives: ['Initiative 3A', 'Initiative 3B'],
    citizenScienceData: ['Data 3A', 'Data 3B'],
    partner: { name: 'Partner 3', url: 'http://partner3.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4.899829613176121, 52.39353661709069],
      },
      properties: {
        id: '3',
        name: 'Pioneer Case 5',
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
      },
    },
  },
  {
    id: '4',
    name: 'Pioneer Case 6 and 7',
    description: 'Description for Delta Study',
    location: Location.EUROPE,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.PROMOTING,
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    tags: [Impact.NATIONAL, ThematicArea.ZERO_POLLUTION, Location.EUROPE],
    citizenScienceInitiatives: ['Initiative 4A', 'Initiative 4B'],
    citizenScienceData: ['Data 4A', 'Data 4B'],
    partner: { name: 'Partner 4', url: 'http://partner4.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.070817014926126, 58.78746279402633],
      },
      properties: {
        id: '4',
        name: 'Pioneer Case 6 and 7',
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
      },
    },
  },
  {
    id: '5',
    name: 'Pioneer Case 8',
    description: 'Description for Case Study Epsilon',
    location: Location.OCEANIA,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.MONITORING,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.LOCAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.OCEANIA],
    citizenScienceInitiatives: ['Initiative 5A', 'Initiative 5B'],
    citizenScienceData: ['Data 5A', 'Data 5B'],
    partner: { name: 'Partner 5', url: 'http://partner5.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-11.874590438445415, 9.09185585862],
      },
      properties: {
        id: '5',
        name: 'Pioneer Case 8',
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
      },
    },
  },
  {
    id: '6',
    name: 'Pioneer Case 9',
    description: 'Description for Case Study Zeta',
    location: Location.EUROPE,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.ENFORCEMENT,
    thematicAreas: [ThematicArea.ZERO_POLLUTION, ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [
      Impact.LOCAL,
      ThematicArea.ZERO_POLLUTION,
      ThematicArea.BIODIVERSITY_PROTECTION,
      Location.EUROPE,
    ],
    citizenScienceInitiatives: ['Initiative 6A', 'Initiative 6B'],
    citizenScienceData: ['Data 6A', 'Data 6B'],
    partner: { name: 'Partner 6', url: 'http://partner6.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.240924646771024, 45.49272481983484],
      },
      properties: {
        id: '6',
        name: 'Pioneer Case 9',
        thematicAreas: [ThematicArea.ZERO_POLLUTION, ThematicArea.BIODIVERSITY_PROTECTION],
      },
    },
  },
  {
    id: '7',
    name: 'Pioneer Case 10',
    description: 'Description for Case Study Eta',
    location: Location.ASIA,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.PROMOTING,
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    tags: [Impact.NATIONAL, ThematicArea.DEFORESTATION_PREVENTION, Location.ASIA],
    citizenScienceInitiatives: ['Initiative 7A', 'Initiative 7B'],
    citizenScienceData: ['Data 7A', 'Data 7B'],
    partner: { name: 'Partner 7', url: 'http://partner7.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-6.258428722269101, 53.34587913160031],
      },
      properties: {
        id: '7',
        name: 'Pioneer Case 10',
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
      },
    },
  },
  {
    id: '8',
    name: 'Pioneer Case 11',
    description: 'Description for Case Study Theta',
    location: Location.AFRICA,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.MONITORING,
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, Location.AFRICA],
    citizenScienceInitiatives: ['Initiative 8A', 'Initiative 8B'],
    citizenScienceData: ['Data 8A', 'Data 8B'],
    partner: { name: 'Partner 8', url: 'http://partner8.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-6.994805119538429, 52.153970892963315],
      },
      properties: {
        id: '8',
        name: 'Pioneer Case 11',
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
      },
    },
  },
  {
    id: '9',
    name: 'Pioneer Case 12',
    description: 'Description for Case Study Iota',
    location: Location.AMERICAS,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.ENFORCEMENT,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.AMERICAS],
    citizenScienceInitiatives: ['Initiative 9A', 'Initiative 9B'],
    citizenScienceData: ['Data 9A', 'Data 9B'],
    partner: { name: 'Partner 9', url: 'http://partner9.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-7.7693864125233185, 52.28489265784818],
      },
      properties: {
        id: '9',
        name: 'Pioneer Case 12',
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
      },
    },
  },
  {
    id: '10',
    name: 'Pioneer Case 13',
    description: 'Description for Case Study Kappa',
    location: Location.OCEANIA,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.PROMOTING,
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    tags: [Impact.LOCAL, ThematicArea.DEFORESTATION_PREVENTION, Location.OCEANIA],
    citizenScienceInitiatives: ['Initiative 10A', 'Initiative 10B'],
    citizenScienceData: ['Data 10A', 'Data 10B'],
    partner: { name: 'Partner 10', url: 'http://partner10.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.77518886774447, 59.9124148103055],
      },
      properties: {
        id: '10',
        name: 'Pioneer Case 13',
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
      },
    },
  },
  {
    id: '11',
    name: 'Pioneer Case 14',
    description: 'Description for Case Study Lambda',
    location: Location.EUROPE,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.MONITORING,
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    tags: [Impact.NATIONAL, ThematicArea.ZERO_POLLUTION, Location.EUROPE],
    citizenScienceInitiatives: ['Initiative 11A', 'Initiative 11B'],
    citizenScienceData: ['Data 11A', 'Data 11B'],
    partner: { name: 'Partner 11', url: 'http://partner11.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [20.990477226558713, 52.23140447391029],
      },
      properties: {
        id: '11',
        name: 'Pioneer Case 14',
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
      },
    },
  },
  {
    id: '12',
    name: 'Pioneer Case 15',
    description: 'Description for Case Study Mu',
    location: Location.ASIA,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.ENFORCEMENT,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.LOCAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.ASIA],
    citizenScienceInitiatives: ['Initiative 12A', 'Initiative 12B'],
    citizenScienceData: ['Data 12A', 'Data 12B'],
    partner: { name: 'Partner 12', url: 'http://partner12.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.76467838897042, 51.937121018546925],
      },
      properties: {
        id: '12',
        name: 'Pioneer Case 15',
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
      },
    },
  },
  {
    id: '13',
    name: 'Pioneer Case 16',
    description: 'Description for Case Study Nu',
    location: Location.AMERICAS,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.PROMOTING,
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    tags: [Impact.NATIONAL, ThematicArea.DEFORESTATION_PREVENTION, Location.AMERICAS],
    citizenScienceInitiatives: ['Initiative 13A', 'Initiative 13B'],
    citizenScienceData: ['Data 13A', 'Data 13B'],
    partner: { name: 'Partner 13', url: 'http://partner13.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.948881832659551, 58.143415786630904],
      },
      properties: {
        id: '13',
        name: 'Pioneer Case 16',
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
      },
    },
  },
  {
    id: '14',
    name: 'Pioneer Case 17 and 18',
    description: 'Description for Case Study Xi',
    location: Location.AFRICA,
    impact: Impact.LOCAL,
    complianceType: ComplianceType.MONITORING,
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, Location.AFRICA],
    citizenScienceInitiatives: ['Initiative 14A', 'Initiative 14B'],
    citizenScienceData: ['Data 14A', 'Data 14B'],
    partner: { name: 'Partner 14', url: 'http://partner14.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.463768054020553, 56.55809512928662],
      },
      properties: {
        id: '14',
        name: 'Pioneer Case 17 and 18',
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
      },
    },
  },
  {
    id: '15',
    name: 'Pioneer Case 19',
    description: 'Description for Case Study Omicron',
    location: Location.OCEANIA,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.ENFORCEMENT,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.OCEANIA],
    citizenScienceInitiatives: ['Initiative 15A', 'Initiative 15B'],
    citizenScienceData: ['Data 15A', 'Data 15B'],
    partner: { name: 'Partner 15', url: 'http://partner15.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [104.85648556428505, 12.70157454584046],
      },
      properties: {
        id: '15',
        name: 'Pioneer Case 19',
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
      },
    },
  },
  {
    id: '16',
    name: 'Pioneer Case 20',
    description: 'Description for Case Study Omicron',
    location: Location.OCEANIA,
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.ENFORCEMENT,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.OCEANIA],
    citizenScienceInitiatives: ['Initiative 15A', 'Initiative 15B'],
    citizenScienceData: ['Data 15A', 'Data 15B'],
    partner: { name: 'Partner 15', url: 'http://partner15.com' },
    point: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-64.40656063713384, -16.554895031581502],
      },
      properties: {
        id: '16',
        name: 'Pioneer Case 20',
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
      },
    },
  },
];

describe('CaseStudyService', () => {
  it('should filter cases studies by keyword in name', () => {
    const filters = { keyword: 'Alpha' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Case Study Alpha',
        description: 'Description for Case Study Alpha',
        location: Location.ASIA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, Location.ASIA],
        citizenScienceInitiatives: ['Initiative 1A', 'Initiative 1B'],
        citizenScienceData: ['Data 1A', 'Data 1B'],
        partner: { name: 'Partner 1', url: 'http://partner1.com' },
      },
    ]);
  });

  it('should filter cases studies by keyword in tags', () => {
    const filters = { keyword: 'Americas' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Beta Study',
        description: 'Description for Beta Study',
        location: Location.AMERICAS,
        impact: Impact.NATIONAL,
        complianceType: ComplianceType.MONITORING,
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.AMERICAS],
        citizenScienceInitiatives: ['Initiative 2A', 'Initiative 2B'],
        citizenScienceData: ['Data 2A', 'Data 2B'],
        partner: { name: 'Partner 2', url: 'http://partner2.com' },
      },
    ]);
  });

  it('should filter cases studies by keyword in both name and tags', () => {
    const filters = { keyword: 'Study' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data.length).toBe(5);
  });

  it('should filter cases studies by partial keyword in name', () => {
    const filters = { keyword: 'gamm' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Case Study Gamma',
        description: 'Description for Case Study Gamma',
        location: Location.AFRICA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.ENFORCEMENT,
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
        tags: [Impact.LOCAL, ThematicArea.DEFORESTATION_PREVENTION, Location.AFRICA],
        citizenScienceInitiatives: ['Initiative 3A', 'Initiative 3B'],
        citizenScienceData: ['Data 3A', 'Data 3B'],
        partner: { name: 'Partner 3', url: 'http://partner3.com' },
      },
    ]);
  });

  it('should filter cases studies by partial keyword in tags', () => {
    const filters = { keyword: 'Europe' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Delta Study',
        description: 'Description for Delta Study',
        location: Location.EUROPE,
        impact: Impact.NATIONAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.NATIONAL, ThematicArea.ZERO_POLLUTION, Location.EUROPE],
        citizenScienceInitiatives: ['Initiative 4A', 'Initiative 4B'],
        citizenScienceData: ['Data 4A', 'Data 4B'],
        partner: { name: 'Partner 4', url: 'http://partner4.com' },
      },
    ]);
  });
  it('should filter case studies by thematicAreas', () => {
    const filters = { thematicAreas: [ThematicArea.ZERO_POLLUTION] };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Case Study Alpha',
        description: 'Description for Case Study Alpha',
        location: Location.ASIA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, Location.ASIA],
        citizenScienceInitiatives: ['Initiative 1A', 'Initiative 1B'],
        citizenScienceData: ['Data 1A', 'Data 1B'],
        partner: { name: 'Partner 1', url: 'http://partner1.com' },
      },
      {
        name: 'Delta Study',
        description: 'Description for Delta Study',
        location: Location.EUROPE,
        impact: Impact.NATIONAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.NATIONAL, ThematicArea.ZERO_POLLUTION, Location.EUROPE],
        citizenScienceInitiatives: ['Initiative 4A', 'Initiative 4B'],
        citizenScienceData: ['Data 4A', 'Data 4B'],
        partner: { name: 'Partner 4', url: 'http://partner4.com' },
      },
    ]);
  });

  it('should filter case studies by complianceTypes', () => {
    const filters = { complianceTypes: [ComplianceType.MONITORING] };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Beta Study',
        description: 'Description for Beta Study',
        location: Location.AMERICAS,
        impact: Impact.NATIONAL,
        complianceType: ComplianceType.MONITORING,
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.AMERICAS],
        citizenScienceInitiatives: ['Initiative 2A', 'Initiative 2B'],
        citizenScienceData: ['Data 2A', 'Data 2B'],
        partner: { name: 'Partner 2', url: 'http://partner2.com' },
      },
      {
        name: 'Case Study Epsilon',
        description: 'Description for Case Study Epsilon',
        location: Location.OCEANIA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.MONITORING,
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        tags: [Impact.LOCAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.OCEANIA],
        citizenScienceInitiatives: ['Initiative 5A', 'Initiative 5B'],
        citizenScienceData: ['Data 5A', 'Data 5B'],
        partner: { name: 'Partner 5', url: 'http://partner5.com' },
      },
    ]);
  });

  it('should filter case studies by impacts', () => {
    const filters = { impacts: [Impact.LOCAL] };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Case Study Alpha',
        description: 'Description for Case Study Alpha',
        location: Location.ASIA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, Location.ASIA],
        citizenScienceInitiatives: ['Initiative 1A', 'Initiative 1B'],
        citizenScienceData: ['Data 1A', 'Data 1B'],
        partner: { name: 'Partner 1', url: 'http://partner1.com' },
      },
      {
        name: 'Case Study Gamma',
        description: 'Description for Case Study Gamma',
        location: Location.AFRICA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.ENFORCEMENT,
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
        tags: [Impact.LOCAL, ThematicArea.DEFORESTATION_PREVENTION, Location.AFRICA],
        citizenScienceInitiatives: ['Initiative 3A', 'Initiative 3B'],
        citizenScienceData: ['Data 3A', 'Data 3B'],
        partner: { name: 'Partner 3', url: 'http://partner3.com' },
      },
      {
        name: 'Case Study Epsilon',
        description: 'Description for Case Study Epsilon',
        location: Location.OCEANIA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.MONITORING,
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        tags: [Impact.LOCAL, ThematicArea.BIODIVERSITY_PROTECTION, Location.OCEANIA],
        citizenScienceInitiatives: ['Initiative 5A', 'Initiative 5B'],
        citizenScienceData: ['Data 5A', 'Data 5B'],
        partner: { name: 'Partner 5', url: 'http://partner5.com' },
      },
    ]);
  });

  it('should filter case studies by locations', () => {
    const filters = { locations: [Location.ASIA, Location.AFRICA] };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Case Study Alpha',
        description: 'Description for Case Study Alpha',
        location: Location.ASIA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, Location.ASIA],
        citizenScienceInitiatives: ['Initiative 1A', 'Initiative 1B'],
        citizenScienceData: ['Data 1A', 'Data 1B'],
        partner: { name: 'Partner 1', url: 'http://partner1.com' },
      },
      {
        name: 'Case Study Gamma',
        description: 'Description for Case Study Gamma',
        location: Location.AFRICA,
        impact: Impact.LOCAL,
        complianceType: ComplianceType.ENFORCEMENT,
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
        tags: [Impact.LOCAL, ThematicArea.DEFORESTATION_PREVENTION, Location.AFRICA],
        citizenScienceInitiatives: ['Initiative 3A', 'Initiative 3B'],
        citizenScienceData: ['Data 3A', 'Data 3B'],
        partner: { name: 'Partner 3', url: 'http://partner3.com' },
      },
    ]);
  });
});
