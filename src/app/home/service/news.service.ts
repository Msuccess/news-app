import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EndPoints } from '../constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  endpoint: EndPoints;

  constructor(public httpClient: HttpClient) {
    this.endpoint = new EndPoints();
  }

  saveNewsDetails(data: any): void {
    localStorage.setItem('news', JSON.stringify(data));
  }

  getNewsDetails(): Observable<any> {
    const news = localStorage.getItem('news') || '';
    return of(JSON.parse(news));
  }

  getAllNews(): Observable<any> {
    return this.httpClient
      .get(this.endpoint.NY_API)
      .pipe(catchError((err) => throwError(err)));
  }
}
