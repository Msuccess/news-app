import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { NewsService } from './news.service';
import { NewsModel } from '../models/news.model';
import { EndPoints } from '../constants/endpoints';
import { HttpClient } from '@angular/common/http';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;
  let endpoint: EndPoints;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient, NewsService],
    });
    service = TestBed.inject(NewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('it should retrive posts from the API via GET', () => {
    const dummyPosts: NewsModel[] = [
      {
        uri: 'nyt://article/a5c580a1-d38f-5d9c-9ec4-f277779b06f9',
        url: 'https://www.nytimes.com/2021/12/08/health/covid-fat-obesity.html',
        id: 100000008051701,
        asset_id: 100000008051701,
        source: 'New York Times',
        published_date: '2021-12-08',
        updated: '2021-12-10 11:32:25',
        section: 'Health',
        subsection: '',
        nytdsection: 'health',
        adx_keywords:
          'your-feed-science;Obesity;Coronavirus (2019-nCoV);Weight;Immune System;Fat Tissue;Research',
        column: null,
        byline: 'By Roni Caryn Rabin',
        type: 'Article',
        title: 'The Coronavirus Attacks Fat Tissue, Scientists Find',
        abstract:
          'The research may help explain why people who are overweight and obese have been at higher risk of severe illness and death from Covid.',
        des_facet: [
          'your-feed-science',
          'Obesity',
          'Coronavirus (2019-nCoV)',
          'Weight',
          'Immune System',
          'Fat Tissue',
          'Research',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Research has found that the coronavirus infects fat cells and immune cells within body fat, causing an immune response that scientists say may contribute to severe disease.',
            copyright: 'Nanographics, via Reuters',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/08/science/08virus-fat/08virus-fat-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/08/science/08virus-fat/08virus-fat-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/08/science/08virus-fat/08virus-fat-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/263de010-85e4-5755-9834-cd75ccee8d8d',
        url: 'https://www.nytimes.com/2021/12/08/us/schools-closed-fridays-remote-learning.html',
        id: 100000008097933,
        asset_id: 100000008097933,
        source: 'New York Times',
        published_date: '2021-12-08',
        updated: '2021-12-10 01:11:19',
        section: 'U.S.',
        subsection: '',
        nytdsection: 'u.s.',
        adx_keywords:
          'Coronavirus (2019-nCoV);Shutdowns (Institutional);E-Learning;Education (K-12);Parenting;Shortages;Teachers and School Employees;Detroit (Mich);Portland (Ore);Southfield (Mich);United States',
        column: null,
        byline: 'By Giulia Heyward',
        type: 'Article',
        title:
          'Schools Are Closing Classrooms on Fridays. Parents Are Furious.',
        abstract:
          'Desperate to keep teachers, some districts have turned to remote teaching for one day a week — and sometimes more. Families have been left to find child care.',
        des_facet: [
          'Coronavirus (2019-nCoV)',
          'Shutdowns (Institutional)',
          'E-Learning',
          'Education (K-12)',
          'Parenting',
          'Shortages',
          'Teachers and School Employees',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [
          'Detroit (Mich)',
          'Portland (Ore)',
          'Southfield (Mich)',
          'United States',
        ],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'After Detroit’s public schools announced they would go remote every Friday in December, Caitlin Reynolds has scrambled to make sure someone else can be home with her son, L.J.',
            copyright: 'Nic Antaya for The New York Times',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/05/nyregion/00schools-off-1/00schools-off-1-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/05/nyregion/00schools-off-1/merlin_198597345_a140c3b1-8f04-4c7c-a36b-8185e4470afa-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/05/nyregion/00schools-off-1/merlin_198597345_a140c3b1-8f04-4c7c-a36b-8185e4470afa-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/2739ec91-be85-5fbc-8096-4dfccbefd5e3',
        url: 'https://www.nytimes.com/2021/12/09/technology/birds-arent-real-gen-z-misinformation.html',
        id: 100000008101638,
        asset_id: 100000008101638,
        source: 'New York Times',
        published_date: '2021-12-09',
        updated: '2021-12-09 23:53:34',
        section: 'Technology',
        subsection: '',
        nytdsection: 'technology',
        adx_keywords:
          'Computers and the Internet;Social Media;Conspiracy Theories;Rumors and Misinformation;Demonstrations, Protests and Riots;United States Politics and Government;Generation Z;Content Type: Personal Profile;McIndoe, Peter;Bird Brigade',
        column: null,
        byline: 'By Taylor Lorenz',
        type: 'Article',
        title:
          'Birds Aren’t Real, or Are They? Inside a Gen Z Conspiracy Theory.',
        abstract:
          'Peter McIndoe, the 23-year-old creator of the viral Birds Aren’t Real movement, is ready to reveal what the effort is really about.',
        des_facet: [
          'Computers and the Internet',
          'Social Media',
          'Conspiracy Theories',
          'Rumors and Misinformation',
          'Demonstrations, Protests and Riots',
          'United States Politics and Government',
          'Generation Z',
          'Content Type: Personal Profile',
        ],
        org_facet: ['Bird Brigade'],
        per_facet: ['McIndoe, Peter'],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              "Peter McIndoe, the 23-year-old creator of the Birds Aren't Real movement, with his van in Fayetteville, Ark.",
            copyright: 'Rana Young for The New York Times',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/08/business/00birds/00birds-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/08/business/00birds/merlin_198938148_b7d80dd2-a388-425b-86a4-525d5591219f-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/08/business/00birds/merlin_198938148_b7d80dd2-a388-425b-86a4-525d5591219f-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/6772302d-1db2-5fa3-8857-f51f7224f652',
        url: 'https://www.nytimes.com/2021/12/05/us/michigan-shooting-parents.html',
        id: 100000008106690,
        asset_id: 100000008106690,
        source: 'New York Times',
        published_date: '2021-12-05',
        updated: '2021-12-06 05:35:32',
        section: 'U.S.',
        subsection: '',
        nytdsection: 'u.s.',
        adx_keywords:
          'School Shootings and Armed Attacks;Oxford Charter Township, Mich, Shooting (2021);Gun Control;Crumbley, Ethan;Crumbley, James;Crumbley, Jennifer;Oxford High School (Oxford Charter Township, Mich);Oakland County (Mich);Oxford Charter Township (Mich)',
        column: null,
        byline: 'By Sophie Kasakove and Susan Cooper Eastman',
        type: 'Article',
        title:
          'Dramatic Day Reveals Details About the Parents of a School Shooting Suspect',
        abstract:
          'After a manhunt and an arraignment, scrutiny of James and Jennifer Crumbley has intensified.',
        des_facet: [
          'School Shootings and Armed Attacks',
          'Oxford Charter Township, Mich, Shooting (2021)',
          'Gun Control',
        ],
        org_facet: ['Oxford High School (Oxford Charter Township, Mich)'],
        per_facet: ['Crumbley, Ethan', 'Crumbley, James', 'Crumbley, Jennifer'],
        geo_facet: ['Oakland County (Mich)', 'Oxford Charter Township (Mich)'],
        media: [],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/012dedcc-f270-5ac1-9fa2-59509bde6bdd',
        url: 'https://www.nytimes.com/2021/12/09/arts/television/review-and-just-like-that.html',
        id: 100000008111597,
        asset_id: 100000008111597,
        source: 'New York Times',
        published_date: '2021-12-09',
        updated: '2021-12-10 00:49:02',
        section: 'Arts',
        subsection: 'Television',
        nytdsection: 'arts',
        adx_keywords:
          'Television;Choudhury, Sarita;Davis, Kristin;Garson, Willie (1964-2021);King, Michael Patrick;Nixon, Cynthia;Noth, Chris;Parker, Nicole Ari;Parker, Sarah Jessica;Pittman, Karen;Ramirez, Sara (1975- );HBO Max',
        column: null,
        byline: 'By James Poniewozik',
        type: 'Article',
        title: 'Review: ‘And Just Like That,’ It All Went Wrong',
        abstract:
          'The “Sex and the City” revival is part dramedy about heartbreak, part awkward bid at relevance.',
        des_facet: ['Television'],
        org_facet: ['HBO Max'],
        per_facet: [
          'Choudhury, Sarita',
          'Davis, Kristin',
          'Garson, Willie (1964-2021)',
          'King, Michael Patrick',
          'Nixon, Cynthia',
          'Noth, Chris',
          'Parker, Nicole Ari',
          'Parker, Sarah Jessica',
          'Pittman, Karen',
          'Ramirez, Sara (1975- )',
        ],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Sarah Jessica Parker returns as Carrie Bradshaw in “And Just Like That,” a “Sex and the City” revival that can seem like two shows in one.',
            copyright: 'Craig Blankenhorn/HBO',
            approved_for_syndication: 0,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/10/arts/09satc-review/09satc-review-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/10/arts/09satc-review/09satc-review-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/10/arts/09satc-review/09satc-review-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/dbcdd77c-4272-51d5-af56-7abff9faf53a',
        url: 'https://www.nytimes.com/2021/12/04/business/media/chris-cuomo-fired-cnn.html',
        id: 100000008105907,
        asset_id: 100000008105907,
        source: 'New York Times',
        published_date: '2021-12-04',
        updated: '2021-12-05 12:20:19',
        section: 'Business',
        subsection: 'Media',
        nytdsection: 'business',
        adx_keywords:
          'News and News Media;Television;Sexual Harassment;Ethics and Official Misconduct;Cuomo, Christopher;Cuomo, Andrew M;Zucker, Jeff;CNN',
        column: null,
        byline: 'By Michael M. Grynbaum, John Koblin and Jodi Kantor',
        type: 'Article',
        title:
          'CNN Fires Chris Cuomo Amid Inquiry Into His Efforts to Aid His Brother',
        abstract:
          'The network said it had “terminated him, effective immediately,” a move that came days after a lawyer for a former colleague accused the host of sexual misconduct.',
        des_facet: [
          'News and News Media',
          'Television',
          'Sexual Harassment',
          'Ethics and Official Misconduct',
        ],
        org_facet: ['CNN'],
        per_facet: ['Cuomo, Christopher', 'Cuomo, Andrew M', 'Zucker, Jeff'],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Chris Cuomo, the top-rated anchor at CNN, had built a successful broadcast career outside of his famed political family.',
            copyright: 'Mike Blake/Reuters',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/04/multimedia/00cnn-cuomo-1/00cnn-cuomo-1-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/04/multimedia/00cnn-cuomo-1/00cnn-cuomo-1-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/04/multimedia/00cnn-cuomo-1/00cnn-cuomo-1-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/acbc8420-8ff3-59c6-9e99-8e865b11505b',
        url: 'https://www.nytimes.com/2021/12/05/us/politics/bob-dole-dead.html',
        id: 100000006681205,
        asset_id: 100000006681205,
        source: 'New York Times',
        published_date: '2021-12-05',
        updated: '2021-12-06 06:03:39',
        section: 'U.S.',
        subsection: 'Politics',
        nytdsection: 'u.s.',
        adx_keywords:
          'Deaths (Obituaries);United States Politics and Government;Presidential Election of 1996;World War II (1939-45);Dole, Bob;Senate;Republican Party;Kansas',
        column: null,
        byline: 'By Katharine Q. Seelye',
        type: 'Article',
        title: 'Bob Dole, Old Soldier and Stalwart of the Senate, Dies at 98',
        abstract:
          'Mr. Dole, a son of the Kansas prairie who was left for dead on a World War II battlefield, became one of the longest-serving Republican leaders.',
        des_facet: [
          'Deaths (Obituaries)',
          'United States Politics and Government',
          'Presidential Election of 1996',
          'World War II (1939-45)',
        ],
        org_facet: ['Senate', 'Republican Party'],
        per_facet: ['Dole, Bob'],
        geo_facet: ['Kansas'],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Bob Dole in 1996. He was the last of the World War II generation to win the Republican nomination for president.',
            copyright: 'Stephen Crowley/The New York Times',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/03/04/obituaries/00Dole-Obit-new/00Dole-Obit-new-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/03/04/obituaries/00Dole-Obit-new/00Dole-Obit-new-mediumThreeByTwo210-v2.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/03/04/obituaries/00Dole-Obit-new/00Dole-Obit-new-mediumThreeByTwo440-v2.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/3f80bf2b-9d3d-56f7-be54-cdb8ccfc2b56',
        url: 'https://www.nytimes.com/2021/12/10/us/youtube-scuba-diver-missing-teens.html',
        id: 100000008113221,
        asset_id: 100000008113221,
        source: 'New York Times',
        published_date: '2021-12-10',
        updated: '2021-12-11 14:49:38',
        section: 'U.S.',
        subsection: '',
        nytdsection: 'u.s.',
        adx_keywords:
          'Missing Persons;Computers and the Internet;Traffic Accidents and Safety;Diving and Divers;Sonar;YouTube.com;Sparta (Tenn);Tennessee',
        column: null,
        byline: 'By Amanda Holpuch',
        type: 'Article',
        title:
          'Scuba-Diving YouTuber Finds Car Linked to Teens Missing Since 2000',
        abstract:
          'A YouTuber who investigates cold cases found a missing Tennessee teenager’s car submerged in a nearby river. It is at least the fourth such discovery by amateur investigators in two months.',
        des_facet: [
          'Missing Persons',
          'Computers and the Internet',
          'Traffic Accidents and Safety',
          'Diving and Divers',
          'Sonar',
        ],
        org_facet: ['YouTube.com'],
        per_facet: [],
        geo_facet: ['Sparta (Tenn)', 'Tennessee'],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Jeremy Bechtel and Erin Foster disappeared in April 2000 after leaving Erin’s home. Last week, a YouTuber found her car submerged in a nearby river.',
            copyright: 'Knoxville News Sentinel via The Associated Press',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/12/lens/09xp-scuba1/09xp-scuba1-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/12/lens/09xp-scuba1/09xp-scuba1-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/12/lens/09xp-scuba1/09xp-scuba1-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/f98323b1-481f-5a51-b1f8-b684d1459cc2',
        url: 'https://www.nytimes.com/2021/12/08/arts/music/yoko-ono-beatles-get-back.html',
        id: 100000008108646,
        asset_id: 100000008108646,
        source: 'New York Times',
        published_date: '2021-12-08',
        updated: '2021-12-10 16:46:03',
        section: 'Arts',
        subsection: 'Music',
        nytdsection: 'arts',
        adx_keywords:
          'Documentary Films and Programs;Pop and Rock Music;audio-neutral-informative;audio-positive-nostalgic;Ono, Yoko;Lennon, John;McCartney, Paul;Beatles, The',
        column: null,
        byline: 'By Amanda Hess',
        type: 'Article',
        title: 'The Sublime Spectacle of Yoko Ono Disrupting the Beatles',
        abstract:
          'In Peter Jackson’s “The Beatles: Get Back,” Ono is a performance artist at the height of her powers.',
        des_facet: [
          'Documentary Films and Programs',
          'Pop and Rock Music',
          'audio-neutral-informative',
          'audio-positive-nostalgic',
        ],
        org_facet: ['Beatles, The'],
        per_facet: ['Ono, Yoko', 'Lennon, John', 'McCartney, Paul'],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright:
              'Photo illustration by Yechan Jung; Photo via Apple Corps',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/08/arts/08yoko-notebook-background/08yoko-notebook-background-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/08/arts/08yoko-notebook-background/08yoko-notebook-background-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/08/arts/08yoko-notebook-background/08yoko-notebook-background-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/4bc72ef7-d16d-513c-bc59-938694c36154',
        url: 'https://www.nytimes.com/2021/12/09/nyregion/trump-subpoena-testimony-letitia-james.html',
        id: 100000008113329,
        asset_id: 100000008113329,
        source: 'New York Times',
        published_date: '2021-12-09',
        updated: '2021-12-10 09:13:44',
        section: 'New York',
        subsection: '',
        nytdsection: 'new york',
        adx_keywords:
          'United States Politics and Government;Frauds and Swindling;Suits and Litigation (Civil);Ethics and Official Misconduct;James, Letitia;Trump, Donald J;Vance, Cyrus R Jr;Trump Organization;New York State',
        column: null,
        byline: 'By Jonah E. Bromwich, Ben Protess and William K. Rashbaum',
        type: 'Article',
        title:
          'New York A.G. to Subpoena Trump to Testify in Fraud Investigation',
        abstract:
          'The move by the attorney general, Letitia James, comes at a critical moment in a criminal inquiry into the former president, who could try to block the demand.',
        des_facet: [
          'United States Politics and Government',
          'Frauds and Swindling',
          'Suits and Litigation (Civil)',
          'Ethics and Official Misconduct',
        ],
        org_facet: ['Trump Organization'],
        per_facet: ['James, Letitia', 'Trump, Donald J', 'Vance, Cyrus R Jr'],
        geo_facet: ['New York State'],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Letitia James, the New York attorney general, has been conducting a civil inquiry into Donald J. Trump’s business practices. ',
            copyright: 'Doug Mills/The New York Times',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/09/nyregion/09nyjames-trump/09nyjames-trump-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/09/nyregion/09nyjames-trump/09nyjames-trump-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/09/nyregion/09nyjames-trump/09nyjames-trump-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/4a8ba125-8433-512a-9863-6df4a6a9ce20',
        url: 'https://www.nytimes.com/2021/12/06/movies/best-movies.html',
        id: 100000008093397,
        asset_id: 100000008093397,
        source: 'New York Times',
        published_date: '2021-12-06',
        updated: '2021-12-07 13:35:21',
        section: 'Movies',
        subsection: '',
        nytdsection: 'movies',
        adx_keywords: 'Movies;Two Thousand Twenty One',
        column: null,
        byline: 'By A.O. Scott and Manohla Dargis',
        type: 'Article',
        title: 'Best Movies of 2021',
        abstract:
          'Even when a film wasn’t great, filmgoing was. But there were some truly wonderful releases, ranging from music docs and musicals to westerns and the just plain weird.',
        des_facet: ['Movies', 'Two Thousand Twenty One'],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Benedict Cumberbatch in “The Power of the Dog,” left, Kristen Stewart in “Spencer” and Ariana DeBose in “West Side Story.”',
            copyright:
              'From left: Kirsty Griffin/Netflix; Pablo Larrain/Neon; Niko Tavernise/20th Century Studios',
            approved_for_syndication: 0,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/06/arts/06best-movies-2021/06best-movies-2021-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/06/arts/06best-movies-2021/06best-movies-2021-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/06/arts/06best-movies-2021/06best-movies-2021-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/e4e2192b-1121-523f-a6f1-2045787e7b79',
        url: 'https://www.nytimes.com/2021/12/08/nyregion/fox-christmas-tree-fire.html',
        id: 100000008111209,
        asset_id: 100000008111209,
        source: 'New York Times',
        published_date: '2021-12-08',
        updated: '2021-12-10 03:28:19',
        section: 'New York',
        subsection: '',
        nytdsection: 'new york',
        adx_keywords:
          'Christmas Trees;Fires and Firefighters;Fox News Channel;Avenue of the Americas (Manhattan, NY);New York City',
        column: null,
        byline: 'By Mike Ives',
        type: 'Article',
        title:
          'Fox News Replaces Christmas Tree That Went Up in Flames in Manhattan',
        abstract:
          'The original 50-foot tree had been ceremonially lit days earlier during a broadcast. A man was charged with seven counts including arson.',
        des_facet: ['Christmas Trees', 'Fires and Firefighters'],
        org_facet: ['Fox News Channel'],
        per_facet: [],
        geo_facet: ['Avenue of the Americas (Manhattan, NY)', 'New York City'],
        media: [],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/edb27a65-6345-5819-a348-9e36d9f68f7a',
        url: 'https://www.nytimes.com/2021/12/10/arts/music/michael-nesmith-dead.html',
        id: 100000006707703,
        asset_id: 100000006707703,
        source: 'New York Times',
        published_date: '2021-12-10',
        updated: '2021-12-11 18:41:53',
        section: 'Arts',
        subsection: 'Music',
        nytdsection: 'arts',
        adx_keywords:
          'Deaths (Obituaries);Pop and Rock Music;Television;Video Recordings, Downloads and Streaming;Nesmith, Michael;Monkees, The (Music Group)',
        column: null,
        byline: 'By Neil Genzlinger',
        type: 'Article',
        title: 'Michael Nesmith, the ‘Quiet Monkee,’ Is Dead at 78',
        abstract:
          'He shot to fame as a member of a made-for-TV rock group, but he denied that he was the group’s only “real” musician. He went on to create some of the first music videos.',
        des_facet: [
          'Deaths (Obituaries)',
          'Pop and Rock Music',
          'Television',
          'Video Recordings, Downloads and Streaming',
        ],
        org_facet: ['Monkees, The (Music Group)'],
        per_facet: ['Nesmith, Michael'],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Michael Nesmith in a scene from “The Monkees.” The band had a string of hit records and became a cultural reference point, but their TV show lasted only two seasons.',
            copyright: 'Getty Images',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/11/obituaries/11Nesmith-obit/10Nesmith-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/11/obituaries/11Nesmith-obit/10Nesmith-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/11/obituaries/11Nesmith-obit/10Nesmith-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/f9665b63-92db-5036-8f2e-86b0dfb885de',
        url: 'https://www.nytimes.com/2021/11/30/books/review/best-books-2021.html',
        id: 100000008090244,
        asset_id: 100000008090244,
        source: 'New York Times',
        published_date: '2021-11-30',
        updated: '2021-12-12 19:33:06',
        section: 'Books',
        subsection: 'Book Review',
        nytdsection: 'books',
        adx_keywords:
          'Books and Literature;Two Thousand Twenty One;Mbue, Imbolo;Kitamura, Katie;Jeffers, Honoree Fanonne;Lockwood, Patricia;Labatut, Benjamin;Ditlevsen, Tove;Smith, Clint (Poet);Elliott, Andrea;Gordon-Reed, Annette;Clark, Heather (Author)',
        column: null,
        byline: '',
        type: 'Article',
        title: 'The 10 Best Books of 2021',
        abstract:
          'Editors at The Times Book Review choose the best fiction and nonfiction titles this year.',
        des_facet: ['Books and Literature', 'Two Thousand Twenty One'],
        org_facet: [],
        per_facet: [
          'Mbue, Imbolo',
          'Kitamura, Katie',
          'Jeffers, Honoree Fanonne',
          'Lockwood, Patricia',
          'Labatut, Benjamin',
          'Ditlevsen, Tove',
          'Smith, Clint (Poet)',
          'Elliott, Andrea',
          'Gordon-Reed, Annette',
          'Clark, Heather (Author)',
        ],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Matt Blease',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/12/books/review/12TenBest-COVER/12TenBest-COVER-thumbStandard.gif',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/12/books/review/12TenBest-COVER/12TenBest-COVER-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/12/books/review/12TenBest-COVER/12TenBest-COVER-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/7217d0e3-186b-57ce-9a32-6581a0fbd80c',
        url: 'https://www.nytimes.com/live/2021/12/06/world/omicron-variant-covid/nyc-vaccine-mandate-deblasio',
        id: 100000008108048,
        asset_id: 100000008108048,
        source: 'New York Times',
        published_date: '2021-12-06',
        updated: '2021-12-06 18:49:25',
        section: 'New York',
        subsection: '',
        nytdsection: 'new york',
        adx_keywords:
          'Coronavirus Omicron Variant;Coronavirus (2019-nCoV);Vaccination and Immunization;de Blasio, Bill;New York City',
        column: null,
        byline: 'By Emma G. Fitzsimmons',
        type: 'Article',
        title:
          'New York City sets a sweeping vaccine mandate for all private employers.',
        abstract:
          'Mayor Bill de Blasio described the measure as a “pre-emptive strike” designed to stall another wave of coronavirus cases and help reduce transmission of the Omicron variant.',
        des_facet: [
          'Coronavirus Omicron Variant',
          'Coronavirus (2019-nCoV)',
          'Vaccination and Immunization',
        ],
        org_facet: [],
        per_facet: ['de Blasio, Bill'],
        geo_facet: ['New York City'],
        media: [],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/cbc3162c-0ef6-5b3b-9999-abb266500a84',
        url: 'https://www.nytimes.com/2021/12/07/sports/soccer/psg-attack-diallo-hamraoui.html',
        id: 100000008096910,
        asset_id: 100000008096910,
        source: 'New York Times',
        published_date: '2021-12-07',
        updated: '2021-12-08 10:47:38',
        section: 'Sports',
        subsection: 'Soccer',
        nytdsection: 'sports',
        adx_keywords:
          'Soccer;Assaults;Diallo, Aminata (1995- );Hamraoui, Kheira (1990- );Abidal, Eric;Paris St-Germain FC (Soccer Team)',
        column: null,
        byline: 'By Tariq Panja',
        type: 'Article',
        title: 'Truth Is Elusive in Attack on a French Soccer Star',
        abstract:
          'The assault of a top women’s player made headlines, with masked men, a metal bar and the arrest of a teammate. But weeks later, new details suggest the original story might have been wrong.',
        des_facet: ['Soccer', 'Assaults'],
        org_facet: ['Paris St-Germain FC (Soccer Team)'],
        per_facet: [
          'Diallo, Aminata (1995- )',
          'Hamraoui, Kheira (1990- )',
          'Abidal, Eric',
        ],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'The assault of a French soccer player on a dark street in a Paris suburb lasted only a minute.',
            copyright: 'James Hill for The New York Times',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/06/sports/06psg-women1/06psg-women1-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/06/sports/06psg-women1/06psg-women1-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/06/sports/06psg-women1/06psg-women1-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/c58e305d-7a73-5bd7-8c1b-c7d89d8f0f8d',
        url: 'https://www.nytimes.com/2021/12/02/magazine/abortion-parent-mother-child.html',
        id: 100000008092867,
        asset_id: 100000008092867,
        source: 'New York Times',
        published_date: '2021-12-02',
        updated: '2021-12-08 09:12:09',
        section: 'Magazine',
        subsection: '',
        nytdsection: 'magazine',
        adx_keywords:
          'Pregnancy and Childbirth;Content Type: Personal Profile;Parenting;Abortion',
        column: null,
        byline: 'By Merritt Tierce',
        type: 'Article',
        title: 'The Abortion I Didn’t Have',
        abstract:
          'I never thought about ending my pregnancy. Instead, at 19, I erased the future I had imagined for myself.',
        des_facet: [
          'Pregnancy and Childbirth',
          'Content Type: Personal Profile',
          'Parenting',
          'Abortion',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Hokyoung Kim',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/05/magazine/05mag-abortion/05mag-abortion-thumbStandard-v2.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/05/magazine/05mag-abortion/05mag-abortion-mediumThreeByTwo210-v2.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/05/magazine/05mag-abortion/05mag-abortion-mediumThreeByTwo440-v2.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/755c7465-e8bd-5495-8545-b91ffc2aeb3c',
        url: 'https://www.nytimes.com/2021/12/06/world/africa/omicron-coronavirus-research-spread.html',
        id: 100000008108353,
        asset_id: 100000008108353,
        source: 'New York Times',
        published_date: '2021-12-06',
        updated: '2021-12-07 17:03:16',
        section: 'World',
        subsection: 'Africa',
        nytdsection: 'world',
        adx_keywords:
          'Coronavirus Omicron Variant;Coronavirus (2019-nCoV);Disease Rates;South Africa',
        column: null,
        byline: 'By Lynsey Chutel, Richard Pérez-Peña and Emily Anthes',
        type: 'Article',
        title:
          'Omicron Is Fast Moving, but Perhaps Less Severe, Early Reports Suggest',
        abstract:
          'Researchers in South Africa, where the variant is spreading quickly, say it may cause less serious Covid cases than other forms of the virus, but it is unclear whether that will hold true.',
        des_facet: [
          'Coronavirus Omicron Variant',
          'Coronavirus (2019-nCoV)',
          'Disease Rates',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: ['South Africa'],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: 'A vaccination site in Johannesburg, South Africa.',
            copyright: 'Joao Silva/The New York Times',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/06/multimedia/06virus-safrica3/06virus-safrica3-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/06/multimedia/06virus-safrica3/06virus-safrica3-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/06/multimedia/06virus-safrica3/06virus-safrica3-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/77d064bc-e230-52fa-87e0-6f2389e1d09d',
        url: 'https://www.nytimes.com/2021/12/10/sports/football/demaryius-thomas-dead.html',
        id: 100000008114777,
        asset_id: 100000008114777,
        source: 'New York Times',
        published_date: '2021-12-10',
        updated: '2021-12-11 13:49:09',
        section: 'Sports',
        subsection: 'N.F.L.',
        nytdsection: 'sports',
        adx_keywords:
          'Deaths (Obituaries);Football;Thomas, Demaryius;Denver Broncos',
        column: null,
        byline: 'By Livia Albeck-Ripka',
        type: 'Article',
        title: 'Demaryius Thomas, Ex-Denver Bronco, Is Found Dead',
        abstract:
          'Thomas, 33, played as a wide receiver in the National Football League for 10 seasons and helped lead the Broncos to victory in the Super Bowl in 2016. He retired in June.',
        des_facet: ['Deaths (Obituaries)', 'Football'],
        org_facet: ['Denver Broncos'],
        per_facet: ['Thomas, Demaryius'],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption:
              'Demaryius Thomas of the Denver Broncos warming up before a game against the Kansas City Chiefs in 2018.',
            copyright: 'Justin Edmonds/Getty Images',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/10/world/10thomas-05/10thomas-05-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/10/world/10thomas-05/merlin_144689571_89ca45c3-81b3-439b-b276-5ef64d9a9588-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/10/world/10thomas-05/merlin_144689571_89ca45c3-81b3-439b-b276-5ef64d9a9588-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
      {
        uri: 'nyt://article/4ce8e0c2-bdc1-5814-bcc6-35466240f9be',
        url: 'https://www.nytimes.com/2021/11/30/well/eat/why-does-coffee-make-you-poop.html',
        id: 100000008055623,
        asset_id: 100000008055623,
        source: 'New York Times',
        published_date: '2021-11-30',
        updated: '2021-12-06 23:11:12',
        section: 'Well',
        subsection: 'Eat',
        nytdsection: 'well',
        adx_keywords:
          'Caffeine;Diet and Nutrition;Bowels;Colon;Content Type: Service;Constipation;Digestive Tract;Coffee',
        column: null,
        byline: 'By Alice Callahan',
        type: 'Article',
        title: 'Why Does Coffee Make Me Poop?',
        abstract:
          'It’s not clear why coffee can stimulate a bowel movement, but the speed of this effect suggests it’s mediated by the brain.',
        des_facet: [
          'Caffeine',
          'Diet and Nutrition',
          'Bowels',
          'Colon',
          'Content Type: Service',
          'Constipation',
          'Digestive Tract',
          'Coffee',
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        media: [
          {
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Aileen Son for The New York Times',
            approved_for_syndication: 1,
            'media-metadata': [
              {
                url: 'https://static01.nyt.com/images/2021/12/07/ASKWELL-COFFEE-POOP1/merlin_196866864_e987c792-47c2-44dd-812e-4ede682bb586-thumbStandard.jpg',
                format: 'Standard Thumbnail',
                height: 75,
                width: 75,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/07/ASKWELL-COFFEE-POOP1/merlin_196866864_e987c792-47c2-44dd-812e-4ede682bb586-mediumThreeByTwo210.jpg',
                format: 'mediumThreeByTwo210',
                height: 140,
                width: 210,
              },
              {
                url: 'https://static01.nyt.com/images/2021/12/07/ASKWELL-COFFEE-POOP1/merlin_196866864_e987c792-47c2-44dd-812e-4ede682bb586-mediumThreeByTwo440.jpg',
                format: 'mediumThreeByTwo440',
                height: 293,
                width: 440,
              },
            ],
          },
        ],
        eta_id: 0,
      },
    ];

    service.getAllNews().subscribe((posts) => {
      expect(posts.length).toBe(20);
      expect(posts.results).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.endpoint.NY_API}`);
    expect(request.request.method).toBe('GET');

    request.flush(dummyPosts);
  });
});
