import { Routes } from '@angular/router';
import { enLangGuard, trLangGuard } from './guards/lang.guard';
import { ShellComponent } from './layout/shell.component';

const pageChildren: Routes = [
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
];

/** Old /en URLs keep working but resolve to root English paths (no duplicate content). */
const enLegacyRedirects: Routes = [
  { path: 'en', pathMatch: 'full', redirectTo: '' },
  { path: 'en/about', redirectTo: 'about' },
  { path: 'en/experience', redirectTo: 'experience' },
  { path: 'en/skills', redirectTo: 'skills' },
  { path: 'en/projects', redirectTo: 'projects' },
  { path: 'en/links', redirectTo: 'links' },
  { path: 'en/contact', redirectTo: 'contact' },
];

export const routes: Routes = [
  {
    path: 'tr',
    canActivate: [trLangGuard],
    component: ShellComponent,
    children: pageChildren,
  },
  ...enLegacyRedirects,
  {
    path: '',
    canActivate: [enLangGuard],
    component: ShellComponent,
    children: pageChildren,
  },
  { path: '**', redirectTo: '' },
];
