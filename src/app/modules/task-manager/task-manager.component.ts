import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './models';
import { TaskListService } from './services/task-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.less']
})
export class TaskManagerComponent implements OnInit {
  readonly lists$: Observable<List[]> = this.getTaskLists();

  constructor(private taskListService: TaskListService,
    private router: Router) {}

  ngOnInit(): void {
    this.taskListService.loadLists();
  }

  private getTaskLists(): Observable<List[]> {
    return this.taskListService.lists$;
  }

  onAdd(): void {
    this.router.navigate(['/add']);
  }

  onTaskActionClick(event: any): void {
    if(event.actionTye === 'edit') {
      this.router.navigate([`/add/${event.id}`]);
    } else {
      this.taskListService.deleteList(event.id);
    }
  } 
}
