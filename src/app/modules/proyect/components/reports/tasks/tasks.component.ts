import { Component, computed, inject } from '@angular/core';
import { DragService } from '../../../services/drag.service';

@Component({
  selector: 'report-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent {
 private dragService = inject(DragService);
 public taskPendient = computed(() => this.dragService.pendient());
}

