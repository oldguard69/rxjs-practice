import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

import { ReactiveIndexComponent } from './reactive-index/reactive-index.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

const routes: Routes = [
  {
    path: '', component: ReactiveIndexComponent,
    children: [
      { path: 'stopwatch', component: StopWatchComponent },
      { path: 'draganddrop', component: DragAndDropComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
