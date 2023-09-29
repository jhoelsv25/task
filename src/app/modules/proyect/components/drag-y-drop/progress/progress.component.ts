import { Component, Input, inject } from '@angular/core';
import { Task } from '../../../models/interfaces/task.interface';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragService } from '../../../services/drag.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {
  private _dragDrop = inject(DragService)

 @Input() taskLists: Task[]=[];

 onDrop(event: CdkDragDrop<Task[] >) {
  this._dragDrop.dragDrop(event);
}
}
