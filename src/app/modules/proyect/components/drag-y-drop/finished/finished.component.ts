import { Component, Input, inject } from '@angular/core';
import { Task } from '../../../models/interfaces/task.interface';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragService } from '../../../services/drag.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html'
})
export class FinishedComponent {
  private _dragDrop = inject(DragService)

@Input() taskLists: Task[]=[];

onDrop(event: CdkDragDrop<Task[] >) {
  this._dragDrop.dragDrop(event);
}
}
