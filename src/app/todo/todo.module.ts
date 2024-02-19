import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    

  ]
})
export class TodoModule { }
