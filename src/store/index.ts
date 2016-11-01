import { combineReducers, Reducer } from 'redux';
// const persistState = require('redux-localstorage');

export class IAppState {

};

export const rootReducer = <Reducer<IAppState>>combineReducers<IAppState>({

});

export const enhancers = [
  // persistState('counter', { key: 'ng2-redux/examples/counter' })
];
