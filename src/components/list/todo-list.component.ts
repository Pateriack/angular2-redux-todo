import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { ITodoList, ITodo } from '../../store';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent{
  @Input() todos: ITodoList;
  @Output() toggleTodo = new EventEmitter<number>();
  @Output() destroyTodo = new EventEmitter<number>();
  @Output() toggleAll = new EventEmitter<boolean>();

  allCompleted(): boolean {
    return this.todos.size > 0 && this.todos.reduce((completed: boolean, todo: ITodo) => completed ? todo.completed : false, true);
  }
}
