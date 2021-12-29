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
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }
  signUpFormData() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }
}
