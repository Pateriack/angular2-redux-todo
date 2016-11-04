import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ITodoList, ITodo } from '../../store';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html'
})
export class TodoFooterComponent {
  @Input() todos: ITodoList;
  @Output() clearComplete = new EventEmitter<void>();

  getNumberIncomplete(){
    return this.todos.reduce((acc: number, todo: ITodo) => todo.completed ? acc : acc + 1, 0);
  }

  getNumberComplete(){
    return this.todos.reduce((acc: number, todo: ITodo) => todo.completed ? acc + 1 : acc, 0);
  }
}
