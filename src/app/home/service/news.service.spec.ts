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
    ];

    service.getAllNews().subscribe((posts) => {
      expect(posts.length).toBe(1);
      expect(posts.results).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.endpoint.NY_API}`);
    expect(request.request.method).toBe('GET');

    request.flush(dummyPosts);
  });
});
