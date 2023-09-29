import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject, signal } from '@angular/core';
import { Task } from '../../../models/interfaces/task.interface';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent {
  private dialogRef = inject(DialogRef<TaskAddComponent>);
  public  header:string = 'Add Team'
  constructor(@Inject(DIALOG_DATA)public data:Task ){

  }

  close(){
    this.dialogRef.close()
  }
 
}
