import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  declarations: [HomeComponent, NewsDetailsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
