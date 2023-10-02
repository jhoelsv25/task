import { Component, OnInit, computed, inject } from '@angular/core';
import { DragService } from '../../../services/drag.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { State } from '../../../models/enums/state.enum';
import { Nivel } from '../../../models/enums/nivel.enum';
import { TeamService } from '../../../services/team.service';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/interfaces/task.interface';

@Component({
  selector: 'form-task',
  templateUrl: './form-task.component.html',
})
export class FormTaskComponent implements OnInit{
  private dragService = inject(DragService);
  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);
  private dialogRef = inject(DialogRef);
  public nivels = [Nivel.Basic, Nivel.Intermediate, Nivel.Advanced];
  private teamService = inject(TeamService)
  public teams = computed(() => this.teamService.team());
  public user:string =''
  public task!:FormGroup;


  ngOnInit(): void {
    this.userName()
    this.task =this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: ['', [Validators.required]],
      team: ['ytty', [Validators.required]],
      date: ['', [Validators.required]],
      state: [State.Pendient, [Validators.required]],
    });
  }

  close() {
   this.dialogRef.close();
  }

  save() {
    if(this.task.valid ){
      this.dragService.addTask(this.task.value)
      this.dialogRef.close(this.task.value);
    }
      
    
    
  }

  getErrorMessage(field: string): string {
    const message = this.task.get(field);
    return message?.hasError('required') ? 'This fied is required' : '';
  }

  userName(){
    this.dragService.getData().subscribe({
      next: (data) => {
        this.user = data?.profile.name + ' ' + data?.profile.lastName
      }
    })
  }
}
