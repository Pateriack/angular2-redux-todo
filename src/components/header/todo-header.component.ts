import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html'
})
export class TodoHeaderComponent {
  @Output() newTodo = new EventEmitter<string>();
}
