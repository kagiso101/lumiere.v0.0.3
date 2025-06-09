import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
 form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
      services: this.fb.group({
        branding: [false],
        digitalExperiences: [false],
        webDevelopment: [false],
      }),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Message sent!');
    } else {
      this.form.markAllAsTouched();
    }
  }
}
