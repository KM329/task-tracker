import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.less']
})
export class TaskHeaderComponent {
  @Output() onAddClick: EventEmitter<void> = new EventEmitter();

  onAdd() {
    this.onAddClick.emit();
  }
}
