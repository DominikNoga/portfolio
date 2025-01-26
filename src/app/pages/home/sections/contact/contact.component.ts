import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;

      emailjs
        .send(
          'portfolio_service', // Replace with your EmailJS service ID
          'Portfolio_Mail_Service', // Replace with your EmailJS template ID
          {
            from_name: name,
            reply_to: email,
            message: message
          },
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            alert('Your message has been sent successfully!');
            this.contactForm.reset();
          },
          (error) => {
            alert('Oops! Something went wrong. Please try again later.');
            console.error('EmailJS error:', error);
          }
        );
    }
  }
}
