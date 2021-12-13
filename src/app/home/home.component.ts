import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModel } from './models/news.model';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newList = [] as NewsModel[];
  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((res: any) => {
      console.log(res.results);
      this.newList = res.results;
    });
  }

  goToDetails(news: NewsModel): void {
    this.newsService.saveNewsDetails(news);
    this.router.navigate(['home/details']);
  }
}
