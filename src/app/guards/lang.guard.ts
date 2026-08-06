import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

export const langGuard: CanActivateFn = (route) => {
  const language = inject(LanguageService);
  const router = inject(Router);
  const lang = route.paramMap.get('lang');

  if (!language.isValidLang(lang)) {
    return router.createUrlTree(['/en']);
  }

  language.setLang(lang);
  return true;
};
