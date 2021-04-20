import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";

const components = [
  MatInputModule,
  MatTableModule,
  MatSidenavModule,
  MatExpansionModule
];

@NgModule({
  imports: [
    CommonModule,
    components
  ],
  exports: [components]
})
export class MaterialModule { }
