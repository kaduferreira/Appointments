import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppointmentsComponent } from './appointments/appointments.component';

export const ROUTES: Routes = [
  {
    path: '', children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
      // { path: 'mainpage', component: MainLayoutComponent, canActivate: [AuthGuardService], loadChildren: './+home#HomeModule' }
    ]
  },
  {
    path: 'appointments', component: MainLayoutComponent,  children: [
      { path: '', component: AppointmentsComponent }
    ]
  }
];
