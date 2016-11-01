import { combineReducers, Reducer } from 'redux';
import { todoReducer, ITodoState } from './todo.reducer';
const persistState = require('redux-localstorage');

export class IAppState {
  todos: ITodoState[];
};

export const rootReducer = <Reducer<IAppState>>combineReducers<IAppState>({
  todos: todoReducer
});

export const enhancers = [
  persistState('todos', { key: 'angular2-redux-todo' })
];
