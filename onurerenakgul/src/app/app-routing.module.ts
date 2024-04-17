import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from 'src/layout/app.layout.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { MyLinksComponent } from './pages/my-links/my-links.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';

const routes: Routes = [
  {
    path: '',
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
