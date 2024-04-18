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
    console.log('Name:', this.Subject);
    console.log('Email:', this.name);
    console.log('Message:', this.message);
    const subject = encodeURIComponent(this.Subject);
    const body = encodeURIComponent(
      `Sender: ${this.name}\nMessage: ${this.message}`
    );
    const mailtoLink = `mailto:onurerenakgul@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    // Here you can implement the logic to send the message, e.g., using a service
  }

  clear() {
    this.name = '';
    this.Subject = '';
    this.message = '';
  }
}
