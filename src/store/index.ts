import { combineReducers, Reducer } from 'redux';
import { List } from 'immutable';
import * as createLogger from 'redux-logger';
const persistState = require('redux-localstorage');

import { todoReducer, ITodoList, ITodo, reimmutifyTodoList } from './todo.reducer';

export class IAppState {
  todos?: ITodoList;
};

export * from './todo.reducer';

export const rootReducer = <Reducer<IAppState>>combineReducers<IAppState>({
  todos: todoReducer
});

export const middleware = [
  createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify
  })
];

export function deimmutify(state: IAppState): Object {
  return {
    todos: state.todos.toJS()
  }
}

export function reimmutify(plain) {
  return plain ? {
    todos: reimmutifyTodoList(plain.todos)
  } : {};
}

export const enhancers = [
  persistState('', {
    key: 'angular2-redux-todo',
    serialize: s => JSON.stringify(deimmutify(s)),
    deserialize: s => reimmutify(JSON.parse(s)),
  })
];
