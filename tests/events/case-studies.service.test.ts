import {
  CaseStudy,
  CaseStudyService,
  ComplianceType,
  Impact,
  ThematicArea,
} from '@/lib/case-studies.service';

const mockCaseStudies: CaseStudy[] = [
  {
    name: 'Case Study Alpha',
    description: 'Description for Case Study Alpha',
    location: 'Arizona',
    impact: Impact.LOCAL,
    complianceType: ComplianceType.PROMOTING,
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, 'Arizona'],
    citizenScienceInitiatives: ['Initiative 1A', 'Initiative 1B'],
    citizenScienceData: ['Data 1A', 'Data 1B'],
    partner: { name: 'Partner 1', url: 'http://partner1.com' },
  },
  {
    name: 'Beta Study',
    description: 'Description for Beta Study',
    location: 'Brazil',
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.MONITORING,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, 'Brazil'],
    citizenScienceInitiatives: ['Initiative 2A', 'Initiative 2B'],
    citizenScienceData: ['Data 2A', 'Data 2B'],
    partner: { name: 'Partner 2', url: 'http://partner2.com' },
  },
  {
    name: 'Case Study Gamma',
    description: 'Description for Case Study Gamma',
    location: 'Gaza',
    impact: Impact.LOCAL,
    complianceType: ComplianceType.ENFORCEMENT,
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    tags: [Impact.LOCAL, ThematicArea.DEFORESTATION_PREVENTION, 'Gaza'],
    citizenScienceInitiatives: ['Initiative 3A', 'Initiative 3B'],
    citizenScienceData: ['Data 3A', 'Data 3B'],
    partner: { name: 'Partner 3', url: 'http://partner3.com' },
  },
  {
    name: 'Delta Study',
    description: 'Description for Delta Study',
    location: 'Kazakhstan',
    impact: Impact.NATIONAL,
    complianceType: ComplianceType.PROMOTING,
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    tags: [Impact.NATIONAL, ThematicArea.ZERO_POLLUTION, 'Kazakhstan'],
    citizenScienceInitiatives: ['Initiative 4A', 'Initiative 4B'],
    citizenScienceData: ['Data 4A', 'Data 4B'],
    partner: { name: 'Partner 4', url: 'http://partner4.com' },
  },
  {
    name: 'Case Study Epsilon',
    description: 'Description for Case Study Epsilon',
    location: 'Azerbaijan',
    impact: Impact.LOCAL,
    complianceType: ComplianceType.MONITORING,
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    tags: [Impact.LOCAL, ThematicArea.BIODIVERSITY_PROTECTION, 'Azerbaijan'],
    citizenScienceInitiatives: ['Initiative 5A', 'Initiative 5B'],
    citizenScienceData: ['Data 5A', 'Data 5B'],
    partner: { name: 'Partner 5', url: 'http://partner5.com' },
  },
];

describe('CaseStudyService', () => {
  it('should filter case studies by keyword in name', () => {
    const filters = { keyword: 'Alpha' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Case Study Alpha',
        description: 'Description for Case Study Alpha',
        location: 'Arizona',
        impact: Impact.LOCAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.LOCAL, ThematicArea.ZERO_POLLUTION, 'Arizona'],
        citizenScienceInitiatives: ['Initiative 1A', 'Initiative 1B'],
        citizenScienceData: ['Data 1A', 'Data 1B'],
        partner: { name: 'Partner 1', url: 'http://partner1.com' },
      },
    ]);
  });

  it('should filter case studies by keyword in tags', () => {
    const filters = { keyword: 'Brazil' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Beta Study',
        description: 'Description for Beta Study',
        location: 'Brazil',
        impact: Impact.NATIONAL,
        complianceType: ComplianceType.MONITORING,
        thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        tags: [Impact.NATIONAL, ThematicArea.BIODIVERSITY_PROTECTION, 'Brazil'],
        citizenScienceInitiatives: ['Initiative 2A', 'Initiative 2B'],
        citizenScienceData: ['Data 2A', 'Data 2B'],
        partner: { name: 'Partner 2', url: 'http://partner2.com' },
      },
    ]);
  });

  it('should filter case studies by keyword in both name and tags', () => {
    const filters = { keyword: 'Study' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data.length).toBe(5);
  });

  it('should filter case studies by partial keyword in name', () => {
    const filters = { keyword: 'gamm' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Case Study Gamma',
        description: 'Description for Case Study Gamma',
        location: 'Gaza',
        impact: Impact.LOCAL,
        complianceType: ComplianceType.ENFORCEMENT,
        thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
        tags: [Impact.LOCAL, ThematicArea.DEFORESTATION_PREVENTION, 'Gaza'],
        citizenScienceInitiatives: ['Initiative 3A', 'Initiative 3B'],
        citizenScienceData: ['Data 3A', 'Data 3B'],
        partner: { name: 'Partner 3', url: 'http://partner3.com' },
      },
    ]);
  });

  it('should filter case studies by partial keyword in tags', () => {
    const filters = { keyword: 'Ka' };
    const caseStudyService = new CaseStudyService(mockCaseStudies, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        name: 'Delta Study',
        description: 'Description for Delta Study',
        location: 'Kazakhstan',
        impact: Impact.NATIONAL,
        complianceType: ComplianceType.PROMOTING,
        thematicAreas: [ThematicArea.ZERO_POLLUTION],
        tags: [Impact.NATIONAL, ThematicArea.ZERO_POLLUTION, 'Kazakhstan'],
        citizenScienceInitiatives: ['Initiative 4A', 'Initiative 4B'],
        citizenScienceData: ['Data 4A', 'Data 4B'],
        partner: { name: 'Partner 4', url: 'http://partner4.com' },
      },
    ]);
  });
});
