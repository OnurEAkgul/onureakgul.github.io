import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './core/layout/app.layout.component';

import { HomeComponent } from './core/pages/home/home.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { AboutmeComponent } from './core/pages/aboutme/aboutme.component';
import { MyLinksComponent } from './core/pages/my-links/my-links.component';
import { MyProjectsComponent } from './core/pages/my-projects/my-projects.component';

const routes: Routes = [
  {
    path: 'Personal-Web-Page',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'contact-me',
        component: ContactComponent,
      },
      {
        path: 'about-me',
        component: AboutmeComponent,
      },
      {
        path: 'my-links',
        component: MyLinksComponent,
      },
      {
        path: 'my-projects',
        component: MyProjectsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
