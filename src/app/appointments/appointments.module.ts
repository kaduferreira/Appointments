import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsComponent } from './appointments.component';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainLayoutComponent,
    AppointmentsComponent
  ],
  exports: [
    AppointmentsComponent
  ]
})
export class AppointmentsModule { }
