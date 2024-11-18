import {
  CaseStudyService,
  ComplianceType,
  Impact,
  ThematicArea,
  Continent,
  CaseStudyFilters,
} from '@/lib/case-studies.service';

import { CASE_STUDIES } from '@/data/case-studies';

describe('CaseStudyService', () => {
  it('should filter cases studies by keyword in name', () => {
    const filters = { keyword: 'Citizens Science and collaborative forest monitoring' };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '17',
        title: 'Citizens Science and collaborative forest monitoring',
        subTheme: 'Halting illegal deforestation',
        thematicAreas: ['Deforestation Prevention'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Denmark',
            code: 'DK',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [9.463768054020553, 56.55809512928662],
            },
            properties: {
              id: '17',
              name: 'Citizens Science and collaborative forest monitoring',
              thematicAreas: ['Deforestation Prevention'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Authorities are unable to identify every case of illegal deforestation. Citizen Generated Data can highlight areas for further investigation so authorities can take action.',
        ],
        stakeholders: [
          'Nature and Biodiversity Division, Danish Ministry of Environment and the general public with 300-400 reports per year.',
        ],
        authorities: [
          'Nature and Biodiversity Division, Danish Ministry of Environment.',
          {
            title: 'Danish Ministry of Environment',
            url: 'https://eng.mim.dk/',
          },
          'The general public with an estimated 300-400 citizens’ report per year.',
        ],
        citizenScienceInitiatives: [
          'Citizens’ reports on national forest interventions & imports of commodities causing deforestation or forest degradation.',
        ],
        citizenScienceData: [
          'Reports on potentially illegal placement of commodities causing deforestation or forest degradation. Reports on forest management interventions in Denmark. Geo-referenced reports on forest management interventions that may be in contradiction with national forest law.',
        ],
        relevantPoliciesLaw: [
          'Danish Forest Law',
          {
            title:
              'EU Deforestation Free Products Regulation (EUDR) Regulation (EU) 2023/1115 on deforestation-free products',
            url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115&qid=1687867231461',
          },
        ],
        contact: {
          title: 'University of Copenhagen',
          url: 'https://www.ku.dk/english/',
        },
        tags: ['Deforestation Prevention', 'Promoting', 'Enforcement', 'Local', 'Europe'],
      },
    ]);
  });

  it('should filter cases studies by keyword in tags', () => {
    const filters = { keyword: 'America' };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '20',
        title: 'Monitoring to protect forests in Concepción',
        subTheme: 'Reducing forest loss from illegal activities and fires',
        thematicAreas: ['Deforestation Prevention'],
        location: {
          continent: 'America',
          country: {
            name: 'Bolivia',
            code: 'BO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-64.40656063713384, -16.554895031581502],
            },
            properties: {
              id: '20',
              name: 'Monitoring to protect forests in Concepción',
              thematicAreas: ['Deforestation Prevention'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          ' Indigenous organizations are largely responsible for compliance assurance within formally recognized collectively titled indigenous territories. Communities can collect citizen science data but need to integrate with other relevant data from Earth Observation and link to relevant national policies.',
        ],
        stakeholders: [
          'The indigenous Chiquitano population, their organisations & authorities; 20 local fire brigades, each with 10 members; Apoyo Para el Campesino-Indígena del Oriente Boliviano (APCOB), local implementing NGO, and FoW.',
        ],
        authorities: [
          {
            title: 'The Territorial Government of Monte Verde (TGMV)',
            url: 'https://www.facebook.com/GTIMVBolivia/',
          },
          'The Municipal Governments of Lomerío',
          'San Javier and Concepción',
          {
            title: 'The Municipal Emergency Operations Centre (COEM)',
            url: 'http://www.defensacivil.gob.bo/web/uploads/images/doc_20210429_140951.pdf',
          },
          {
            title: 'The Forest and Land Operational Unit (UOBT)',
            url: 'https://abt.gob.bo/index.php/institucion/oficina/unidad-operativa-de-bosques-y-tierra',
          },
          'Concepción',
          {
            title:
              'The Departmental Directorate of the Authority of Social Control and Inspection of Forests and Land (ABT) of Santa Cruz',
            url: 'https://abt.gob.bo/',
          },
        ],
        citizenScienceInitiatives: [
          'Members of the Chiquitano indigenous people participate in forest monitoring in the field and reporting on illegal forest activities. Reports are passed on to traditional indigenous authorities and public authorities',
        ],
        citizenScienceData: [
          'Geo-referenced data on forest resources, illegal forest activities and forest fires. Daily reports on forest fires during the fire season August-November during 2019-2022. Freely available satellite images.',
        ],
        relevantPoliciesLaw: [
          'Forest Law Bolivia',
          {
            title:
              'EU Deforestation Free Products Regulation (EUDR) Regulation (EU) 2023/1115 on deforestation-free products',
            url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115&qid=1687867231461',
          },
        ],
        contact: {
          title: 'Forests of the World',
          url: 'https://www.forestsoftheworld.org/',
        },
        tags: ['Deforestation Prevention', 'Promoting', 'Enforcement', 'Local', 'America'],
      },
    ]);
  });

  it('should filter cases studies by keyword in both name and tags', () => {
    const filters = { keyword: 'deforestation' };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data.length).toBe(4);
  });

  it('should filter cases studies by partial keyword in name', () => {
    const filters = { keyword: 'AirAware Woodburning' };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '16',
        title: 'AirAware Woodburning Observatory to complement official monitoring',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Metropolitan Oslo & Kristiansand, Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [10.7539283, 59.9386357],
            },
            properties: {
              id: '16',
              name: 'AirAware Woodburning Observatory to complement official monitoring',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National', 'Local'],
        complianceNeed: [
          'Municipalities seek higher spatial density of data due to limited spatial coverage of reference stations, finding that Citizen Science data for PM2.5 is complementary and can serve as indicative measurement. Due to regulatory monitoring focus on air pollution from traffic, particularly for pollutants from seasonal hotspots due to woodburning (PM2.5). There is also a need to assess the suitability of sensor data for monitoring other air quality parameters than PM2,5, such as SO2.',
        ],
        stakeholders: [
          '>30 citizen scientists, 3-4 neighborhoods, municipalities, research institutes, Norwegian Asthma and Allergy association (NAAF), Sauna associations/companies',
        ],
        authorities: ['Municipalities of Oslo, Bærum, and Kristiansand'],
        citizenScienceInitiatives: [
          'Top-down initiative (Woodburning from household heating and saunas in Metropolitan Oslo) and Bottom-up initiative (Industry in Kristiansand).',
        ],
        citizenScienceData: ['Air Quality (PM 2.5, SO2, and perceived Odor)'],
        relevantPoliciesLaw: ['Ambient air quality directive'],
        contact: {
          title: 'NILU',
          url: 'https://nilu.com/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'National', 'Local', 'Europe'],
      },
    ]);
  });

  it('should filter cases studies by partial keyword in tags', () => {
    const filters: CaseStudyFilters = { keyword: 'Africa' };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '8',
        title: 'A collaborative freshwater monitoring framework for Rokel River Basin',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Africa',
          country: {
            name: 'Rokel River Basin, Sierra Leone',
            code: 'SL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-12.4049506, 9.0350761],
            },
            properties: {
              id: '8',
              name: 'A collaborative freshwater monitoring framework for Rokel River Basin',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'There is a need to integrate citizen science data into SDG 632 reporting, as the first water quality report submitted to the UN in 2021 showed that over half of the sampled areas failed to meet national standards. Spatial and temporal data gaps persist due to lack of technical capacity to integrate citizen science with agency data and manage non-citizen science monitoring data effectively.',
        ],
        stakeholders: ['31 local communities'],
        authorities: ['Sierra Leone National Water Resources Authority'],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and environmental description for the Rokel River Basin Management Plan.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive '],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Africa'],
      },
    ]);
  });
  it('should filter case studies by thematicAreas', () => {
    const filters: CaseStudyFilters = { thematicAreas: [ThematicArea.ZERO_POLLUTION] };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '8',
        title: 'A collaborative freshwater monitoring framework for Rokel River Basin',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Africa',
          country: {
            name: 'Rokel River Basin, Sierra Leone',
            code: 'SL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-12.4049506, 9.0350761],
            },
            properties: {
              id: '8',
              name: 'A collaborative freshwater monitoring framework for Rokel River Basin',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'There is a need to integrate citizen science data into SDG 632 reporting, as the first water quality report submitted to the UN in 2021 showed that over half of the sampled areas failed to meet national standards. Spatial and temporal data gaps persist due to lack of technical capacity to integrate citizen science with agency data and manage non-citizen science monitoring data effectively.',
        ],
        stakeholders: ['31 local communities'],
        authorities: ['Sierra Leone National Water Resources Authority'],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and environmental description for the Rokel River Basin Management Plan.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive '],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Africa'],
      },
      {
        id: '9',
        title:
          'Citizen Science Initiatives in Water Framework Directive monitoring and promotion in the Marzenego River',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Italy',
            code: 'IT',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [12.240924646771024, 45.49272481983484],
            },
            properties: {
              id: '9',
              name: 'Citizen Science Initiatives in Water Framework Directive monitoring and promotion in the Marzenego River',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Current regulatory monitoring has data gaps, especially in tributaries, smaller water bodies, and wetlands, while ongoing Citizen Science Initiatives could provide better spatial coverage and collect necessary data for the Water Framework Directive.',
        ],
        stakeholders: ['Schools, community members, local associations.'],
        authorities: [
          {
            title: 'ARPAV (Environment Agency)',
            url: 'https://www.arpa.veneto.it/',
          },
          {
            title: 'Consorzio di Bonifica (river management consortium)',
            url: 'https://www.bonificabasilicata.it/',
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and qualitative environmental description',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '10',
        title: 'Nitrates down - Biodiversity up, in bays and esturies',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Ireland',
            code: 'IE',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-6.258428722269101, 53.34587913160031],
            },
            properties: {
              id: '10',
              name: 'Nitrates down - Biodiversity up, in bays and esturies',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'Half of Irish Natura 2000 sites with seagrass do not achieve Favourable Conservation Status due to eutrophication and algal blooms, exacerbated by insufficient statutory monitoring of pollution incidents. Citizen Generated Data can provide improved spatial and temporal coverage to detect pollution events.',
        ],
        stakeholders: [
          {
            title: 'Inland Fisheries Ireland',
            url: 'https://www.fisheriesireland.ie/',
          },
          {
            title: 'LAWPRO',
            url: 'https://www.lawpro.ca/',
          },
          'coastal stakeholders with septic tanks, farmers and operators of wastewater treatment',
        ],
        authorities: [],
        citizenScienceInitiatives: [
          {
            title: 'Coastwatch Autumn Survey and Seagrass Campaign',
            url: 'https://www.coastwatch.org/all-ireland-survey',
          },
        ],
        citizenScienceData: [
          'Shore quality indicators based on Zostera beds, opportunistic seaweeds, stream quality and Nitrogen tests.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Coastwatch',
          url: 'https://www.coastwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Enforcement', 'National', 'Europe'],
      },
      {
        id: '11',
        title: 'Tackling slippiness of Marine slipways and sea stairs in Galway',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Galway',
            code: 'IE',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-6.1430735, 53.2782817],
            },
            properties: {
              id: '11',
              name: 'Tackling slippiness of Marine slipways and sea stairs in Galway',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Authorities seek to meet the Bathing Water Directive through sodium hypochlorite bleach disinfection of streams entering bathing waters, prompting a review of bleach policy and a shift towards addressing stream pollution causes and restoring stream health with citizen participation, influenced by Citizen Generated Data and media coverage of data.',
        ],
        stakeholders: [
          'Local authority',
          {
            title: 'LAWPRO',
            url: 'https://www.lawpro.ca/',
          },
          'NGO',
          'citizens',
          'riparian landowners',
        ],
        authorities: [
          {
            title: 'Waterford County Council',
            url: 'https://waterfordcouncil.ie/',
          },
          {
            title: 'Environmental Protection Agency',
            url: 'https://www.epa.ie/',
          },
        ],
        citizenScienceInitiatives: ['Halt Stream Chemical Pollution'],
        citizenScienceData: [
          'Qualitative & quantitative reports from citizens on stream life, chlorine smell test.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Coastwatch',
          url: 'https://www.coastwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '12',
        title: 'Making banned Single Use Plastics disappear',
        subTheme: 'Preventing plastics in the ocean',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Ireland',
            code: 'IE',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-7.7693864125233185, 52.28489265784818],
            },
            properties: {
              id: '12',
              name: 'Making banned Single Use Plastics disappear',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'Coastwatch data pre- and post-2021 ban under the Single-Use Plastics Directive shows reduced single-use plastics in shore litter, but plastic straws, cups, and cutlery still appear on over 10% of surveyed shores. Ad hoc checks reveal ongoing use of plastic cutlery and confusion over cup materials.',
        ],
        stakeholders: ['Coastwatchers from schools, community groups, individual volunteers.'],
        authorities: [
          'The Department of the Environment, Climate and Communications, and for enforcement Local Government.',
        ],
        citizenScienceInitiatives: [
          {
            title: 'Coastwatch Autumn Survey',
            url: 'https://www.coastwatch.org/all-ireland-survey',
          },
        ],
        citizenScienceData: [
          'Coastwatch marine litter data from several hundred sites in 2020, 2021, and 2022.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Coastwatch',
          url: 'https://www.coastwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Enforcement', 'National', 'Europe'],
      },
      {
        id: '13',
        title: 'Together against plastic pollution',
        subTheme: 'Preventing plastics in the ocean',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [10.77518886774447, 59.9124148103055],
            },
            properties: {
              id: '13',
              name: 'Together against plastic pollution',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'There is insufficient statutory monitoring of plastic litter, despite ample available Citizen Generated Data, necessitating the establishment of data standards and guidelines to ensure its relevance and adequacy for environmental compliance assurance concerning beach and sea plastic litter.',
        ],
        stakeholders: [
          'NGOs, industry representatives, policy implementors, citizens representatives (e.g., schools, CSOs).',
        ],
        authorities: [
          {
            title: 'Norwegian Environment Agency',
            url: 'https://www.environmentagency.no/',
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'Keep Norway Beautiful',
            url: 'https://www.norden.org/en/nominee/keep-norway-beautiful-norway',
          },
          {
            title: 'Norwegian Centre against Marine Litter',
            url: 'https://www.marfo.no/en/',
          },
          'initiative Ryddenorge',
        ],
        citizenScienceData: [
          'Data on CS beach litter available from Rydde; 33 tons, 1239 km covered in Norway',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'The Norwegian Institute for Water Research',
          url: 'https://www.niva.no/en',
        },
        tags: ['Zero Pollution', 'Promoting', 'Enforcement', 'National', 'Europe'],
      },
      {
        id: '14',
        title: 'Citizen Science for air quality monitoring and interventions',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Poland',
            code: 'PL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [20.990477226558713, 52.23140447391029],
            },
            properties: {
              id: '14',
              name: 'Citizen Science for air quality monitoring and interventions',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'There is a data gap in official monitoring of air quality, highlighting the need to identify local hotspots to facilitate the development of additional air quality protection measures.',
        ],
        stakeholders: [
          '300 volunteers in PSA network, 1,500 schools in Educational Antismog Network',
        ],
        authorities: [
          {
            title:
              'Poland Chief Environmental Inspectorate, Ministry of Climate and Environment, Environmental Research Institute',
            url: 'https://www.gov.pl/web/climate',
          },
          'local authorities',
        ],
        citizenScienceInitiatives: [
          {
            title: 'Polish Smog Alert',
            url: 'https://www.polishsmogalert.org/',
          },
          {
            title: 'Education Antismog Network',
            url: 'https://en.nask.pl/eng/activities/educational-projects/esa-educational-anti-sm/3418,ESA-Educational-Anti-Smog-Network.html',
          },
          {
            title: 'Airly',
            url: 'https://airly.org/map/en/',
          },
          {
            title: 'LookO2',
            url: 'https://looko2.com/heatmap.php',
          },
          {
            title: 'Kanarek',
            url: 'https://play.google.com/store/apps/details?id=pl.tajchert.canary&hl=en_US',
          },
          {
            title: 'Sensor.Community',
            url: 'https://sensor.community/en/',
          },
        ],
        citizenScienceData: [
          'Real-time data available from >3,500 sensors from Airly, LookO2 and Sensor.Community, and visualized by Kanarek and Sensor.Community',
        ],
        relevantPoliciesLaw: ['Air Quality Directive'],
        contact: {
          title: 'Krakow Smog Alert',
          url: 'https://www.polishsmogalert.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'National', 'Europe'],
      },
      {
        id: '15',
        title: 'Measure Together: air quality sensors to complement official monitoring',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Netherlands',
            code: 'NL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [5.1842349, 52.1185937],
            },
            properties: {
              id: '15',
              name: 'Measure Together: air quality sensors to complement official monitoring',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Finding out how citizen science data can complement official air quality monitoring, for example by creating more detailed maps, making it possible to identify local hot spots to develop additional air quality protection measures.',
        ],
        stakeholders: [],
        authorities: [
          'RIVM',
          {
            title: 'Members of the Clean Air Agreement - Schone Lucht Akkoord',
            url: 'https://www.schoneluchtakkoord.nl/default.aspx',
          },
        ],
        citizenScienceInitiatives: [
          'Many bottom-up and top-down initiatives, many (but not all) of them using Sensor.Community methods',
        ],
        citizenScienceData: [
          'Real time data available from >3000 PM2.5 sensors, but also noise sensors, monthly values NO2 tubes, and open to more.',
        ],
        relevantPoliciesLaw: ['Ambient air quality directive'],
        contact: {
          title: 'National Institute for Public Health and the Environment',
          url: 'https://www.samenmeten.nl/international',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '16',
        title: 'AirAware Woodburning Observatory to complement official monitoring',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Metropolitan Oslo & Kristiansand, Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [10.7539283, 59.9386357],
            },
            properties: {
              id: '16',
              name: 'AirAware Woodburning Observatory to complement official monitoring',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National', 'Local'],
        complianceNeed: [
          'Municipalities seek higher spatial density of data due to limited spatial coverage of reference stations, finding that Citizen Science data for PM2.5 is complementary and can serve as indicative measurement. Due to regulatory monitoring focus on air pollution from traffic, particularly for pollutants from seasonal hotspots due to woodburning (PM2.5). There is also a need to assess the suitability of sensor data for monitoring other air quality parameters than PM2,5, such as SO2.',
        ],
        stakeholders: [
          '>30 citizen scientists, 3-4 neighborhoods, municipalities, research institutes, Norwegian Asthma and Allergy association (NAAF), Sauna associations/companies',
        ],
        authorities: ['Municipalities of Oslo, Bærum, and Kristiansand'],
        citizenScienceInitiatives: [
          'Top-down initiative (Woodburning from household heating and saunas in Metropolitan Oslo) and Bottom-up initiative (Industry in Kristiansand).',
        ],
        citizenScienceData: ['Air Quality (PM 2.5, SO2, and perceived Odor)'],
        relevantPoliciesLaw: ['Ambient air quality directive'],
        contact: {
          title: 'NILU',
          url: 'https://nilu.com/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'National', 'Local', 'Europe'],
      },
    ]);
  });

  it('should filter case studies by complianceTypes', () => {
    const filters: CaseStudyFilters = { complianceTypes: [ComplianceType.MONITORING] };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '1',
        title: 'Citizen Science for the Global Biodiversity Framework',
        subTheme: 'Monitoring and achieving global biodiversity targets',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Denmark',
            code: 'DK',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [8.500257454233855, 57.00032630290456],
            },
            properties: {
              id: '1',
              name: 'Citizen Science for the Global Biodiversity Framework',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'All 195 parties to the Convention on Biological Diversity must track progress towards goals and targets using an agreed monitoring framework. Citizen Generated Data could enhance reports, potentially involved in 51% of 365 proposed indicators.',
        ],
        stakeholders: ['10,000 citizen scientists'],
        authorities: [
          {
            impact: {
              name: 'National',
              list: [
                {
                  title: 'Danish Nature Agency',
                  url: 'https://eng.naturstyrelsen.dk/',
                },
                {
                  title: 'Danish Ministry of Environment',
                  url: 'https://eng.mim.dk/',
                },
              ],
            },
          },
          {
            impact: {
              name: 'Local',
              list: [
                {
                  title: 'Thy National Park',
                  url: 'https://eng.nationalparkthy.dk/',
                },
              ],
            },
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'Arter.dk',
            url: 'https://arter.dk/landing-page',
          },
          {
            title: 'Bugbase',
            url: 'https://bugbase.cs.umn.edu/',
          },
          {
            title: 'DOFbasen',
            url: 'https://dofbasen.dk/',
          },
          {
            title: 'InsektObs',
            url: 'https://www.fynskeinsekter.dk/viewpage.php?page_id=2',
          },
        ],
        citizenScienceData: [
          '20 datasets. Global Biodiversity Framework indicators, e.g.: Change in the quality of coastal water ecosystems over time, Red List Index, and services provided by ecosystems.',
        ],
        relevantPoliciesLaw: [
          'Global Biodiversity Framework; EU Biodiversity Strategy; European Green Deal; EU Farm2Fork Strategy; SDG 14 & 15; Nature Restoration Regulation; upcoming Danish Biodiversity Law.',
        ],
        contact: {
          title: 'The Nordic Agency for Development and Ecology (NORDECO)',
          url: 'https://www.nordeco.dk/',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'National', 'Europe'],
      },
      {
        id: '2',
        title: 'Citizen Science for the Global Biodiversity Framework in Thy National Park',
        subTheme: 'Monitoring and achieving global biodiversity targets',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Thy National Park, Denmark',
            code: 'DK',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [8.3822381, 56.9441364],
            },
            properties: {
              id: '2',
              name: 'Citizen Science for the Global Biodiversity Framework in Thy National Park',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'As a Natura 2000 area, the park must track progress towards Global Biodiversity Framework goals.',
        ],
        stakeholders: ['500 citizen scientists'],
        authorities: [
          {
            impact: {
              name: 'Local',
              list: [
                {
                  title: 'Thy National Park authorities',
                  url: 'https://eng.nationalparkthy.dk/',
                },
              ],
            },
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'Arter.dk',
            url: 'https://arter.dk/landing-page',
          },
          {
            title: 'Bugbase',
            url: 'https://bugbase.cs.umn.edu/',
          },
          {
            title: 'DOFbasen',
            url: 'https://dofbasen.dk/',
          },
          {
            title: 'InsektObs',
            url: 'https://www.fynskeinsekter.dk/viewpage.php?page_id=2',
          },
        ],
        citizenScienceData: [
          '20 datasets. Global Biodiversity Framework indicators, e.g.: Change in the quality of coastal water ecosystems over time, Red List Index, and services provided by ecosystems.',
        ],
        relevantPoliciesLaw: [
          'Global Biodiversity Framework; EU Biodiversity Strategy; European Green Deal; EU Farm2Fork Strategy; SDG 14 & 15; Natura2000 designation; upcoming Danish Biodiversity Law.',
        ],
        contact: {
          title: 'The Nordic Agency for Development and Ecology (NORDECO)',
          url: 'https://www.nordeco.dk/',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '3',
        title:
          'Co-production of an Action Plan for the Conservation & Sustainability of Pollinators',
        subTheme: 'Reversing the decline of pollinators',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Portugal',
            code: 'PT',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-8.043277825790401, 40.01914953666145],
            },
            properties: {
              id: '3',
              name: 'Co-production of an Action Plan for the Conservation & Sustainability of Pollinators',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local', 'National'],
        complianceNeed: [
          {
            impact: {
              name: 'National',
              list: [
                'The lack of a government initiative specifically targeting pollinators and pollination highlights the need for compliance, and Citizen Generated Data (CGD) can inform the transposition of the Nature Restoration regulation to Portugal and provide evidence for future legislation for pollinators conservation in the country.',
              ],
            },
          },
        ],
        stakeholders: [
          {
            impact: {
              name: 'National',
              list: [
                'Around 1100 observers, local communities, municipalities, NGOs, universities, national authorities',
              ],
            },
          },
        ],
        authorities: [
          {
            impact: {
              name: 'National',
              list: [
                {
                  title:
                    'Portuguese Ministry of Environment; Portuguese Institute of Nature Conservation and Forests',
                  url: 'https://icnf.pt/',
                },
              ],
            },
          },
        ],
        citizenScienceInitiatives: [
          {
            title:
              'Censos Borboletas de Portugal (connected to the European Butterfly Monitoring Scheme - eBMS), FitCount (Flower-Insect Timed Count), PolinizAÇÃO - Interações planta-polinizador, More Pollinators, More biodiversity',
            url: 'https://butterfly-monitoring.net/es/portugal-bms',
          },
        ],
        citizenScienceData: [
          'Data available at the Biodiversity4All platform, the Censos Borboletas de Portugal website and the FitCount app',
        ],
        relevantPoliciesLaw: ['Nature Restoration Regulation'],
        contact: {
          title: 'Faculdade de Ciências da Universidade de Lisboa',
          url: 'https://www.fciencias-id.pt/',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'National', 'Europe'],
      },
      {
        id: '4',
        title: 'Citizen science data on pollinators in Oeiras municipality',
        subTheme: 'Reversing the decline of pollinators',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Oeiras, Portugal',
            code: 'PT',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-9.3334943, 38.6933],
            },
            properties: {
              id: '4',
              name: 'Citizen science data on pollinators in Oeiras municipality',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          {
            impact: {
              name: 'Local',
              list: [
                'Oeiras Municipal Plan for Adaptation to Climate Change lacks statutory monitoring for progress. CSIs can provide relevant pollinator data.',
              ],
            },
          },
        ],
        stakeholders: [
          {
            impact: {
              name: 'Local',
              list: ['Local communities, schools, municipalities'],
            },
          },
        ],
        authorities: [
          {
            impact: {
              name: 'Local',
              list: [
                {
                  title: 'Municipality of Oeiras',
                  url: 'https://www.oeiras.pt/',
                },
              ],
            },
          },
        ],
        citizenScienceInitiatives: [
          {
            title:
              'Censos Borboletas de Portugal (connected to the European Butterfly Monitoring Scheme - eBMS), FitCount (Flower-Insect Timed Count), PolinizAÇÃO - Interações planta-polinizador, More Pollinators, More biodiversity',
            url: 'https://butterfly-monitoring.net/es/portugal-bms',
          },
        ],
        citizenScienceData: [
          'Data available at the Biodiversity4All platform, the Censos Borboletas de Portugal website and the FitCount app',
        ],
        relevantPoliciesLaw: ['Habitat directive; Natura 2000.'],
        contact: {
          title: 'Faculdade de Ciências da Universidade de Lisboa',
          url: 'https://www.fciencias-id.pt/',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '5',
        title: 'Citizen Science for pollinators to complement official reporting',
        subTheme: 'Reversing the decline of pollinators',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Netherlands',
            code: 'NL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [4.899829613176121, 52.39353661709069],
            },
            properties: {
              id: '5',
              name: 'Citizen Science for pollinators to complement official reporting',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'Almost all available data on butterflies is based on citizen science, but it could be better integrated into official reporting.',
        ],
        stakeholders: ['800 citizen scientists.'],
        authorities: [
          {
            title: 'Network Ecological Monitoring',
            url: 'https://www.cbs.nl/en-gb/news/2010/48/water-birds-tend-to-migrate-less-far-to-the-southwest/network-ecological-monitoring',
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'Dutch Butterfly Conservation (De Vlinderstichting)',
            url: 'https://www.vlinderstichting.nl/english/',
          },
          {
            title: 'European Butterfly Monitoring Scheme (eBMS)',
            url: 'https://butterfly-monitoring.net/',
          },
        ],
        citizenScienceData: [
          'Trends and indicators based on national data available via Environmental Data Compendium Netherlands and national/provincial reports.',
        ],
        relevantPoliciesLaw: ['Habitat directive; Nature Restoration; Dutch Flora and Fauna Law.'],
        contact: {
          title: 'Netherlands Institute of Ecology (NIOO)',
          url: 'https://nioo.knaw.nl/en',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'National', 'Europe'],
      },
      {
        id: '6',
        title: 'Free-flowing rivers for freshwater and wetland biodiversity',
        subTheme: 'Free-flowing rivers for freshwater and wetland biodiversity',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [10.7539283, 59.9386357],
            },
            properties: {
              id: '6',
              name: 'Free-flowing rivers for freshwater and wetland biodiversity',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'Member states are required to produce a national inventory of current river barriers and prioritize obsolete ones for removal, but thousands of barriers are estimated to be unaccounted for, creating a data gap that can be filled with citizen science.',
        ],
        stakeholders: [
          'River basin district authorities, water managers, anglers, and angling organizations; county governors.',
        ],
        authorities: [
          {
            title: 'Norwegian Environment Agency',
            url: 'https://www.environmentagency.no/',
          },
        ],
        citizenScienceInitiatives: ['AMBER river barrier app.'],
        citizenScienceData: [
          'National / regional dataset available through the AMBER Barrier Atlas.',
        ],
        relevantPoliciesLaw: [
          'National strategy for watercourse restoration 2021-2030, EU Biodiversity Strategy, Kunming-Montral Global Biodiversity Framework - GBF, Nature Restoration Law.',
        ],
        contact: {
          title: 'The Norwegian Institute for Water Research (NIVA)',
          url: 'https://www.niva.no/en',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'National', 'Europe'],
      },
      {
        id: '7',
        title: 'Free-flowing rivers for freshwater and wetland biodiversity in the Rogaland',
        subTheme: 'Free-flowing rivers for freshwater and wetland biodiversity',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Rogaland River Basin District, Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [6.070817014926126, 58.78746279402633],
            },
            properties: {
              id: '7',
              name: 'Free-flowing rivers for freshwater and wetland biodiversity in the Rogaland',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Local areas are required to contribute to national inventory of river barriers. Many barriers are small and unsuitable for aerial surveillance. Citizen science can help to fill data gaps and provide additional information such as whether fish species are able to pass the barriers.',
        ],
        stakeholders: ['Local angler organizations, local catchment managers.'],
        authorities: ['Local catchments (sub-districts)'],
        citizenScienceInitiatives: ['AMBER river barrier app.'],
        citizenScienceData: [
          'National / regional dataset available through the AMBER Barrier Atlas.',
        ],
        relevantPoliciesLaw: [
          'National strategy for watercourse restoration 2021-2030, EU Biodiversity Strategy, (Kunming-Montral Global Biodiversity Framework - GBF, Nature Restoration Law.',
        ],
        contact: {
          title: 'The Norwegian Institute for Water Research (NIVA)',
          url: 'https://www.niva.no/en',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '8',
        title: 'A collaborative freshwater monitoring framework for Rokel River Basin',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Africa',
          country: {
            name: 'Rokel River Basin, Sierra Leone',
            code: 'SL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-12.4049506, 9.0350761],
            },
            properties: {
              id: '8',
              name: 'A collaborative freshwater monitoring framework for Rokel River Basin',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'There is a need to integrate citizen science data into SDG 632 reporting, as the first water quality report submitted to the UN in 2021 showed that over half of the sampled areas failed to meet national standards. Spatial and temporal data gaps persist due to lack of technical capacity to integrate citizen science with agency data and manage non-citizen science monitoring data effectively.',
        ],
        stakeholders: ['31 local communities'],
        authorities: ['Sierra Leone National Water Resources Authority'],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and environmental description for the Rokel River Basin Management Plan.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive '],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Africa'],
      },
      {
        id: '9',
        title:
          'Citizen Science Initiatives in Water Framework Directive monitoring and promotion in the Marzenego River',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Italy',
            code: 'IT',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [12.240924646771024, 45.49272481983484],
            },
            properties: {
              id: '9',
              name: 'Citizen Science Initiatives in Water Framework Directive monitoring and promotion in the Marzenego River',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Current regulatory monitoring has data gaps, especially in tributaries, smaller water bodies, and wetlands, while ongoing Citizen Science Initiatives could provide better spatial coverage and collect necessary data for the Water Framework Directive.',
        ],
        stakeholders: ['Schools, community members, local associations.'],
        authorities: [
          {
            title: 'ARPAV (Environment Agency)',
            url: 'https://www.arpa.veneto.it/',
          },
          {
            title: 'Consorzio di Bonifica (river management consortium)',
            url: 'https://www.bonificabasilicata.it/',
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and qualitative environmental description',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '11',
        title: 'Tackling slippiness of Marine slipways and sea stairs in Galway',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Galway',
            code: 'IE',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-6.1430735, 53.2782817],
            },
            properties: {
              id: '11',
              name: 'Tackling slippiness of Marine slipways and sea stairs in Galway',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Authorities seek to meet the Bathing Water Directive through sodium hypochlorite bleach disinfection of streams entering bathing waters, prompting a review of bleach policy and a shift towards addressing stream pollution causes and restoring stream health with citizen participation, influenced by Citizen Generated Data and media coverage of data.',
        ],
        stakeholders: [
          'Local authority',
          {
            title: 'LAWPRO',
            url: 'https://www.lawpro.ca/',
          },
          'NGO',
          'citizens',
          'riparian landowners',
        ],
        authorities: [
          {
            title: 'Waterford County Council',
            url: 'https://waterfordcouncil.ie/',
          },
          {
            title: 'Environmental Protection Agency',
            url: 'https://www.epa.ie/',
          },
        ],
        citizenScienceInitiatives: ['Halt Stream Chemical Pollution'],
        citizenScienceData: [
          'Qualitative & quantitative reports from citizens on stream life, chlorine smell test.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Coastwatch',
          url: 'https://www.coastwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '14',
        title: 'Citizen Science for air quality monitoring and interventions',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Poland',
            code: 'PL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [20.990477226558713, 52.23140447391029],
            },
            properties: {
              id: '14',
              name: 'Citizen Science for air quality monitoring and interventions',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National'],
        complianceNeed: [
          'There is a data gap in official monitoring of air quality, highlighting the need to identify local hotspots to facilitate the development of additional air quality protection measures.',
        ],
        stakeholders: [
          '300 volunteers in PSA network, 1,500 schools in Educational Antismog Network',
        ],
        authorities: [
          {
            title:
              'Poland Chief Environmental Inspectorate, Ministry of Climate and Environment, Environmental Research Institute',
            url: 'https://www.gov.pl/web/climate',
          },
          'local authorities',
        ],
        citizenScienceInitiatives: [
          {
            title: 'Polish Smog Alert',
            url: 'https://www.polishsmogalert.org/',
          },
          {
            title: 'Education Antismog Network',
            url: 'https://en.nask.pl/eng/activities/educational-projects/esa-educational-anti-sm/3418,ESA-Educational-Anti-Smog-Network.html',
          },
          {
            title: 'Airly',
            url: 'https://airly.org/map/en/',
          },
          {
            title: 'LookO2',
            url: 'https://looko2.com/heatmap.php',
          },
          {
            title: 'Kanarek',
            url: 'https://play.google.com/store/apps/details?id=pl.tajchert.canary&hl=en_US',
          },
          {
            title: 'Sensor.Community',
            url: 'https://sensor.community/en/',
          },
        ],
        citizenScienceData: [
          'Real-time data available from >3,500 sensors from Airly, LookO2 and Sensor.Community, and visualized by Kanarek and Sensor.Community',
        ],
        relevantPoliciesLaw: ['Air Quality Directive'],
        contact: {
          title: 'Krakow Smog Alert',
          url: 'https://www.polishsmogalert.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'National', 'Europe'],
      },
      {
        id: '15',
        title: 'Measure Together: air quality sensors to complement official monitoring',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Netherlands',
            code: 'NL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [5.1842349, 52.1185937],
            },
            properties: {
              id: '15',
              name: 'Measure Together: air quality sensors to complement official monitoring',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Finding out how citizen science data can complement official air quality monitoring, for example by creating more detailed maps, making it possible to identify local hot spots to develop additional air quality protection measures.',
        ],
        stakeholders: [],
        authorities: [
          'RIVM',
          {
            title: 'Members of the Clean Air Agreement - Schone Lucht Akkoord',
            url: 'https://www.schoneluchtakkoord.nl/default.aspx',
          },
        ],
        citizenScienceInitiatives: [
          'Many bottom-up and top-down initiatives, many (but not all) of them using Sensor.Community methods',
        ],
        citizenScienceData: [
          'Real time data available from >3000 PM2.5 sensors, but also noise sensors, monthly values NO2 tubes, and open to more.',
        ],
        relevantPoliciesLaw: ['Ambient air quality directive'],
        contact: {
          title: 'National Institute for Public Health and the Environment',
          url: 'https://www.samenmeten.nl/international',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '16',
        title: 'AirAware Woodburning Observatory to complement official monitoring',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Metropolitan Oslo & Kristiansand, Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [10.7539283, 59.9386357],
            },
            properties: {
              id: '16',
              name: 'AirAware Woodburning Observatory to complement official monitoring',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National', 'Local'],
        complianceNeed: [
          'Municipalities seek higher spatial density of data due to limited spatial coverage of reference stations, finding that Citizen Science data for PM2.5 is complementary and can serve as indicative measurement. Due to regulatory monitoring focus on air pollution from traffic, particularly for pollutants from seasonal hotspots due to woodburning (PM2.5). There is also a need to assess the suitability of sensor data for monitoring other air quality parameters than PM2,5, such as SO2.',
        ],
        stakeholders: [
          '>30 citizen scientists, 3-4 neighborhoods, municipalities, research institutes, Norwegian Asthma and Allergy association (NAAF), Sauna associations/companies',
        ],
        authorities: ['Municipalities of Oslo, Bærum, and Kristiansand'],
        citizenScienceInitiatives: [
          'Top-down initiative (Woodburning from household heating and saunas in Metropolitan Oslo) and Bottom-up initiative (Industry in Kristiansand).',
        ],
        citizenScienceData: ['Air Quality (PM 2.5, SO2, and perceived Odor)'],
        relevantPoliciesLaw: ['Ambient air quality directive'],
        contact: {
          title: 'NILU',
          url: 'https://nilu.com/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'National', 'Local', 'Europe'],
      },
    ]);
  });

  it('should filter case studies by impacts', () => {
    const filters = { impacts: [Impact.LOCAL] };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '2',
        title: 'Citizen Science for the Global Biodiversity Framework in Thy National Park',
        subTheme: 'Monitoring and achieving global biodiversity targets',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Thy National Park, Denmark',
            code: 'DK',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [8.3822381, 56.9441364],
            },
            properties: {
              id: '2',
              name: 'Citizen Science for the Global Biodiversity Framework in Thy National Park',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'As a Natura 2000 area, the park must track progress towards Global Biodiversity Framework goals.',
        ],
        stakeholders: ['500 citizen scientists'],
        authorities: [
          {
            impact: {
              name: 'Local',
              list: [
                {
                  title: 'Thy National Park authorities',
                  url: 'https://eng.nationalparkthy.dk/',
                },
              ],
            },
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'Arter.dk',
            url: 'https://arter.dk/landing-page',
          },
          {
            title: 'Bugbase',
            url: 'https://bugbase.cs.umn.edu/',
          },
          {
            title: 'DOFbasen',
            url: 'https://dofbasen.dk/',
          },
          {
            title: 'InsektObs',
            url: 'https://www.fynskeinsekter.dk/viewpage.php?page_id=2',
          },
        ],
        citizenScienceData: [
          '20 datasets. Global Biodiversity Framework indicators, e.g.: Change in the quality of coastal water ecosystems over time, Red List Index, and services provided by ecosystems.',
        ],
        relevantPoliciesLaw: [
          'Global Biodiversity Framework; EU Biodiversity Strategy; European Green Deal; EU Farm2Fork Strategy; SDG 14 & 15; Natura2000 designation; upcoming Danish Biodiversity Law.',
        ],
        contact: {
          title: 'The Nordic Agency for Development and Ecology (NORDECO)',
          url: 'https://www.nordeco.dk/',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '3',
        title:
          'Co-production of an Action Plan for the Conservation & Sustainability of Pollinators',
        subTheme: 'Reversing the decline of pollinators',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Portugal',
            code: 'PT',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-8.043277825790401, 40.01914953666145],
            },
            properties: {
              id: '3',
              name: 'Co-production of an Action Plan for the Conservation & Sustainability of Pollinators',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local', 'National'],
        complianceNeed: [
          {
            impact: {
              name: 'National',
              list: [
                'The lack of a government initiative specifically targeting pollinators and pollination highlights the need for compliance, and Citizen Generated Data (CGD) can inform the transposition of the Nature Restoration regulation to Portugal and provide evidence for future legislation for pollinators conservation in the country.',
              ],
            },
          },
        ],
        stakeholders: [
          {
            impact: {
              name: 'National',
              list: [
                'Around 1100 observers, local communities, municipalities, NGOs, universities, national authorities',
              ],
            },
          },
        ],
        authorities: [
          {
            impact: {
              name: 'National',
              list: [
                {
                  title:
                    'Portuguese Ministry of Environment; Portuguese Institute of Nature Conservation and Forests',
                  url: 'https://icnf.pt/',
                },
              ],
            },
          },
        ],
        citizenScienceInitiatives: [
          {
            title:
              'Censos Borboletas de Portugal (connected to the European Butterfly Monitoring Scheme - eBMS), FitCount (Flower-Insect Timed Count), PolinizAÇÃO - Interações planta-polinizador, More Pollinators, More biodiversity',
            url: 'https://butterfly-monitoring.net/es/portugal-bms',
          },
        ],
        citizenScienceData: [
          'Data available at the Biodiversity4All platform, the Censos Borboletas de Portugal website and the FitCount app',
        ],
        relevantPoliciesLaw: ['Nature Restoration Regulation'],
        contact: {
          title: 'Faculdade de Ciências da Universidade de Lisboa',
          url: 'https://www.fciencias-id.pt/',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'National', 'Europe'],
      },
      {
        id: '4',
        title: 'Citizen science data on pollinators in Oeiras municipality',
        subTheme: 'Reversing the decline of pollinators',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Oeiras, Portugal',
            code: 'PT',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-9.3334943, 38.6933],
            },
            properties: {
              id: '4',
              name: 'Citizen science data on pollinators in Oeiras municipality',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          {
            impact: {
              name: 'Local',
              list: [
                'Oeiras Municipal Plan for Adaptation to Climate Change lacks statutory monitoring for progress. CSIs can provide relevant pollinator data.',
              ],
            },
          },
        ],
        stakeholders: [
          {
            impact: {
              name: 'Local',
              list: ['Local communities, schools, municipalities'],
            },
          },
        ],
        authorities: [
          {
            impact: {
              name: 'Local',
              list: [
                {
                  title: 'Municipality of Oeiras',
                  url: 'https://www.oeiras.pt/',
                },
              ],
            },
          },
        ],
        citizenScienceInitiatives: [
          {
            title:
              'Censos Borboletas de Portugal (connected to the European Butterfly Monitoring Scheme - eBMS), FitCount (Flower-Insect Timed Count), PolinizAÇÃO - Interações planta-polinizador, More Pollinators, More biodiversity',
            url: 'https://butterfly-monitoring.net/es/portugal-bms',
          },
        ],
        citizenScienceData: [
          'Data available at the Biodiversity4All platform, the Censos Borboletas de Portugal website and the FitCount app',
        ],
        relevantPoliciesLaw: ['Habitat directive; Natura 2000.'],
        contact: {
          title: 'Faculdade de Ciências da Universidade de Lisboa',
          url: 'https://www.fciencias-id.pt/',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '7',
        title: 'Free-flowing rivers for freshwater and wetland biodiversity in the Rogaland',
        subTheme: 'Free-flowing rivers for freshwater and wetland biodiversity',
        thematicAreas: ['Biodiversity Protection'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Rogaland River Basin District, Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [6.070817014926126, 58.78746279402633],
            },
            properties: {
              id: '7',
              name: 'Free-flowing rivers for freshwater and wetland biodiversity in the Rogaland',
              thematicAreas: ['Biodiversity Protection'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Local areas are required to contribute to national inventory of river barriers. Many barriers are small and unsuitable for aerial surveillance. Citizen science can help to fill data gaps and provide additional information such as whether fish species are able to pass the barriers.',
        ],
        stakeholders: ['Local angler organizations, local catchment managers.'],
        authorities: ['Local catchments (sub-districts)'],
        citizenScienceInitiatives: ['AMBER river barrier app.'],
        citizenScienceData: [
          'National / regional dataset available through the AMBER Barrier Atlas.',
        ],
        relevantPoliciesLaw: [
          'National strategy for watercourse restoration 2021-2030, EU Biodiversity Strategy, (Kunming-Montral Global Biodiversity Framework - GBF, Nature Restoration Law.',
        ],
        contact: {
          title: 'The Norwegian Institute for Water Research (NIVA)',
          url: 'https://www.niva.no/en',
        },
        tags: ['Biodiversity Protection', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '8',
        title: 'A collaborative freshwater monitoring framework for Rokel River Basin',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Africa',
          country: {
            name: 'Rokel River Basin, Sierra Leone',
            code: 'SL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-12.4049506, 9.0350761],
            },
            properties: {
              id: '8',
              name: 'A collaborative freshwater monitoring framework for Rokel River Basin',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'There is a need to integrate citizen science data into SDG 632 reporting, as the first water quality report submitted to the UN in 2021 showed that over half of the sampled areas failed to meet national standards. Spatial and temporal data gaps persist due to lack of technical capacity to integrate citizen science with agency data and manage non-citizen science monitoring data effectively.',
        ],
        stakeholders: ['31 local communities'],
        authorities: ['Sierra Leone National Water Resources Authority'],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and environmental description for the Rokel River Basin Management Plan.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive '],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Africa'],
      },
      {
        id: '9',
        title:
          'Citizen Science Initiatives in Water Framework Directive monitoring and promotion in the Marzenego River',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Italy',
            code: 'IT',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [12.240924646771024, 45.49272481983484],
            },
            properties: {
              id: '9',
              name: 'Citizen Science Initiatives in Water Framework Directive monitoring and promotion in the Marzenego River',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Current regulatory monitoring has data gaps, especially in tributaries, smaller water bodies, and wetlands, while ongoing Citizen Science Initiatives could provide better spatial coverage and collect necessary data for the Water Framework Directive.',
        ],
        stakeholders: ['Schools, community members, local associations.'],
        authorities: [
          {
            title: 'ARPAV (Environment Agency)',
            url: 'https://www.arpa.veneto.it/',
          },
          {
            title: 'Consorzio di Bonifica (river management consortium)',
            url: 'https://www.bonificabasilicata.it/',
          },
        ],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and qualitative environmental description',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '11',
        title: 'Tackling slippiness of Marine slipways and sea stairs in Galway',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Galway',
            code: 'IE',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-6.1430735, 53.2782817],
            },
            properties: {
              id: '11',
              name: 'Tackling slippiness of Marine slipways and sea stairs in Galway',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Authorities seek to meet the Bathing Water Directive through sodium hypochlorite bleach disinfection of streams entering bathing waters, prompting a review of bleach policy and a shift towards addressing stream pollution causes and restoring stream health with citizen participation, influenced by Citizen Generated Data and media coverage of data.',
        ],
        stakeholders: [
          'Local authority',
          {
            title: 'LAWPRO',
            url: 'https://www.lawpro.ca/',
          },
          'NGO',
          'citizens',
          'riparian landowners',
        ],
        authorities: [
          {
            title: 'Waterford County Council',
            url: 'https://waterfordcouncil.ie/',
          },
          {
            title: 'Environmental Protection Agency',
            url: 'https://www.epa.ie/',
          },
        ],
        citizenScienceInitiatives: ['Halt Stream Chemical Pollution'],
        citizenScienceData: [
          'Qualitative & quantitative reports from citizens on stream life, chlorine smell test.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive'],
        contact: {
          title: 'Coastwatch',
          url: 'https://www.coastwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '15',
        title: 'Measure Together: air quality sensors to complement official monitoring',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Netherlands',
            code: 'NL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [5.1842349, 52.1185937],
            },
            properties: {
              id: '15',
              name: 'Measure Together: air quality sensors to complement official monitoring',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Finding out how citizen science data can complement official air quality monitoring, for example by creating more detailed maps, making it possible to identify local hot spots to develop additional air quality protection measures.',
        ],
        stakeholders: [],
        authorities: [
          'RIVM',
          {
            title: 'Members of the Clean Air Agreement - Schone Lucht Akkoord',
            url: 'https://www.schoneluchtakkoord.nl/default.aspx',
          },
        ],
        citizenScienceInitiatives: [
          'Many bottom-up and top-down initiatives, many (but not all) of them using Sensor.Community methods',
        ],
        citizenScienceData: [
          'Real time data available from >3000 PM2.5 sensors, but also noise sensors, monthly values NO2 tubes, and open to more.',
        ],
        relevantPoliciesLaw: ['Ambient air quality directive'],
        contact: {
          title: 'National Institute for Public Health and the Environment',
          url: 'https://www.samenmeten.nl/international',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Europe'],
      },
      {
        id: '16',
        title: 'AirAware Woodburning Observatory to complement official monitoring',
        subTheme: 'Clean air for all',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Metropolitan Oslo & Kristiansand, Norway',
            code: 'NO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [10.7539283, 59.9386357],
            },
            properties: {
              id: '16',
              name: 'AirAware Woodburning Observatory to complement official monitoring',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['National', 'Local'],
        complianceNeed: [
          'Municipalities seek higher spatial density of data due to limited spatial coverage of reference stations, finding that Citizen Science data for PM2.5 is complementary and can serve as indicative measurement. Due to regulatory monitoring focus on air pollution from traffic, particularly for pollutants from seasonal hotspots due to woodburning (PM2.5). There is also a need to assess the suitability of sensor data for monitoring other air quality parameters than PM2,5, such as SO2.',
        ],
        stakeholders: [
          '>30 citizen scientists, 3-4 neighborhoods, municipalities, research institutes, Norwegian Asthma and Allergy association (NAAF), Sauna associations/companies',
        ],
        authorities: ['Municipalities of Oslo, Bærum, and Kristiansand'],
        citizenScienceInitiatives: [
          'Top-down initiative (Woodburning from household heating and saunas in Metropolitan Oslo) and Bottom-up initiative (Industry in Kristiansand).',
        ],
        citizenScienceData: ['Air Quality (PM 2.5, SO2, and perceived Odor)'],
        relevantPoliciesLaw: ['Ambient air quality directive'],
        contact: {
          title: 'NILU',
          url: 'https://nilu.com/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'National', 'Local', 'Europe'],
      },
      {
        id: '17',
        title: 'Citizens Science and collaborative forest monitoring',
        subTheme: 'Halting illegal deforestation',
        thematicAreas: ['Deforestation Prevention'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Denmark',
            code: 'DK',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [9.463768054020553, 56.55809512928662],
            },
            properties: {
              id: '17',
              name: 'Citizens Science and collaborative forest monitoring',
              thematicAreas: ['Deforestation Prevention'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Authorities are unable to identify every case of illegal deforestation. Citizen Generated Data can highlight areas for further investigation so authorities can take action.',
        ],
        stakeholders: [
          'Nature and Biodiversity Division, Danish Ministry of Environment and the general public with 300-400 reports per year.',
        ],
        authorities: [
          'Nature and Biodiversity Division, Danish Ministry of Environment.',
          {
            title: 'Danish Ministry of Environment',
            url: 'https://eng.mim.dk/',
          },
          'The general public with an estimated 300-400 citizens’ report per year.',
        ],
        citizenScienceInitiatives: [
          'Citizens’ reports on national forest interventions & imports of commodities causing deforestation or forest degradation.',
        ],
        citizenScienceData: [
          'Reports on potentially illegal placement of commodities causing deforestation or forest degradation. Reports on forest management interventions in Denmark. Geo-referenced reports on forest management interventions that may be in contradiction with national forest law.',
        ],
        relevantPoliciesLaw: [
          'Danish Forest Law',
          {
            title:
              'EU Deforestation Free Products Regulation (EUDR) Regulation (EU) 2023/1115 on deforestation-free products',
            url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115&qid=1687867231461',
          },
        ],
        contact: {
          title: 'University of Copenhagen',
          url: 'https://www.ku.dk/english/',
        },
        tags: ['Deforestation Prevention', 'Promoting', 'Enforcement', 'Local', 'Europe'],
      },
      {
        id: '18',
        title: 'Eyes on forests',
        subTheme: 'Halting illegal deforestation',
        thematicAreas: ['Deforestation Prevention'],
        location: {
          continent: 'Europe',
          country: {
            name: 'Denmark',
            code: 'DK',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [9.463768054020553, 56.55809512928662],
            },
            properties: {
              id: '18',
              name: 'Eyes on forests',
              thematicAreas: ['Deforestation Prevention'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Authorities unable to identify every case of illegal deforestation. Citizen Science data can highlight areas for further investigation so that authorities can take action.',
        ],
        stakeholders: [
          'Selected Forest districts (3), chief science officers, and individual citizens.',
        ],
        authorities: ['Selected Forest districts and private forest owners.'],
        citizenScienceInitiatives: [
          "Citizens' reports on national forest interventions & imports of commodities causing deforestation or forest degradation",
        ],
        citizenScienceData: [
          'Reports on forest management interventions in Denmark, geo-referenced reports on forest management interventions potentially violating national forest law.',
        ],
        relevantPoliciesLaw: [
          'Danish Forest Law',
          {
            title:
              'EU Deforestation Free Products Regulation (EUDR) Regulation (EU) 2023/1115 on deforestation-free products',
            url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115&qid=1687867231461',
          },
        ],
        contact: {
          title: 'University of Copenhagen',
          url: 'https://www.ku.dk/english/',
        },
        tags: ['Deforestation Prevention', 'Promoting', 'Enforcement', 'Local', 'Europe'],
      },
      {
        id: '19',
        title: "It's our forest too - protecting five provinces in Cambodia",
        subTheme: 'Halting illegal deforestation',
        thematicAreas: ['Deforestation Prevention'],
        location: {
          continent: 'Asia',
          country: {
            name: 'Five provinces in Cambodia',
            code: 'KH',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [104.85648556428505, 12.70157454584046],
            },
            properties: {
              id: '19',
              name: "It's our forest too - protecting five provinces in Cambodia",
              thematicAreas: ['Deforestation Prevention'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Earth Observation data cannot identify selective logging, whereas local communities can swiftly and accurately report instances of illegal deforestation. Integrating data from both sources is essential to achieve comprehensive information for compliance monitoring and enforcement.',
        ],
        stakeholders: [
          'Three forest community networks; i.e. more than 100 communities across five forest-rich provinces engaged in the use of the Prey Lang App to report on forest resources and forest crimes.',
        ],
        authorities: [
          {
            title: 'Ministry of Environment Cambodia',
            url: 'https://www.moe.gov.kh/en',
          },
        ],
        citizenScienceInitiatives: ["It's Our Forest Too www.preylang.net"],
        citizenScienceData: [
          'Geo-referenced data on forest crimes; > 30.000 records collected using the Prey Lang App www.preylang.net Citizens data is integrated with freely available Satellite Images on forest loss Global Forest Watch and Copernicus.',
        ],
        relevantPoliciesLaw: [
          'Forest Law Cambodia',
          {
            title:
              'EU Deforestation Free Products Regulation (EUDR) Regulation (EU) 2023/1115 on deforestation-free products',
            url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115&qid=1687867231461',
          },
        ],
        contact: {
          title: 'University of Copenhagen',
          url: 'https://www.ku.dk/english/',
        },
        tags: ['Deforestation Prevention', 'Promoting', 'Enforcement', 'Local', 'Asia'],
      },
      {
        id: '20',
        title: 'Monitoring to protect forests in Concepción',
        subTheme: 'Reducing forest loss from illegal activities and fires',
        thematicAreas: ['Deforestation Prevention'],
        location: {
          continent: 'America',
          country: {
            name: 'Bolivia',
            code: 'BO',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-64.40656063713384, -16.554895031581502],
            },
            properties: {
              id: '20',
              name: 'Monitoring to protect forests in Concepción',
              thematicAreas: ['Deforestation Prevention'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          ' Indigenous organizations are largely responsible for compliance assurance within formally recognized collectively titled indigenous territories. Communities can collect citizen science data but need to integrate with other relevant data from Earth Observation and link to relevant national policies.',
        ],
        stakeholders: [
          'The indigenous Chiquitano population, their organisations & authorities; 20 local fire brigades, each with 10 members; Apoyo Para el Campesino-Indígena del Oriente Boliviano (APCOB), local implementing NGO, and FoW.',
        ],
        authorities: [
          {
            title: 'The Territorial Government of Monte Verde (TGMV)',
            url: 'https://www.facebook.com/GTIMVBolivia/',
          },
          'The Municipal Governments of Lomerío',
          'San Javier and Concepción',
          {
            title: 'The Municipal Emergency Operations Centre (COEM)',
            url: 'http://www.defensacivil.gob.bo/web/uploads/images/doc_20210429_140951.pdf',
          },
          {
            title: 'The Forest and Land Operational Unit (UOBT)',
            url: 'https://abt.gob.bo/index.php/institucion/oficina/unidad-operativa-de-bosques-y-tierra',
          },
          'Concepción',
          {
            title:
              'The Departmental Directorate of the Authority of Social Control and Inspection of Forests and Land (ABT) of Santa Cruz',
            url: 'https://abt.gob.bo/',
          },
        ],
        citizenScienceInitiatives: [
          'Members of the Chiquitano indigenous people participate in forest monitoring in the field and reporting on illegal forest activities. Reports are passed on to traditional indigenous authorities and public authorities',
        ],
        citizenScienceData: [
          'Geo-referenced data on forest resources, illegal forest activities and forest fires. Daily reports on forest fires during the fire season August-November during 2019-2022. Freely available satellite images.',
        ],
        relevantPoliciesLaw: [
          'Forest Law Bolivia',
          {
            title:
              'EU Deforestation Free Products Regulation (EUDR) Regulation (EU) 2023/1115 on deforestation-free products',
            url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115&qid=1687867231461',
          },
        ],
        contact: {
          title: 'Forests of the World',
          url: 'https://www.forestsoftheworld.org/',
        },
        tags: ['Deforestation Prevention', 'Promoting', 'Enforcement', 'Local', 'America'],
      },
    ]);
  });

  it('should filter case studies by locations', () => {
    const filters = { locations: [Continent.ASIA, Continent.AFRICA] };
    const caseStudyService = new CaseStudyService(CASE_STUDIES, filters);
    const result = caseStudyService.searchCaseStudies();

    expect(result.data).toEqual([
      {
        id: '8',
        title: 'A collaborative freshwater monitoring framework for Rokel River Basin',
        subTheme: 'Clean and healthy surface water',
        thematicAreas: ['Zero Pollution'],
        location: {
          continent: 'Africa',
          country: {
            name: 'Rokel River Basin, Sierra Leone',
            code: 'SL',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-12.4049506, 9.0350761],
            },
            properties: {
              id: '8',
              name: 'A collaborative freshwater monitoring framework for Rokel River Basin',
              thematicAreas: ['Zero Pollution'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'There is a need to integrate citizen science data into SDG 632 reporting, as the first water quality report submitted to the UN in 2021 showed that over half of the sampled areas failed to meet national standards. Spatial and temporal data gaps persist due to lack of technical capacity to integrate citizen science with agency data and manage non-citizen science monitoring data effectively.',
        ],
        stakeholders: ['31 local communities'],
        authorities: ['Sierra Leone National Water Resources Authority'],
        citizenScienceInitiatives: [
          {
            title: 'FreshWater Watch',
            url: 'https://www.freshwaterwatch.org/',
          },
        ],
        citizenScienceData: [
          'Nitrates, Phosphates, Turbidity, and environmental description for the Rokel River Basin Management Plan.',
        ],
        relevantPoliciesLaw: ['Single-use Plastics Directive '],
        contact: {
          title: 'Earthwatch',
          url: 'https://earthwatch.org/',
        },
        tags: ['Zero Pollution', 'Promoting', 'Monitoring', 'Local', 'Africa'],
      },
      {
        id: '19',
        title: "It's our forest too - protecting five provinces in Cambodia",
        subTheme: 'Halting illegal deforestation',
        thematicAreas: ['Deforestation Prevention'],
        location: {
          continent: 'Asia',
          country: {
            name: 'Five provinces in Cambodia',
            code: 'KH',
          },
          coordinates: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [104.85648556428505, 12.70157454584046],
            },
            properties: {
              id: '19',
              name: "It's our forest too - protecting five provinces in Cambodia",
              thematicAreas: ['Deforestation Prevention'],
            },
          },
        },
        impact: ['Local'],
        complianceNeed: [
          'Earth Observation data cannot identify selective logging, whereas local communities can swiftly and accurately report instances of illegal deforestation. Integrating data from both sources is essential to achieve comprehensive information for compliance monitoring and enforcement.',
        ],
        stakeholders: [
          'Three forest community networks; i.e. more than 100 communities across five forest-rich provinces engaged in the use of the Prey Lang App to report on forest resources and forest crimes.',
        ],
        authorities: [
          {
            title: 'Ministry of Environment Cambodia',
            url: 'https://www.moe.gov.kh/en',
          },
        ],
        citizenScienceInitiatives: ["It's Our Forest Too www.preylang.net"],
        citizenScienceData: [
          'Geo-referenced data on forest crimes; > 30.000 records collected using the Prey Lang App www.preylang.net Citizens data is integrated with freely available Satellite Images on forest loss Global Forest Watch and Copernicus.',
        ],
        relevantPoliciesLaw: [
          'Forest Law Cambodia',
          {
            title:
              'EU Deforestation Free Products Regulation (EUDR) Regulation (EU) 2023/1115 on deforestation-free products',
            url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115&qid=1687867231461',
          },
        ],
        contact: {
          title: 'University of Copenhagen',
          url: 'https://www.ku.dk/english/',
        },
        tags: ['Deforestation Prevention', 'Promoting', 'Enforcement', 'Local', 'Asia'],
      },
    ]);
  });
});
