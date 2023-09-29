import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, inject } from '@angular/core';
import { Task } from 'src/app/modules/proyect/models/interfaces/task.interface';
import { Modal } from 'src/app/modules/proyect/models/types/madal.type';
import { TaskAddComponent } from 'src/app/modules/proyect/pages/proyects/task-add/task-add.component';
import { ModalService } from 'src/app/modules/proyect/services/modal.service';

@Component({
  selector: 'btn-add',
  templateUrl: './btn-add.component.html'
})
export class BtnAddComponent {
  private dialog = inject(Dialog);
 //private modalService = inject(ModalService);
  task!: Task;
  @Input() nameModal!: Modal;


  addModal(){
    const dialogRef = this.dialog.open(TaskAddComponent, {
      data: this.task
    });
    dialogRef.closed.subscribe((result) => {
      console.log('closed', {result});
    })
  }

 

  deleteById() {
    
  }
}
