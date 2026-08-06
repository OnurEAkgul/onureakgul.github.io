import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { emailJsConfig } from '../config/emailjs.config';

export interface ContactPayload {
  name: string;
  subject: string;
  message: string;
  replyEmail?: string;
}

@Injectable({ providedIn: 'root' })
export class MailService {
  private readonly platformId = inject(PLATFORM_ID);

  get isConfigured(): boolean {
    return (
      !emailJsConfig.publicKey.startsWith('REPLACE_') &&
      !emailJsConfig.serviceId.startsWith('REPLACE_') &&
      !emailJsConfig.templateId.startsWith('REPLACE_')
    );
  }

  async sendContact(payload: ContactPayload): Promise<EmailJSResponseStatus> {
    if (!isPlatformBrowser(this.platformId)) {
      throw new Error('Email can only be sent in the browser.');
    }

    if (!this.isConfigured) {
      throw new Error('EmailJS is not configured yet.');
    }

    const now = new Date();
    const time = now.toLocaleString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return emailjs.send(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      {
        title: payload.subject || 'Portfolio Contact',
        name: payload.name || 'Portfolio visitor',
        time,
        message: payload.message,
        email: payload.replyEmail || '',
      },
      { publicKey: emailJsConfig.publicKey },
    );
  }
}
