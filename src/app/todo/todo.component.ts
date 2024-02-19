import { Component } from '@angular/core';
import { Todo } from './model/todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
task: string ='';
taskListParent : Todo[] = [];
  taskList: any;

  constructor(private todoService: TodoService ){

  }

deleteTask(index: number): void {
  this.taskListParent.splice(index, 1);
}

editTask(data:any){
  
console.log(data);
console.log((data.id)-1);

  this.todoService.editTodo((data.id)-1, data)
}

submit(form:any){
  console.log(form)
  this.todoService.addTask(form);
}

}
