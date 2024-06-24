import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Process form submission here
    // You can add your own logic for form submission, such as API requests or form validation
    console.log('Form submitted:', this.formData);
  }
  onSubmit() {
    // Handle form submission here
    console.log('Form submitted');
  }
  
}
