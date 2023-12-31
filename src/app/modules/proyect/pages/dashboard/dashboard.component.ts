import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { Task } from '../../models/interfaces/task.interface';
import { TaskAddComponent } from '../proyects/task-add/task-add.component';
import { FormDashboardComponent } from '../../components/tasks/forms/form-dashboard/form-dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private dialog = inject(Dialog);
  public task!:Task
 public toDay!:Date;
  ngOnInit(): void {
  //  this.data()
  }
  constructor(){
    this.toDay = new Date();
  
  }
  ShowModal(){
    const dialogRef = this.dialog.open(FormDashboardComponent,{
      data:this.task
    })
    dialogRef.closed.subscribe(res =>{

    })
  }
}
