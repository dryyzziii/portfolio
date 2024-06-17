import { Component, NgModule } from '@angular/core';
import { button } from '../../classe/button';
import { DownloadButtonComponent } from '../download-button/download-button.component';
import { EmailService } from '../../services/email.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [DownloadButtonComponent, CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  button: button = new button("Envoyer", "", "assets/svg/send.svg")
  fullName: string = '';
  email: string = '';
  message: string = '';

  constructor(private emailService: EmailService) { }

  sendEmail() {
    const emailData = {
      fullName: this.fullName,
      email: this.email,
      message: this.message
    };

    this.emailService.sendEmail(emailData)
      .subscribe(
        response => console.log('Email sent successfully', response),
        error => console.error('Error sending email', error)
      );
  }
}
