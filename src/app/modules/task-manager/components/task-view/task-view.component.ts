import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from '../../models';
import { STATUS } from '../../constants/task-manager.constant';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.less']
})
export class TaskViewComponent implements OnInit {
  @Input() listContent!: List;
  @Output() onActionClick = new EventEmitter<{}>()
  status?: string;
  constructor() {}

  onClick(actionType: string, id: number): void {
    this.onActionClick.emit({actionTye: actionType, id: id});
  }

  ngOnInit(): void {
    if (this.listContent) {
      this.status = STATUS.find((status) => this.listContent.status === status.value)?.name;
    }
  }
}
