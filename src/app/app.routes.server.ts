import { RenderMode, ServerRoute } from '@angular/ssr';

const langs = [{ lang: 'en' }, { lang: 'tr' }];

async function langParams() {
  return langs;
}

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  },
  {
    path: ':lang/about',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  },
  {
    path: ':lang/experience',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  },
  {
    path: ':lang/skills',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  },
  {
    path: ':lang/projects',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  },
  {
    path: ':lang/links',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  },
  {
    path: ':lang/contact',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: langParams,
  },
  { path: '**', renderMode: RenderMode.Client },
];
