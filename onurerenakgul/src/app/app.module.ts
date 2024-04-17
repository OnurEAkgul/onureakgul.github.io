import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from 'src/layout/app.layout.module';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MyLinksComponent } from './pages/my-links/my-links.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    ContactComponent,
    MyLinksComponent,
    MyProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AppLayoutModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
