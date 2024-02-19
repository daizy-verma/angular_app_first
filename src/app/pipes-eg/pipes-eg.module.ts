import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesEgRoutingModule } from './pipes-eg-routing.module';
import { PipesEgComponent } from './pipes-eg.component';
import { NumberPipe } from './number.pipe';


@NgModule({
  declarations: [
    PipesEgComponent,
    NumberPipe
  ],
  imports: [
    CommonModule,
    PipesEgRoutingModule
  ],
 
})
export class PipesEgModule { }
