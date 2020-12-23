import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvsComponent } from './envs/envs.component';

const routes: Routes = [
  {path: 'envs', component: EnvsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
