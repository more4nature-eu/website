import { ThematicArea } from '@/lib/case-studies.service';
import { NewsService } from '@/lib/news.service';
import { SearchParams } from '@/lib/paginator';

import NEWS from '@/data/news';

describe('NewsService', () => {
  it('should filter news by name', () => {
    const filters = { name: 'Leveraging Citizen Science' };
    const newsService = new NewsService(NEWS, filters);
    const result = newsService.searchNews();

    expect(result.data).toEqual([
      {
        name: 'Leveraging Citizen Science Initiatives',
        date: '2024-04-25',
        description:
          "<p>It’s exciting to see the discussion on societal engagement and open science. At more4nature, we're actively contributing to this dialogue by empowering citizens and communities in environmental action. Our project is all about leveraging citizen science initiatives (CSIs) to tackle pollution, protect biodiversity, and prevent deforestation.</p><p>Citizen involvement and citizen-generated data (CGD) are vital to counter environmental degradation. That's why more4nature is dedicated to bridging the gap between CSIs and authorities. By strengthening CSIs, facilitating collaboration, and developing tools for validating CGD, we ensure that valuable data doesn't go to waste.</p>",
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7189277848879124481',
      },
    ]);
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
        name: 'Introduction to more4nature Project',
        date: '2024-01-03',
        description:
          "<p>We're excited to launch the more4nature project, focusing on zero pollution, biodiversity protection, and deforestation prevention by empowering citizens and communities. The project aims to bridge the gap between citizen science initiatives (CSIs) and local authorities, enhancing environmental compliance and monitoring. By strengthening CSIs, facilitating collaboration, and developing tools to validate Citizen-Generated Data (CGD), more4nature seeks to make CGD a key part of the Green Deal Data Space, driving green and digital transformations.</p>",
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169301090432200704',
      },
      {
        name: 'Leveraging Citizen Science Initiatives',
        date: '2024-04-25',
        description:
          "<p>It’s exciting to see the discussion on societal engagement and open science. At more4nature, we're actively contributing to this dialogue by empowering citizens and communities in environmental action. Our project is all about leveraging citizen science initiatives (CSIs) to tackle pollution, protect biodiversity, and prevent deforestation.</p><p>Citizen involvement and citizen-generated data (CGD) are vital to counter environmental degradation. That's why more4nature is dedicated to bridging the gap between CSIs and authorities. By strengthening CSIs, facilitating collaboration, and developing tools for validating CGD, we ensure that valuable data doesn't go to waste.</p>",
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7189277848879124481',
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
        name: 'more4nature Project in Copenhagen!',
        date: '2024-05-30',
        description:
          '<p>Our team is thrilled to reunite in Copenhagen, advancing transformative conservation efforts by integrating citizens and citizen science initiatives into environmental compliance. Discussions with European Environment Agency (EEA) experts highlighted shared interests in using Citizen-Generated Data for monitoring at national and regional levels.</p> <p>We explored links between health, pollution, and the need for better data on issues like microplastics. More4nature partner Ida Theilade emphasized, "Citizens can play a role because they know what to look for," despite challenges like illegal logging.</p>',
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7201890677780041728',
      },
      {
        name: 'European Space Agency Environmental Crimes Workshop 2024',
        date: '2024-06-11',
        description:
          '<p>At the JRC and ESA Environmental Crimes Workshop 2024, Joan Maso Pau from CREAF presented a poster on "Empowering Citizens in Collaborative Environmental Compliance Assurance." Joan highlighted how more4nature drove conservation by involving citizens and communities in efforts to achieve zero pollution, protect biodiversity, and prevent deforestation. The presentation covered strengthening Citizen Science Initiatives for reliable data, enhancing collaboration between CSIs and authorities, developing tools for validating and integrating citizen data, incorporating data into the Green Deal Data Space, and fostering synergies with LivingLabs and Fab Labs. We engaged with experts and explored how remote sensing could complement citizen science.</p>',
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7206272288357298176',
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
        name: 'Introduction to more4nature Project',
        date: '2024-01-03',
        description:
          "<p>We're excited to launch the more4nature project, focusing on zero pollution, biodiversity protection, and deforestation prevention by empowering citizens and communities. The project aims to bridge the gap between citizen science initiatives (CSIs) and local authorities, enhancing environmental compliance and monitoring. By strengthening CSIs, facilitating collaboration, and developing tools to validate Citizen-Generated Data (CGD), more4nature seeks to make CGD a key part of the Green Deal Data Space, driving green and digital transformations.</p>",
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169301090432200704',
      },
      {
        name: 'Project Kick-Off at IHE Delft Institute for Water Education',
        date: '2024-03-21',
        description:
          '<p>Following the project Kick-Off at IHE Delft Institute for Water Education in Delft, some more4nature partners got up close and personal with some of the natural beauty that they hope to protect in the course of the project lifetime, in Europe, Africa, Asia and Latin America. Watch the video to find out more!</p>',
        categories: ['Biodiversity Protection'],
      },
    ]);
    expect(result.total).toBe(10);
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
        name: 'Introduction to more4nature Project',
        date: '2024-01-03',
        description:
          "<p>We're excited to launch the more4nature project, focusing on zero pollution, biodiversity protection, and deforestation prevention by empowering citizens and communities. The project aims to bridge the gap between citizen science initiatives (CSIs) and local authorities, enhancing environmental compliance and monitoring. By strengthening CSIs, facilitating collaboration, and developing tools to validate Citizen-Generated Data (CGD), more4nature seeks to make CGD a key part of the Green Deal Data Space, driving green and digital transformations.</p>",
        categories: ['Deforestation Prevention', 'Biodiversity Protection', 'Zero Pollution'],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169301090432200704',
      },
    ]);
    expect(result.total).toBe(5);
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(1);
  });
});
