import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DragService } from '../../../services/drag.service';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/interfaces/task.interface';
import { Modal } from '../../../models/types/madal.type';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  private taskService = inject(TaskService);
  private dragService = inject(DragService);
  public nameModal : Modal = 'task-list'
  public taskPendient = computed(() => this.taskService.pendient());
  public taskProgress = computed(() => this.taskService.progress());
  public taskFinished = computed(() => this.taskService.finished());
  public qtyPendient = signal<number>(0);
  public qtyProgress = signal<number>(0);
  public qtyFinished = signal<number>(0);

  public people: any[] = ['Today', 'This week', 'This month','This year'];
  public peopleLoading = false;
 
  onDrop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    this.dragService.dragDrop(event);
    this.qty();
  }

  ngOnInit(): void {
    this.qty();
  }

  private qty(): void {
    this.qtyFinished.set(this.taskFinished().length);
    this.qtyProgress.set(this.taskProgress().length);
    this.qtyPendient.set(this.taskPendient().length);
  }
}
