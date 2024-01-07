import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryWebApiService {

  constructor() { }

  createDb() {
    return of({
      lists: [
      {
        id: 1,
        title: 'Buy Groceries',
        description: 'Buy Vegetables for the week',
        dueDate: '2024-01-17',
        status: 'todo'
      },
      {
        id: 2,
        title: 'Finish Javascript Course',
        description: 'Learn HTML, CSS',
        dueDate: '2024-03-17',
        status: 'inprogress'
      },
      {
        id: 3,
        title: 'Read Book',
        description: 'Buy Book on Angular Tutorials and Best Practices',
        dueDate: '2024-01-18',
        status: 'done'
      }
    ]
    })
  }
}
