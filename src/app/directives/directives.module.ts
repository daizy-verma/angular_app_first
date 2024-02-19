import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { RouterModule, Routes } from '@angular/router';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

const routes: Routes = [
  {path: '', component:DirectivesComponent},
  {path: 'switch', component:NgswitchComponent},


]

@NgModule({
  declarations: [
    DirectivesComponent,
    NgswitchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }
