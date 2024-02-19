import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesEgComponent } from './pipes-eg.component';

const routes: Routes = [
  { path: '', component: PipesEgComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesEgRoutingModule { }
