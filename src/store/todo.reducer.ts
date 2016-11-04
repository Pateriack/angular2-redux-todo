import { List, Record } from 'immutable';

import { TodoActions } from '../actions';

export interface ITodo {
  id?: number,
  text: string;
  completed: boolean;
}

export type ITodoList = List<ITodo>;

const INITIAL_STATE = List<ITodo>();

export function todoReducer(state: ITodoList = INITIAL_STATE, action): ITodoList {

    switch (action.type) {
      case TodoActions.NEW_TODO:
        return List<ITodo>(state.push(action.payload).map((todo: ITodo, index) => {
          todo.id = index;
          return todo;
        }));

      case TodoActions.TOGGLE_TODO:
        return state.update(action.payload.id, (todo: ITodo) => {
          todo.completed = !todo.completed;
          return todo;
        });

      case TodoActions.DESTROY_TODO:
        return List<ITodo>(state.filter((todo: ITodo) => todo.id !== action.payload.id).map((todo: ITodo, index) => {
          todo.id = index;
          return todo;
        }));

      case TodoActions.TOGGLE_ALL:
        return List<ITodo>(state.map((todo: ITodo) => {
          todo.completed = action.payload.completed;
          return todo;
        }));

      case TodoActions.CLEAR_COMPLETED:
        return List<ITodo>(state.filter((todo: ITodo) => !todo.completed).map((todo: ITodo, index) => {
          todo.id = index;
          return todo;
        }));

      default:
        return state;
    }

}
