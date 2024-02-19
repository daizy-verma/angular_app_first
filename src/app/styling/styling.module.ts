import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingComponent } from './styling.component';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  {path: '', component:StylingComponent},
]

@NgModule({
  declarations: [
    StylingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StylingModule { }
