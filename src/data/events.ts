import { Event } from '@/lib/events.service';

const events: Event[] = [
  {
    id: '1',
    title:
      'IV Reunião anual da Rede Colaborativa para a Avaliação, Conservação e Valorização dos Polinizadores e da Polinização (Polli.NET)',
    type: 'Scientific conference',
    theme: 'Biodiversity (pollinators)',
    presenters: ['Cristina Luís', 'Esther Marín'],
    organizations: ['FCID/Ciências ULisboa'],
    description:
      '<p>The main objectives of the Collaborative Network was to bring together the scientific community, stakeholders and civil society (directly and indirectly) linked to pollinators and pollination, to promote information sharing and knowledge transfer between stakeholders, and to promote the training of researchers and citizens.</p><p>The Collaborative Network aimed to develop an action plan at a national level for the assessment, conservation, and enhancement of pollinators, as well as promoting the implementation of the actions proposed therein. Involving all stakeholders in a process of collaborative work and commitment on the part of all those involved.</p>',
    date: '2024-05-27',
    image: '/images/events/town.webp',
    location: 'Online (Portugal)',
    link: {
      title: '',
      url: 'https://www.pollinet.pt/?pgid=lxer1xkc-0cdd2b4b-2b57-4b57-b20d-52c5492603b8',
    },
  },
  {
    id: '2',
    title: 'Seagrass and Pollution',
    type: 'Seminar',
    theme: 'Pollution',
    presenters: [
      'Rita Hagan - Coastwatch CS Coordinator',
      'Mick Berry - Coastwatch CS Coordinator',
      'Marcial Bardolet - IBANAT, Government of the Balearic Islands & Mediterranean Posidonia Network',
      'Prof. Bissswajit Bazu - Civil, Structural & Environmental Engineering TCD',
      'Jody Power - Mayor of Waterford',
      'Prof Iris Moeller - Head of Geography, Trinity College  Dublin (TCD)',
      'Fintan Kelly - Policy officer, Irish Environmental Network',
      'Dr. Robert Wilkes - EPA',
      'Tim Butter - Cork SubAqua Club',
    ],
    organizations: ['FCID/Ciências ULisboa'],
    description:
      '<p>From Coastwatch FB “[Our] seminar yesterday in partnership with Irish Environmental Network & Trinity College Dublin on Coastal Nature Protection, Management & Restoration with a focus on Seagrass & the Nature Restoration Law</p><p>Thank you to everyone who attended and to all of our wonderful presenters, especially Marcial Bardolet Govern de les Illes Balears who traveled from Spain to be with us and gave such an inspiring example of a country that does protect all of its seagrass.</p><p>Thanks also to workshop facilitators, legal experts and rapporteurs, and all who helped with organising as well as our hosts in the Department of Engineering, Trinity College Dublin & of course our Coastwatchers from all around the island who contribute so much to the citizen science work of Coastwatch.”</p>',
    date: '2024-01-01',
    formatDate: 'LLLL, yyyy',
    image: '/images/events/town.webp',
    location: 'Dublin, Ireland',
    link: {
      title: '',
      url: 'https://www.facebook.com/share/p/ZGCbMeZDogJFgN5M/',
    },
  },
  {
    id: '3',
    title: 'Joint Oireachteas Agriculture Committee on Nitrates',
    type: 'Policy',
    theme: 'Pollution',
    presenters: ['Karin Dubsky', 'Bernie Connolly'],
    organizations: ['Coastwatch'],
    description:
      '<p>Presenting at the Joint Oireachtas Committee on Agriculture on "Compliance with the Nitrates Directive: Implications for Ireland."</p>',
    date: '2024-02-01',
    image: '/images/events/town.webp',
    location: 'Dublin, Ireland',
    link: {
      title: '',
      url: 'https://x.com/swanireland/status/1760359066319135069',
    },
  },
  {
    id: '4',
    title: 'World Water Day - Bannow Bay',
    type: 'Training',
    theme: 'Pollution',
    presenters: [
      'Karin Dubsky - Coastwatch',
      'Mick Berry - Coastwatch CS Coordinator',
      'Eddie Burgess - Teagasc',
      "Rory O'Hanlon - NPWS",
      'Michael Nugent - LAWPRO',
      'Liam Ryan - Farmer & ornithologist',
      'Catherine Kinsella - OPW & Tintern Abbey',
      'Alan Ryan - OPW',
    ],
    organizations: ['Coastwatch'],
    description:
      '<p>A #worldwaterday2024 event focused on water quality in Bannow Bay, an outlier inlet that showed improved levels of nitrate discharge in Coastwatch’s Autumn Survey.</p>',
    date: '2024-03-01',
    image: '/images/events/town.webp',
    location: 'Wexford, Ireland',
    link: {
      title: '',
      url: 'https://www.linkedin.com/posts/coastwatch-irish-coastal-environment-group-coastwatch_world-water-day-2024-in-bannow-bay-coastwatch-activity-7176641279747878912-Nqia?utm_source=share&utm_medium=member_desktop',
    },
  },
  {
    id: '5',
    title: 'Earth Day Workshop, Single Use Plastics Directive',
    type: 'International Days',
    theme: 'Pollution',
    presenters: [
      'Colm Lambert - DECC',
      'Jarlath T Duffy - EPA',
      'Karin Dubky - Coaswatch',
      'Will Mitchel - Mywaste.ie',
      'Bernie Connolly - Coastwatch',
      'Cecilia Harrington - Harrington Solicitors',
      'Gaëlle Haut - Surfrider Foundation',
      'Maya Galante - NEU Boston',
      'Johnny Dabrowski - TCD & Earthday.org',
      'Barbara Nolan - Head of EC Representation in Ireland',
    ],
    organizations: ['Coastwatch'],
    description:
      '<p>The UN themed Earth Day 2024 around plastics. To mark the day, Coastwatch organised a workshop on Banned Single Use Plastics in the European Commission Representation of Ireland offices in Dublin and online.</p>',
    date: '2024-04-22',
    image: '/images/events/town.webp',
    location: 'Dublin, Ireland',
    link: {
      title: '',
      url: 'https://www.coastwatch.org/post/single-use-plastics-directive-earth-day-2024-workshop-report',
    },
  },
];

export default events;
