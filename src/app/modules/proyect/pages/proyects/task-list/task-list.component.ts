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
  private dragService = inject(DragService);
  public nameModal : Modal = 'task-list'
  public taskPendient = computed(() => this.dragService.pendient());
  public taskProgress = computed(() => this.dragService.progress());
  public taskFinished = computed(() => this.dragService.finished());
  public qtyPendient = computed(()=>this.dragService.qtyPendient());
  public qtyProgress = computed(()=>this.dragService.qtyProgress());
  public qtyFinished = computed(()=>this.dragService.qtyFinished());

  public people: string[] = ['Today', 'This week', 'This month','This year'];
  public peopleLoading = false;
  constructor(){

  }
 
  onDrop(event: CdkDragDrop<Task[]>) {
    this.dragService.dragDrop(event);
  }

  ngOnInit(): void {

  }


}
