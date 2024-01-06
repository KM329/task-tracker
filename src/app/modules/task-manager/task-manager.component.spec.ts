import { Router } from '@angular/router';
import { TaskListService } from './services/task-list.service';
import { TaskManagerComponent } from './task-manager.component';

xdescribe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let mockTaskListService: TaskListService;
  let mockRouter: Router;

  beforeEach(() => {
   

    component = new TaskManagerComponent(mockTaskListService, mockRouter);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
