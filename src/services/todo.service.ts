import { Injectable } from '@angular/core';
const localStorage = require('store');

@Injectable()
export class TodoService {
  getNextId(): Promise<number> {
    return new Promise((resolve, reject) => {
      let todoId = localStorage.get('todoId') as number;
      todoId = typeof todoId === 'undefined' ? 1 : ++todoId;
      localStorage.set('todoId', todoId)
      resolve(todoId);
    })
  }
}
