// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { HomeComponent } from './app/home/home.component';
import { WorksComponent } from './app/works/works.component';
import { ImagesComponent } from './app/images/images.component';
import { BlogsComponent } from './app/blogs/blogs.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      HomeComponent,
      WorksComponent,
      ImagesComponent,
      BlogsComponent
    )
  ]
}).catch(err => console.error(err));
