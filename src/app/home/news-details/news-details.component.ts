import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../models/news.model';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  newsOverview: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNewsDetails().subscribe((news: any) => {
      this.newsOverview = news;
    });
  }
}
