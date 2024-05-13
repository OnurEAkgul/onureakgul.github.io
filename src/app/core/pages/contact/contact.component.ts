import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  Subject: string = '';
  name: string = '';
  message: string = '';

  constructor() {}

  sendMessage() {
    const subject = encodeURIComponent(this.Subject);
    const body = encodeURIComponent(`${this.message}`);
    const mailtoLink = `mailto:onurerenakgul@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }

  clear() {
    this.name = '';
    this.Subject = '';
    this.message = '';
  }
}
