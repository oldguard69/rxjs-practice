import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { FormArrayWithTableComponent } from './form-array-with-table/form-array-with-table.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [FormArrayWithTableComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
