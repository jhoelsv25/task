import { Component, computed, inject } from '@angular/core';
import {
  Profile,
  Tasklist,
} from 'src/app/modules/proyect/models/interfaces/task.interface';
import { TaskService } from 'src/app/modules/proyect/services/task.service';

@Component({
  selector: 'card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss'],
})
export class CardDashboardComponent {
  private taskService = inject(TaskService);
  public tasks = computed(() => this.taskService.tasks());
}
