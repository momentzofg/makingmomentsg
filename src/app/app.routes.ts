// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ImagesComponent } from './images/images.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ConnectComponent } from './connect/connect.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'connect', component: ConnectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
