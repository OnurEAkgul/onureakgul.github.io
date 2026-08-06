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

  /** Router link segments for the current language (EN = no prefix). */
  link(...segments: string[]): string[] {
    const path = segments.filter(Boolean);
    if (this.langSignal() === 'tr') {
      return path.length ? ['/', 'tr', ...path] : ['/', 'tr'];
    }
    return path.length ? ['/', ...path] : ['/'];
  }

  /** Absolute site path for SEO/canonical (EN = root). */
  path(...segments: string[]): string {
    const path = segments.filter(Boolean).join('/');
    if (this.langSignal() === 'tr') {
      return path ? `/tr/${path}` : '/tr';
    }
    return path ? `/${path}` : '/';
  }
}
