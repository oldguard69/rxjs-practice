import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveIndexComponent } from './reactive-index/reactive-index.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

const routes: Routes = [
  {
    path: '', component: ReactiveIndexComponent,
    children: [
      { path: 'stopwatch', component: StopWatchComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
