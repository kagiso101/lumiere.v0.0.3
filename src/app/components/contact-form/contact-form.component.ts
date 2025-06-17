import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize EmailJS with your public user ID (optional but recommended)
    emailjs.init('7EM-D8jZaNG09jRsG');


    this.form = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  message: [''],
  services: this.fb.group({
    branding: [false],
    ai: [false],
    design: [false],
    socialMediaManagement: [false],
    marketing: [false],
    advertising: [false],
    seo: [false],
    contentCreation: [false],
  }),
});
  }

  onSubmit() {
    if (this.form.valid) {
      const serviceID = 'service_4hqmki2';
      const templateID = 'template_3z2p28b';

      // Get selected services as comma-separated string
      const services = this.form.value.services;
      const selectedServices = Object.keys(services)
        .filter(key => services[key])
        .join(', ');

      // Prepare the template parameters — make sure these match your EmailJS template variables
      const templateParams = {
        to_email: 'support@lumieremedia.co.za',  // your email as recipient (optional depending on your EmailJS template)
        from_name: this.form.value.name,
        from_email: this.form.value.email,
        message: this.form.value.message,
        services: selectedServices
      };

      // Send the email using EmailJS
      emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
          alert('Message sent!');
          this.form.reset();
        })
        .catch((err) => {
          console.error('Email send error:', err);
          alert('Failed to send message.');
        });

    } else {
      this.form.markAllAsTouched();
    }
  }
}
