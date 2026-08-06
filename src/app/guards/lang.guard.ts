import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Lang } from '../data/cv.model';
import { LanguageService } from '../services/language.service';

function setLang(lang: Lang): CanActivateFn {
  return () => {
    inject(LanguageService).setLang(lang);
    return true;
  };
}

export const enLangGuard = setLang('en');
export const trLangGuard = setLang('tr');
