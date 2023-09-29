import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';
import { Modal } from '../models/types/madal.type';
import { TaskAddComponent } from '../pages/proyects/task-add/task-add.component';
import { TeamAddComponent } from '../pages/teams/team-add/team-add.component';
import { FriendAddComponent } from '../pages/friends/friend-add/friend-add.component';
import { Task, Team } from '../models/interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private dialog = inject(Dialog);

  constructor() {}

  public showModal(name: Modal, data: Task | Team) {
    switch (name) {
      case 'task-list':
        const taskComponent = TaskAddComponent;
        this.showComponents(taskComponent, data);
        break;
      case 'task-team':
        const taskTeamComponent = TeamAddComponent;
        this.showComponents(taskTeamComponent, data);
        break;
      case 'task-friend':
        const taskFriendComponent = FriendAddComponent;
        this.showComponents(taskFriendComponent, data);
        break;
    }
  }

  private showComponents(component: any, data: Task | Team) {
    const dialogRef = this.dialog.open(component, {
      data: data,
    });
    dialogRef.closed.subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
