import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../store';
import { TodoService } from '../services';

@Injectable()
export class TodoActions {
  static NEW_TODO: string = 'NEW_TODO';
  static TOGGLE_TODO: string = 'TOGGLE_TODO';
  static DESTROY_TODO: string = 'DESTROY_TODO';
  static TOGGLE_ALL: string = 'TOGGLE_ALL';
  static CLEAR_COMPLETED: string = 'CLEAR_COMPLETED';

  constructor (
    private ngRedux: NgRedux<IAppState>,
    private todoService: TodoService) {}

  newTodo (text: string) {
    return this.todoService.getNextId().then(todoId => {
      this.ngRedux.dispatch({
        type: TodoActions.NEW_TODO,
        payload: {
          id: todoId,
          text: text,
          completed: false
        }
      });
    });
  }

  toggleTodo (id: number) {
    return this.ngRedux.dispatch({
      type: TodoActions.TOGGLE_TODO,
      payload: {id: id}
    });
  }

  destroyTodo (id: number) {
    return this.ngRedux.dispatch({
      type: TodoActions.DESTROY_TODO,
      payload: {id: id}
    });
  }

  toggleAll (completed: boolean) {
    return this.ngRedux.dispatch({
      type: TodoActions.TOGGLE_ALL,
      payload: {completed: completed}
    });
  }

  clearCompleted () {
    return this.ngRedux.dispatch({
      type: TodoActions.CLEAR_COMPLETED,
      payload: {}
    });
  }
}
