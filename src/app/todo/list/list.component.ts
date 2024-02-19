// list.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../model/todo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   taskList: Todo[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<Todo>();
  
  editingTodo: Todo | null = null;
  editedTodo: Todo = {
    id: 0, title: '', isCompleted: false,
    isFavorite: false,
    date: new Date()
  };

  constructor(private todoService: TodoService, private toasterService: ToastrService) {}

  deleteTodo(index: number): void {
    this.todoService.onDeleteTask(index);
    this.toasterService.error(`Todo ${index} Deleted!`, 'Deleted Successfully');
  }

  onEditTask(todo: Todo): void {
    this.editingTodo = todo;
    this.editedTodo = { ...todo }; 
  }

  saveEditedTodo(): void {
    if (this.editingTodo) {
      this.todoService.editTodo(this.editingTodo.id, this.editedTodo);
      this.toasterService.success(`Todo edited successfully!`, 'Success');
      this.editingTodo = null;
    }
  }

  ngOnInit(): void {
    this.taskList = this.todoService.todoList;
  }
}
