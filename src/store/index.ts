import { combineReducers, Reducer } from 'redux';
import { List } from 'immutable';
import * as createLogger from 'redux-logger';
const persistState = require('redux-localstorage');

import { todoReducer, ITodoList, ITodo } from './todo.reducer';

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

export const enhancers = [
  persistState('todos', {
    key: 'angular2-redux-todo',
    serialize: (store) => {
      return store && store.todos ?
        JSON.stringify(store.todos.toJS()) : store;
    },
    deserialize: (state) => {
      return <IAppState>({
        todos: List<ITodo>(state ? JSON.parse(state) : [])
      });
    }
  })
];
