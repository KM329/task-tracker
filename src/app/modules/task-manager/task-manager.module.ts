import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { MatCardModule } from '@angular/material/card';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskFooterComponent } from './components/task-footer/task-footer.component';

@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskHeaderComponent,
    TaskViewComponent,
    TaskAddComponent,
    TaskFooterComponent,
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    DragDropModule,
  ]
})
export class TaskManagerModule { }
