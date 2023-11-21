import { Injectable, signal } from '@angular/core';
import { DragService } from './drag.service';
import { Task, Tasklist } from '../models/interfaces/task.interface';
import { State } from '../models/enums/state.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks = signal<Tasklist[]>([]);
  private today: string;

  constructor() {
    const date = new Date().toLocaleDateString('es-PE').split('/');
    const day = date[0].padStart(2, '0');
    const month = date[1];
    const year = date[2];
    this.today = `${year}-${month}-${day}`;
    this.loadLocalStorage();
  }

  addTaskList(taskList: Tasklist) {
    this.tasks.update((value) => {
      return value.filter((res) => res.date === this.today).concat(taskList);
    });

    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('tasklist', JSON.stringify(this.tasks()));
  }
  private loadLocalStorage() {
    const data = localStorage.getItem('tasklist');
    if (data) {
      const tasks = JSON.parse(data);
      this.tasks.update((prev) => {
        return tasks
          .filter((res: { date: string }) => res.date === this.today)
          .concat(prev);
      });
    }
  }
}
