import { Routes } from '@angular/router';
import { langGuard } from './guards/lang.guard';
import { ShellComponent } from './layout/shell.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en' },
  {
    path: ':lang',
    canActivate: [langGuard],
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./pages/experience.component').then((m) => m.ExperienceComponent),
      },
      {
        path: 'skills',
        loadComponent: () => import('./pages/skills.component').then((m) => m.SkillsComponent),
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects.component').then((m) => m.ProjectsComponent),
      },
      {
        path: 'links',
        loadComponent: () => import('./pages/links.component').then((m) => m.LinksComponent),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact.component').then((m) => m.ContactComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'en' },
];
