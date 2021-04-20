import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'other', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: '', loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }