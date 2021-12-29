import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from './signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private router: Router) {}
  model: any = {};

  onSubmit() {
    sessionStorage.setItem('LogindataSource', JSON.stringify(this.model));
    setTimeout(() => {
      this.router.navigate(['/what-it-is']);
    }, 2000);
  }
  ngOnInit(): void {}
}
