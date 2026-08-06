import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { LanguageService } from '../services/language.service';
import { MailService } from '../services/mail.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Button, InputText, Textarea],
  template: `
    <section class="page">
      <header class="page-header">
        <h1>{{ ui().contact.title }}</h1>
        <p>{{ ui().contact.subtitle }}</p>
      </header>

      <form class="form" (ngSubmit)="sendMessage()">
        <label>
          <span>{{ ui().contact.name }} <em>*</em></span>
          <input pInputText name="name" [(ngModel)]="name" autocomplete="name" required />
        </label>

        <label>
          <span>{{ ui().contact.email }} <em>*</em></span>
          <input
            pInputText
            type="email"
            name="replyEmail"
            [(ngModel)]="replyEmail"
            autocomplete="email"
            required
          />
        </label>

        <label class="full">
          <span>{{ ui().contact.subject }} <em>*</em></span>
          <input pInputText name="subject" [(ngModel)]="subject" required />
        </label>

        <label class="full">
          <span>{{ ui().contact.message }} <em>*</em></span>
          <textarea pTextarea name="message" rows="6" [(ngModel)]="message" required></textarea>
        </label>

        <div class="actions">
          <p-button
            type="button"
            [label]="ui().contact.clear"
            [outlined]="true"
            [disabled]="sending"
            (onClick)="clear()"
          />
          <p-button
            type="submit"
            [label]="sending ? ui().contact.sending : ui().contact.send"
            icon="pi pi-send"
            [loading]="sending"
            [disabled]="sending"
          />
        </div>
      </form>
    </section>
  `,
  styles: `
    .page-header h1 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 3.2rem);
      margin: 0 0 0.5rem;
      letter-spacing: -0.03em;
    }

    .page-header p {
      color: var(--muted);
      margin: 0 0 1.75rem;
      max-width: 40rem;
      line-height: 1.6;
    }

    .form {
      display: grid;
      gap: 1rem;
      background: var(--bg-elevated);
      border: 1px solid var(--line);
      border-radius: 1.1rem;
      padding: 1.4rem;
    }

    label {
      display: grid;
      gap: 0.45rem;
    }

    label span {
      font-weight: 600;
      color: var(--ink-soft);
      font-size: 0.92rem;
    }

    label span em {
      color: var(--accent);
      font-style: normal;
      font-weight: 700;
    }

    input,
    textarea {
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.7rem;
      flex-wrap: wrap;
    }

    @media (min-width: 720px) {
      .form {
        grid-template-columns: 1fr 1fr;
      }

      .full,
      .actions {
        grid-column: 1 / -1;
      }
    }
  `,
})
export class ContactComponent implements OnInit {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);
  private readonly mail = inject(MailService);
  private readonly messages = inject(MessageService);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;

  name = '';
  replyEmail = '';
  subject = '';
  message = '';
  sending = false;

  ngOnInit(): void {
    this.seo.update(this.ui().contact.title, this.ui().contact.subtitle, `/${this.lang()}/contact`);
  }

  async sendMessage(): Promise<void> {
    if (!this.name.trim() || !this.replyEmail.trim() || !this.subject.trim() || !this.message.trim()) {
      this.messages.add({
        severity: 'warn',
        summary: this.ui().contact.title,
        detail: this.ui().contact.missingFields,
        life: 4000,
      });
      return;
    }

    this.sending = true;

    try {
      await this.mail.sendContact({
        name: this.name.trim(),
        replyEmail: this.replyEmail.trim(),
        subject: this.subject.trim(),
        message: this.message.trim(),
      });
      this.messages.add({
        severity: 'success',
        summary: this.ui().contact.title,
        detail: this.ui().contact.success,
        life: 5000,
      });
      this.clear();
    } catch {
      this.messages.add({
        severity: 'error',
        summary: this.ui().contact.title,
        detail: this.ui().contact.error,
        life: 5000,
      });
    } finally {
      this.sending = false;
    }
  }

  clear(): void {
    this.name = '';
    this.replyEmail = '';
    this.subject = '';
    this.message = '';
  }
}
