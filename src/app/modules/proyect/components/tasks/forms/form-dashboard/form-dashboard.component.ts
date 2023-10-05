import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nivel } from 'src/app/modules/proyect/models/enums/nivel.enum';
import { State } from 'src/app/modules/proyect/models/enums/state.enum';
import { Profile } from 'src/app/modules/proyect/models/interfaces/task.interface';
import { FriendService } from 'src/app/modules/proyect/services/friend.service';
import { TaskService } from 'src/app/modules/proyect/services/task.service';

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.scss'],
})
export class FormDashboardComponent implements OnInit {
  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);
  private friendsService = inject(FriendService);
  private dialogRef = inject(DialogRef);
  public taskForm!: FormGroup;
  public nivels: Nivel[] = [Nivel.Basic, Nivel.Advanced, Nivel.Intermediate];
  public friends = computed(() => this.friendsService.friends());
  public selectedUsers: any;
  dateToday!: string;
  constructor() {
    const today = new Date().toLocaleDateString('es-PE');
    const partes = today.split('/');
    if (partes.length === 3) {
      const año = partes[2];
      const mes = partes[1];
      const dia = partes[0].padStart(2, '0');
      this.dateToday = `${año}-${mes}-${dia}`;
    }
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: ['', [Validators.required]],
      team: [[], [Validators.required]],
      date: [this.dateToday, [Validators.required]],
      state: [State.Pendient, [Validators.required]],
      hour: ['', [Validators.required]],
    });
    console.log(this.dateToday);
  }

  close() {
    this.dialogRef.close();
  }
  save() {
    if (this.taskForm.valid) {
      this.taskService.addTaskList(this.taskForm.value);
      this.dialogRef.close();
    }
  }
  addFriends(data: Profile) {
    this.selectedUsers = data;
  }
  getErrorMessage(field: string): string {
    const message = this.taskForm.get(field);
    return message?.hasError('required') ? 'Field is required' : '';
  }
}
