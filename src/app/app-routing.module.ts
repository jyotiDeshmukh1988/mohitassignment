import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WhatItIsComponent } from './what-it-is/what-it-is.component';

const routes: Routes = [
  { path: 'what-it-is', component: WhatItIsComponent },
  { path: 'how-it-works', component: HowItWorkComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
