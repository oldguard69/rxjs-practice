import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { ReactiveIndexComponent } from './reactive-index/reactive-index.component';
import { MaterialModule } from '../material.module';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    StopWatchComponent,
    ReactiveIndexComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    MaterialModule
  ]
})
export class ReactiveModule { }
