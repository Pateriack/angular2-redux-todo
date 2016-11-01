import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class TodoActions {
  static ADD_TODO: string = 'ADD_TODO';
  // static TOGGLE_TODO: string = 'TOGGLE_TODO';
  // static CLEAR_TODO: string = 'CLEAR_TODO';

  constructor (private ngRedux: NgRedux<IAppState>) {}
}
