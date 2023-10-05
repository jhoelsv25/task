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
  private today:string;

  constructor() {
    
    const date = new Date().toLocaleDateString('es-PE').split('/')
    const day = date[0].padStart(2,'0');	
    const month = date[1];
    const year = date[2]
    this.today = `${year}-${month}-${day}`;

    console.log(this.today);
    this.loadLocalStorage();
  }

  addTaskList(taskList: Tasklist) {
    this._taskList.push(taskList);
    const newData = this._taskList.filter((value)=>value.date === this.today );
    this.taskList.set(newData);
      this.saveLocalStorage()
  }

  private saveLocalStorage() {
    localStorage.setItem('tasklist', JSON.stringify(this._taskList));
  }
  private loadLocalStorage() {
    const data = localStorage.getItem('tasklist');
    if (data) {
      this._taskList = JSON.parse(data);
      const newData = this._taskList.filter((value)=>value.date === this.today );
      this.taskList.set(newData);
    }
  }
}
