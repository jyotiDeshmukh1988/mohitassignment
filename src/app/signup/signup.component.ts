import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]*$/),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w.+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
      ]),
      pwd: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
    });
  }
  signUpFormData() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      alert('Account Created and stored in local');
      localStorage.setItem('userdetail', JSON.stringify(this.signUpForm.value));
      this.signUpForm.reset(); //;
    }
  }
}
