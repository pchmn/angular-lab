import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesModule } from './../pages.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
