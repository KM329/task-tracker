import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InMemoryWebApiService } from './in-memory-web-api.service';
import { List } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  url = 'api/lists/';
  public lists$ = new ReplaySubject<List[]>(1);
  
  // private search = new BehaviorSubject<string>('');
  // $search = this.search.asObservable();

  constructor(
    private inMemoryService: InMemoryWebApiService,
    private http: HttpClient,
  ) {}

  loadLists(): Subscription {
    return this.http.get<List[]>(this.url).subscribe((lists: List[]) => {
        this.lists$.next(lists);
    });
  }

  getLists(): ReplaySubject<List[]> {
    return this.lists$;
  }

  addList(list: List): Subscription {
    return this.http.post<List[]>(this.url, list).subscribe((lists: List[]) => {
        this.lists$.next(lists);
    });
  }

  putList(list: List, id: number) {
    list = { ...list, id: id}
    return this.http.put<List[]>(this.url, list).subscribe((lists: List[]) => {
      this.loadLists();
  });
  }

  deleteList(id: number): Subscription {
    const url = `${this.url}${id}`;
    return this.http.delete<List[]>(url).subscribe(() => {
      this.loadLists();
    });
  }

}
