import { List, Record } from 'immutable';

import { TodoActions } from '../actions';

export interface ITodo {
  id?: number,
  text: string;
  completed: boolean;
}

export type ITodoList = List<ITodo>;

export const TodoRecord = Record({
  id: 0,
  text: '',
  completed: false
});

const INITIAL_STATE = List<ITodo>();

export function todoReducer(state: ITodoList = INITIAL_STATE, action){

  switch (action.type) {
    case TodoActions.NEW_TODO:
      return state.push(TodoRecord(action.payload));

    case TodoActions.TOGGLE_TODO:
      let index = findIndex(state, action.payload.id);
      return state.setIn([index, 'completed'], !state.getIn([index, 'completed']));

    case TodoActions.DESTROY_TODO:
      return state.filter((todo: ITodo) => todo.id !== action.payload.id);

    case TodoActions.TOGGLE_ALL:
      return List<ITodo>(state.map(todo => todo.set('completed', action.payload.completed));

    case TodoActions.CLEAR_COMPLETED:
      return state.filter(todo => !todo.get('completed'));

    default:
      return state;
  }

}

export function reimmutifyTodoList(plain): ITodoList {
  return List<ITodo>(plain ? plain.map(reimmutifyTodo) : []);
}

function reimmutifyTodo(todo) {
  return TodoRecord(
    Object.assign({}, todo)
  );
}

function findIndex(collection, id) {
  return collection.findIndex(n => n.get('id') === id);
}

