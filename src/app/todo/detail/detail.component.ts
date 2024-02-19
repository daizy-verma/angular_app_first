
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../model/todo.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
   taskList: Todo[] = [];
   id:any;
   selectedData:any;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<Todo>();
  
  editingTodo: Todo | null = null;
  editedTodo: Todo = {
    id: 0, title: '', isCompleted: false,
    isFavorite: false,
    date: new Date()
  };

  constructor(private todoService: TodoService, private toasterService: ToastrService, private route: ActivatedRoute) {    
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params;

    this.taskList = this.todoService.todoList;
    
    this.taskList.filter((object) =>{
      if(object.id == this.id.id ){
        this.selectedData = object;
      }      
    });
  }

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


}
