import { Injectable, signal } from '@angular/core';
import { DragService } from './drag.service';
import { Task, Tasklist } from '../models/interfaces/task.interface';
import { State } from '../models/enums/state.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _taskList: Tasklist[] = [];
  public taskList = signal<Tasklist[]>(this._taskList);

  constructor() {
    this.loadLocalStorage()
  }

  addTaskList(taskList: Tasklist) {
    this._taskList.push(taskList);
    this.taskList.set(this._taskList);
    this.saveLocalStorage()
  }

  private saveLocalStorage() {
    localStorage.setItem('tasklist', JSON.stringify(this._taskList));
  }
  private loadLocalStorage() {
    const teamData = localStorage.getItem('tasklist');
    if (teamData) {
      this._taskList = JSON.parse(teamData);
      this.taskList.set(this._taskList);
    }
  }
}
