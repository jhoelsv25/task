import { Component, Input, OnInit, inject } from '@angular/core';
import { Task } from '../../../models/interfaces/task.interface';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragService } from '../../../services/drag.service';

@Component({
  selector: 'task-pendient',
  templateUrl: './pendient.component.html'
})
export class PendientComponent implements OnInit {
  private _dragDrop = inject(DragService)
  @Input() taskLists!: Task[];

  ngOnInit(): void {
    //console.log(this.taskLists);
  }
  onDrop(event: CdkDragDrop<Task[] >) {
    this._dragDrop.dragDrop(event);
  }
}
