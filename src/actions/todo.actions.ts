import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class TodoActions {
  static NEW_TODO: string = 'NEW_TODO';
  static TOGGLE_TODO: string = 'TOGGLE_TODO';
  static DESTROY_TODO: string = 'DESTROY_TODO';
  static TOGGLE_ALL: string = 'TOGGLE_ALL';
  static CLEAR_COMPLETED: string = 'CLEAR_COMPLETED';

  constructor (private ngRedux: NgRedux<IAppState>) {}

  newTodo (text: string) {
    this.ngRedux.dispatch({
      type: TodoActions.NEW_TODO,
      payload: {text: text, completed: false}
    });
  }

  toggleTodo (id: number) {
    this.ngRedux.dispatch({
      type: TodoActions.TOGGLE_TODO,
      payload: {id: id}
    });
  }

  destroyTodo (id: number) {
    this.ngRedux.dispatch({
      type: TodoActions.DESTROY_TODO,
      payload: {id: id}
    });
  }

  toggleAll (completed: boolean) {
    this.ngRedux.dispatch({
      type: TodoActions.TOGGLE_ALL,
      payload: {completed: completed}
    });
  }

  clearCompleted () {
    this.ngRedux.dispatch({
      type: TodoActions.CLEAR_COMPLETED,
      payload: {}
    });
  }
}
