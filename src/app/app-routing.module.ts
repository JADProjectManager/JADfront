import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { AuthGuard } from "./auth/auth.guard";
import { SigninComponent } from './signin/signin.component';


const routes: Routes =[
  //{ path: 'sign-up', component: SignupComponent },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: MainLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
