import { TodoActions } from '../actions';

export interface ITodoState {
  text: string;
  complete: boolean;
}

const INIT_STATE: ITodoState[] = [];

export function todoReducer<ITodoState>(
  state = INIT_STATE,
  action) {

    switch (action.type) {
      case TodoActions.ADD_TODO:
        return [...state, action.payload];
      default:
        return state;
    }

}
