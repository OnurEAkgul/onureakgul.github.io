import { Injectable, computed, signal } from '@angular/core';
import { cvEn } from '../data/cv.en';
import { cvTr } from '../data/cv.tr';
import { CvData, Lang, UiCopy } from '../data/cv.model';
import { uiEn, uiTr } from '../data/ui.i18n';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly langSignal = signal<Lang>('en');

  readonly lang = this.langSignal.asReadonly();
  readonly cv = computed<CvData>(() => (this.langSignal() === 'tr' ? cvTr : cvEn));
  readonly ui = computed<UiCopy>(() => (this.langSignal() === 'tr' ? uiTr : uiEn));

  setLang(lang: Lang): void {
    this.langSignal.set(lang);
  }

  isValidLang(value: string | null | undefined): value is Lang {
    return value === 'en' || value === 'tr';
  }
}
