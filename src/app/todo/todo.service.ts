import { Injectable } from '@angular/core';
import { Todo } from './model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = [
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-15-2020')
    },
    {
      id: 2,
      title: 'Todo Two',
      isCompleted: false,
      isFavorite: false,
      date: new Date('5-15-2020')
    },
    {
      id: 3,
      title: 'Todo Three',
      isCompleted: true,
      isFavorite: true,
      date: new Date('6-15-2020')
    }
  ];
  constructor() { }

  addTask(form:any){
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: form.task
    }
    this.todoList.unshift(item);
  }

  onDeleteTask(index: number): void {
    this.todoList.splice(index, 1);
  }

  editTodo(id: number, updatedTodo: Todo): void {
    const index = this.todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todoList[index] = updatedTodo;
    }
  }

}
