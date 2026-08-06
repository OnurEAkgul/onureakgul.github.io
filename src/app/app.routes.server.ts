import { RenderMode, ServerRoute } from '@angular/ssr';

const pages = ['', 'about', 'experience', 'skills', 'projects', 'links', 'contact'] as const;

function pagePath(prefix: string, page: string): string {
  if (!page) {
    return prefix;
  }
  return prefix ? `${prefix}/${page}` : page;
}

export const serverRoutes: ServerRoute[] = [
  ...pages.map(
    (page): ServerRoute => ({
      path: pagePath('', page),
      renderMode: RenderMode.Prerender,
    }),
  ),
  ...pages.map(
    (page): ServerRoute => ({
      path: pagePath('tr', page),
      renderMode: RenderMode.Prerender,
    }),
  ),
  { path: '**', renderMode: RenderMode.Client },
];
