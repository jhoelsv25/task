import { Injectable, signal } from '@angular/core';
import { DragService } from './drag.service';
import { Task } from '../models/interfaces/task.interface';
import { State } from '../models/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends DragService {
  

  constructor() {
    super();
  }
  getTask(){
    this.getData().subscribe(
      {
        next: (res) => {
          if( res !== null){
            const task = res.data.task;
            task.forEach(taskArray=>{
              if(taskArray.state === State.Pendient){
                this._pendient.push(taskArray);
              }else if(taskArray.state === State.Progress){
                this._progress.push(taskArray);
              }else if(taskArray.state === State.Finished){
                this._finished.push(taskArray);
              }
            })
            this.pendient.set(this._pendient);
            this.progress.set(this._progress);
            this.finished.set(this._finished);

          }
        }
      }
    )
  }

}
