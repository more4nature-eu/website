import {
  CaseStudy,
  ComplianceType,
  Impact,
  Continent,
  ThematicArea,
} from '@/lib/case-studies.service';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: '[TBD] study case 1 & 2',
    subTheme: 'Monitoring and achieving global biodiversity targets',
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    location: {
      continent: Continent.EUROPE,
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
          name: '[TBD] study case 1 & 2',
          thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        },
      },
    },
    impact: [Impact.LOCAL, Impact.NATIONAL],
    complianceNeed: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            'All 195 parties to the Convention on Biological Diversity must track progress towards goals and targets using an agreed monitoring framework. Governments are encouraged to use Citizen Generated Data to enhance their reports, with provisional estimates indicating that it can be involved in 45% of the 365 indicators.',
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: [
            'As a Natura 2000 area, the park is envisaged to track progress towards the goals and targets of the Global Biodiversity Framework.',
          ],
        },
      },
    ],
    stakeholders: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: ['10,000 citizen scientists.'],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: ['500 citizen scientists.'],
        },
      },
    ],
    authorities: [
      {
        impact: {
          name: Impact.NATIONAL,
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
          name: Impact.LOCAL,
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
    contact: {
      title: 'The Nordic Agency for Development and Ecology',
      url: 'https://www.nordeco.dk/',
    },
    tags: [
      ThematicArea.BIODIVERSITY_PROTECTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Impact.LOCAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '2',
    title: '[TBD] study case 3 & 4',
    subTheme: 'Reversing the decline of pollinators',
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '2',
          name: '[TBD] study case 3 & 4',
          thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        },
      },
    },
    impact: [Impact.LOCAL, Impact.NATIONAL],
    complianceNeed: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            'The lack of a government initiative specifically targeting pollinators and pollination highlights the need for compliance, and Citizen Generated Data (CGD) can provide crucial evidence for the National Strategy for Nature Conservation and Biodiversity 2030.',
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: [
            'Oeiras Municipal Plan of Adaptation to Climate Change (PMAACO) includes objectives around biodiversity but there is a lack of statutory monitoring to assess progress. Ongoing CSIs can provide relevant data particularly on pollinators.',
          ],
        },
      },
    ],
    stakeholders: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            'Around 1100 observers, local communities, municipalities, NGO’s, universities, national authorities.',
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: ['Local communities, schools, municipalities.'],
        },
      },
    ],
    authorities: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            {
              title:
                'Portuguese Ministry of Environment; Portuguese Institute of Nature Conservation and Forests',
              url: 'https://icnf.pt/',
            },
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
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
        title: 'Biodiversity4All platform',
        url: 'https://www.biodiversity4all.org/',
      },
      {
        title:
          'Portuguese Butterfly Census (Censos de Borboletas de Portugal - connected to the European Butterfly Monitoring Scheme - eBMS)',
        url: 'https://butterfly-monitoring.net/es/portugal-bms',
      },
      {
        title: 'FitCount (Flower-Insect Timed Counts)',
        url: 'https://fitcount.ceh.ac.uk/',
      },
      {
        title: 'PolinizAÇÃO',
        url: 'https://www.inaturalist.org/projects/polinizacao-interacoes-planta-polinizador',
      },
    ],
    citizenScienceData: [
      'Data available at the Biodiversity4All platform, the Censos de Borboletas de Portugal website and FitCount app.',
    ],
    contact: {
      title: 'Faculdade de Ciências da Universidade de Lisboa',
      url: 'https://www.fciencias-id.pt/',
    },
    tags: [
      ThematicArea.BIODIVERSITY_PROTECTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Impact.LOCAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '3',
    title: '[TBD] study case 5',
    subTheme: 'Reversing the decline of pollinators',
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '3',
          name: '[TBD] study case 5',
          thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
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
      'Trends and indicators based on national data are available through Environmental Data Compendium Netherlands and in national and provincial reports.',
    ],
    contact: {
      title: 'Netherlands Institute of Ecology (NIOO)',
      url: 'https://nioo.knaw.nl/en',
    },
    tags: [
      ThematicArea.BIODIVERSITY_PROTECTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '4',
    title: '[TBD] study case 6 & 7',
    subTheme: 'Free-flowing rivers for freshwater and wetland biodiversity',
    thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
    location: {
      continent: Continent.EUROPE,
      country: {
        name: 'Norway',
        code: 'NO',
      },
      coordinates: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [6.070817014926126, 58.78746279402633],
        },
        properties: {
          id: '4',
          name: '[TBD] study case 6 & 7',
          thematicAreas: [ThematicArea.BIODIVERSITY_PROTECTION],
        },
      },
    },
    impact: [Impact.LOCAL, Impact.NATIONAL],
    complianceNeed: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            'Member states are required to produce a national inventory of current river barriers and prioritize obsolete ones for removal, but thousands of barriers are estimated to be unaccounted for, creating a data gap that can be filled with citizen science.',
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: [
            'Local areas are required to contribute to national inventory of river barriers. Many barriers are small and unsuitable for aerial surveillance. Citizen science can help to fill data gaps and provide additional information such as whether fish species are able to pass the barriers.',
          ],
        },
      },
    ],
    stakeholders: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            'River basin district authorities, water managers, anglers and angling organizations; county governors.',
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: [
            'Local angler organizations, the local catchments (river basin sub-districts) managers.',
          ],
        },
      },
    ],
    authorities: [
      {
        title: 'Norwegian Environment Agency',
        url: 'https://www.environmentagency.no/',
      },
    ],
    citizenScienceInitiatives: ['AMBER river barrier app.'],
    citizenScienceData: ['National / regional dataset available through the AMBER Barrier Atlas.'],
    contact: {
      title: 'The Norwegian Institute for Water Research (NIVA)',
      url: 'https://www.niva.no/en',
    },
    tags: [
      ThematicArea.BIODIVERSITY_PROTECTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Impact.LOCAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '5',
    title: '[TBD] study case 8',
    subTheme: 'Clean and healthy surface water',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.AFRICA,
      country: {
        name: 'Sierra Leone',
        code: 'SL',
      },
      coordinates: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-11.874590438445415, 9.09185585862],
        },
        properties: {
          id: '5',
          name: '[TBD] study case 8',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
    complianceNeed: [
      'There is a need to integrate citizen science data into SDG 632 reporting, as the first water quality report submitted to the UN in 2021 showed that over half of the sampled areas failed to meet national standards. Spatial and temporal data gaps persist due to lack of technical capacity to integrate citizen science with agency data and manage non-citizen science monitoring data effectively.',
    ],
    stakeholders: ['31 local communities.'],
    authorities: ['Sierra Leona National Water Resources.'],
    citizenScienceInitiatives: [
      {
        title: 'FreshWater Watch',
        url: 'https://www.freshwaterwatch.org/',
      },
    ],
    citizenScienceData: [
      'Nitrates, Phosphates, Turbidity, and qualitative environmental description for the Rokel River Basin Management Plan.',
    ],
    contact: {
      title: 'Earthwatch',
      url: 'https://earthwatch.org/',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Continent.AFRICA,
    ],
  },
  {
    id: '6',
    title: '[TBD] study case 9',
    subTheme: 'Clean and healthy surface water',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '6',
          name: '[TBD] study case 9',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
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
      'Nitrates, Phosphates, Turbidity, and qualitative environmental description.',
    ],
    contact: {
      title: 'Earthwatch',
      url: 'https://earthwatch.org/',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '7',
    title: '[TBD] study case 10',
    subTheme: 'Clean and healthy surface water',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '8',
          name: '[TBD] study case 10',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
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
    authorities: [
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
    citizenScienceInitiatives: [
      {
        title: 'Coastwatch Autumn Survey and Seagrass Campaign',
        url: 'https://www.coastwatch.org/all-ireland-survey',
      },
    ],
    citizenScienceData: [
      'Shore quality indicators based on Zostera beds, opportunistic seaweeds, stream quality and Nitrogen tests.',
    ],
    contact: {
      title: 'Coastwatch',
      url: 'https://www.coastwatch.org/',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.ENFORCEMENT,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '8',
    title: '[TBD] study case 11',
    subTheme: 'Clean and healthy surface water',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
      country: {
        name: 'Ireland',
        code: 'IE',
      },
      coordinates: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-6.994805119538429, 52.153970892963315],
        },
        properties: {
          id: '8',
          name: '[TBD] study case 11',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.LOCAL],
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
      'Qualitative & quantitative reports from citizens on stream life, chlorine smell test',
    ],
    contact: {
      title: 'Coastwatch',
      url: 'https://www.coastwatch.org/',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.LOCAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '9',
    title: '[TBD] study case 12',
    subTheme: 'Preventing plastics in the ocean',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '9',
          name: '[TBD] study case 12',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
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
      'Coastwatch marine litter data from several hundred sites in 2020, 2021 and 2022.',
    ],
    contact: {
      title: 'Coastwatch',
      url: 'https://www.coastwatch.org/',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.ENFORCEMENT,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '10',
    title: '[TBD] study case 13',
    subTheme: 'Preventing plastics in the ocean',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '10',
          name: '[TBD] study case 13',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
    complianceNeed: [
      'There is insufficient statutory monitoring of plastic litter, despite ample available Citizen Generated Data, necessitating the establishment of data standards and guidelines to ensure its relevance and adequacy for environmental compliance assurance concerning beach and sea plastic litter.',
    ],
    stakeholders: [
      'NGOs, industry representatives, policy implementors, citizens representatives (e.g. schools, CSOs). Rydde has currently 300+ civic actions with 1000+ volunteers across Norway',
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
      'Data on CS beach litter available from Rydde; 33 tons, 1239 km covered in Norway.',
    ],
    contact: {
      title: 'The Norwegian Institute for Water Research',
      url: 'https://www.niva.no/en',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.ENFORCEMENT,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '11',
    title: '[TBD] study case 14',
    subTheme: 'Clean air for all',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '11',
          name: '[TBD] study case 14',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
    complianceNeed: [
      'There is a data gap in official monitoring of air quality, highlighting the need to identify local hotspots to facilitate the development of additional air quality protection measures.',
    ],
    stakeholders: [
      {
        title: 'Poland Chief Environmental Inspectorate',
        url: 'https://www.gov.pl/web/gios-en',
      },
      {
        title: 'Ministry of Climate and Environment, Environmental Research Institute',
        url: 'https://www.gov.pl/web/climate',
      },
      'local authorities',
    ],
    authorities: [
      {
        title: 'Norwegian Environment Agency',
        url: 'https://www.environmentagency.no/',
      },
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
      'Data on CS beach litter available from Rydde; 33 tons, 1239 km covered in Norway.',
    ],
    contact: {
      title: 'Krakow Smog Alert',
      url: 'https://www.polishsmogalert.org/',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '12',
    title: 'Measure Together (Samen Meten)',
    subTheme: 'Clean air for all',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
      country: {
        name: 'Netherlands',
        code: 'NL',
      },
      coordinates: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [5.76467838897042, 51.937121018546925],
        },
        properties: {
          id: '12',
          name: 'Measure Together (Samen Meten)',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.NATIONAL],
    complianceNeed: [
      'Finding out how citizen science data can complement official air quality monitoring, for example by creating more detailed maps, making it possible to identify local hot spots to develop additional air quality protection measures.',
    ],
    stakeholders: [
      {
        title: 'Poland Chief Environmental Inspectorate',
        url: 'https://www.gov.pl/web/gios-en',
      },
      {
        title: 'Ministry of Climate and Environment, Environmental Research Institute',
        url: 'https://www.gov.pl/web/climate',
      },
      'local authorities',
    ],
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
      'Real time data available from >3000 PM2.5 sensors, but also noise sensors, monthly values NO2 tubes, and open to more',
    ],
    contact: {
      title: 'National Institute for Public Health and the Environment',
      url: 'https://www.rivm.nl/en/about-rivm',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '13',
    title: 'Woodburning and Industry',
    subTheme: 'Clean air for all',
    thematicAreas: [ThematicArea.ZERO_POLLUTION],
    location: {
      continent: Continent.EUROPE,
      country: {
        name: 'Norway',
        code: 'NO',
      },
      coordinates: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [7.948881832659551, 58.143415786630904],
        },
        properties: {
          id: '12',
          name: 'Woodburning and Industry',
          thematicAreas: [ThematicArea.ZERO_POLLUTION],
        },
      },
    },
    impact: [Impact.LOCAL],
    complianceNeed: [
      'Municipalities seek higher spatial density of data due to limited spatial coverage of reference stations, finding that Citizen Science data for PM2.5 is complementary and can serve as indicative measurement. Due to regulatory monitoring focus on air pollution from traffic, particularly for pollutants from seasonal hotspots due to woodburning (PM2.5). There is also a need to assess the suitability of sensor data for monitoring other air quality parameters than PM2,5, such as SO2.',
    ],
    stakeholders: [
      '>30 citizen scientists, 3-4 neighborhoods, municipalities, research institutes, Norwegian Asthma and Allergy association (NAAF), Sauna associations/companies',
    ],
    authorities: ['Municipalities of Oslo', 'Bærum', 'Kristiansand'],
    citizenScienceInitiatives: [
      'Top-down initiative (Woodburning from household heating and saunas in Metropolitan Oslo) and Bottom-up initiative (Industry in Kristiansand).',
    ],
    citizenScienceData: ['Air Quality (PM 2,5, SO2, and perceived Odor)'],
    contact: {
      title: 'NILU',
      url: 'https://nilu.com/',
    },
    tags: [
      ThematicArea.ZERO_POLLUTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.LOCAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '14',
    title: 'Citizens for a deforestation-free Denmark',
    subTheme: 'Halting illegal deforestation',
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    location: {
      continent: Continent.EUROPE,
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
          id: '14',
          name: 'Citizens for a deforestation-free Denmark',
          thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
        },
      },
    },
    impact: [Impact.LOCAL, Impact.NATIONAL],
    complianceNeed: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            'Authorities are unable to identify every case of illegal deforestation. Citizen Generated Data can highlight areas for further investigation so authorities can take action.',
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: [
            'Authorities unable to identify every case of illegal deforestation. Citizen Science data can highlight areas for further investigation so that authorities can take action.',
          ],
        },
      },
    ],
    stakeholders: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: [
            'Nature and Biodiversity Division, Danish Ministry of Environment and the general public with an estimated 300-400 citizens’ report per year.',
          ],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: ['Selected Forest districts (3), chief science officers, and individual citizens'],
        },
      },
    ],
    authorities: [
      {
        impact: {
          name: Impact.NATIONAL,
          list: ['Nature and Biodiversity Division, Danish Ministry of Environment.'],
        },
      },
      {
        impact: {
          name: Impact.LOCAL,
          list: ['Selected Forest districts and private forest owners.'],
        },
      },
    ],
    citizenScienceInitiatives: [
      'Citizens’ reports on national forest interventions & imports of commodities causing deforestation or forest degradation.',
    ],
    citizenScienceData: [
      'Reports on potentially illegal placement of commodities causing deforestation or forest degradation. Reports on forest management interventions in Denmark. Geo-referenced reports on forest management interventions that may be in contradiction with national forest law.',
    ],
    contact: {
      title: 'University of Copenhagen',
      url: 'https://www.ku.dk/english/',
    },
    tags: [
      ThematicArea.DEFORESTATION_PREVENTION,
      ComplianceType.PROMOTING,
      ComplianceType.MONITORING,
      Impact.LOCAL,
      Impact.NATIONAL,
      Continent.EUROPE,
    ],
  },
  {
    id: '15',
    title: 'It’s our forest too',
    subTheme: 'Halting illegal deforestation',
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    location: {
      continent: Continent.ASIA,
      country: {
        name: 'Cambodia',
        code: 'KH',
      },
      coordinates: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [104.85648556428505, 12.70157454584046],
        },
        properties: {
          id: '15',
          name: 'It’s our forest too',
          thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
        },
      },
    },
    impact: [Impact.LOCAL, Impact.NATIONAL],
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
    contact: {
      title: 'University of Copenhagen',
      url: 'https://www.ku.dk/english/',
    },
    tags: [
      ThematicArea.DEFORESTATION_PREVENTION,
      ComplianceType.PROMOTING,
      ComplianceType.ENFORCEMENT,
      Impact.LOCAL,
      Continent.ASIA,
    ],
  },
  {
    id: '16',
    title: '[TBD] study case 20',
    subTheme: 'Reducing forest loss from illegal activities and fires',
    thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
    location: {
      continent: Continent.AMERICAS,
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
          id: '16',
          name: '[TBD] study case 20',
          thematicAreas: [ThematicArea.DEFORESTATION_PREVENTION],
        },
      },
    },
    impact: [Impact.LOCAL, Impact.NATIONAL],
    complianceNeed: [
      'Indigenous organizations are largely responsible for compliance assurance within formally recognized collectively titled indigenous territories. Communities can collect citizen science data but need to integrate with other relevant data from Earth Observation and link to relevant national policies.',
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
          'The Departmental Directorate of the Authority of Social Control and Inspection of Forests and Land (ABT) of Santa Cruz\n',
        url: 'https://abt.gob.bo/',
      },
    ],
    citizenScienceInitiatives: [
      'Members of the Chiquitano indigenous people participate in forest monitoring in the field and reporting on illegal forest activities. Reports are passed on to traditional indigenous authorities and public authorities',
    ],
    citizenScienceData: [
      'Geo-referenced data on forest resources, illegal forest activities and forest fires. Daily reports on forest fires during the fire season August-November during 2019-2022. Freely available satellite images.',
    ],
    contact: {
      title: 'Forests of the World',
      url: 'https://www.forestsoftheworld.org/',
    },
    tags: [
      ThematicArea.DEFORESTATION_PREVENTION,
      ComplianceType.PROMOTING,
      ComplianceType.ENFORCEMENT,
      Impact.LOCAL,
      Continent.AMERICAS,
    ],
  },
];

export default CASE_STUDIES;
