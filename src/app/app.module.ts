import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './core/layout/app.layout.module';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './core/pages/aboutme/aboutme.component';
import { HomeComponent } from './core/pages/home/home.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { MyLinksComponent } from './core/pages/my-links/my-links.component';
import { MyProjectsComponent } from './core/pages/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    ContactComponent,
    MyLinksComponent,
    MyProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    CardModule,
    FormsModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
