import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

import { TodoActions } from '../actions';
import { ITodo } from '../store';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @select() todos$: Observable<ITodo>

  constructor(public todoActions: TodoActions) {}
}
