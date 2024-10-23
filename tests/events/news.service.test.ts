import { ThematicArea } from '@/lib/case-studies.service';
import { NewsService } from '@/lib/news.service';
import { SearchParams } from '@/lib/paginator';

import NEWS from '@/data/news';

describe('NewsService', () => {
  it('should filter news by name', () => {
    const filters = { name: 'Leveraging Citizen Science' };
    const newsService = new NewsService(NEWS, filters);
    const result = newsService.searchNews();

    expect(result.data).toEqual([]);
  });

  it('should filter news by date', () => {
    const filters = { date: '2024-04-26' };
    const newsService = new NewsService(NEWS, filters);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'Earth Day Workshop with Coastwatch',
        date: '2024-04-26',
        description:
          '<p>One of our m4n Citizen Science Coastwatch celebrated Earth Day with a workshop on the UN theme of this year: plastics. Watch the video for some insights from participants!</p>',
        categories: ['Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7189583716824854528',
      },
    ]);
  });

  it('should filter news by categories', () => {
    const filters = { categories: [ThematicArea.ZERO_POLLUTION] };
    const newsService = new NewsService(NEWS, filters);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'European Space Agency Environmental Crimes Workshop 2024',
        date: '2024-06-11',
        description:
          '<p>At the JRC and ESA Environmental Crimes Workshop 2024, Joan Maso Pau from CREAF presented a poster on "Empowering Citizens in Collaborative Environmental Compliance Assurance." Joan highlighted how more4nature drove conservation by involving citizens and communities in efforts to achieve zero pollution, protect biodiversity, and prevent deforestation. The presentation covered strengthening Citizen Science Initiatives for reliable data, enhancing collaboration between Citizen Science initiatives and authorities, developing tools for validating and integrating citizen data, incorporating data into the Green Deal Data Space, and fostering synergies with LivingLabs and Fab Labs. We engaged with experts and explored how remote sensing could complement citizen science.</p>',
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7206272288357298176',
      },
      {
        name: 'more4nature Project in Copenhagen!',
        date: '2024-05-30',
        description:
          '<p>Our team is thrilled to reunite in Copenhagen, advancing transformative conservation efforts by integrating citizens and Sitizen Science initiatives into environmental compliance. Discussions with European Environment Agency (EEA) experts highlighted shared interests in using Citizen-Generated Data for monitoring at national and regional levels.</p> <p>We explored links between health, pollution, and the need for better data on issues like microplastics. More4nature partner Ida Theilade emphasized, "Citizens can play a role because they know what to look for," despite challenges like illegal logging.</p>',
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7201890677780041728',
      },
      {
        name: 'Earth Day Workshop with Coastwatch',
        date: '2024-04-26',
        description:
          '<p>One of our m4n Citizen Science Coastwatch celebrated Earth Day with a workshop on the UN theme of this year: plastics. Watch the video for some insights from participants!</p>',
        categories: ['Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7189583716824854528',
      },
      {
        name: 'Introduction to more4nature Project',
        date: '2024-01-03',
        description:
          '<p>We&apos;re excited to launch the more4nature project, focusing on zero pollution, biodiversity protection, and deforestation prevention by empowering citizens and communities. The project aims to bridge the gap between Citizen Science initiatives and local authorities, enhancing environmental compliance and monitoring. By strengthening CS initiatives, facilitating collaboration, and developing tools to validate Citizen-Generated Data (CGD), more4nature seeks to make CGD a key part of the Green Deal Data Space, driving green and digital transformations.</p>',
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169301090432200704',
      },
    ]);
  });

  it('should paginate news', () => {
    const filters = {};
    const paginationParams: SearchParams = { page: 1, pageSize: 2 };
    const newsService = new NewsService(NEWS, filters, paginationParams);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'Hutsulshchyna Park Team, Part of more4nature Project, Raises Awareness on Forest Reforms in Carpathian National Park',
        date: '2024-07-03',
        description:
          '<p>On June 25, representatives from Hutsulshchyna National Nature Park, part of the more4nature project by the National Ecological Centre of Ukraine, visited the Carpathian National Nature Park in Yaremche. The event aimed to raise awareness about forest management reforms and illegal logging, engaging 75 local citizens in discussions. Later, the delegation also visited Vorokhta and the Vorokhta Forest Management Branch, presenting the more4nature project and surveying 30 forestry workers. The day was highly productive and informative for all involved.</p>',
        categories: ['Deforestation Prevention'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7214292712999546880',
      },
      {
        name: 'Portuguese Minister Emphasizes Vital Role of Pollinators in National Action Plan: Spotlight on the PolinizAÇÃO Project',
        date: '2024-06-27',
        description:
          "<p>Exciting news on the EU's Nature Restoration Law! Portuguese Minister Maria Da Graça Carvalho recently emphasized the importance of protecting pollinators, highlighting the Action Plan led by Universidade de Coimbra and featured in more4nature's case studies. This plan aims to combat pollinator decline through improved conservation efforts, data collection via citizen science, and increased public awareness. PolinizAÇÃO, part of polli.NET and coordinated by the FLOWer Lab, is a key initiative in this effort. Kudos to more4nature partners Cristina Luís and Esther Marín González for their work on this crucial Biodiversity Protection case.</p>",
        categories: ['Biodiversity Protection'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7212008106069766144',
      },
    ]);
    expect(result.total).toBe(9);
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(2);
  });

  it('should paginate and filter news', () => {
    const filters = { categories: [ThematicArea.DEFORESTATION_PREVENTION] };
    const paginationParams: SearchParams = { page: 1, pageSize: 1 };
    const newsService = new NewsService(NEWS, filters, paginationParams);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'Hutsulshchyna Park Team, Part of more4nature Project, Raises Awareness on Forest Reforms in Carpathian National Park',
        date: '2024-07-03',
        description:
          '<p>On June 25, representatives from Hutsulshchyna National Nature Park, part of the more4nature project by the National Ecological Centre of Ukraine, visited the Carpathian National Nature Park in Yaremche. The event aimed to raise awareness about forest management reforms and illegal logging, engaging 75 local citizens in discussions. Later, the delegation also visited Vorokhta and the Vorokhta Forest Management Branch, presenting the more4nature project and surveying 30 forestry workers. The day was highly productive and informative for all involved.</p>',
        categories: ['Deforestation Prevention'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7214292712999546880',
      },
    ]);
    expect(result.total).toBe(4);
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(1);
  });
});
