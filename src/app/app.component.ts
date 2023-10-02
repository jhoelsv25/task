import { Component, OnInit, inject } from '@angular/core';
import { TeamService } from './modules/proyect/services/team.service';
import { FriendService } from './modules/proyect/services/friend.service';
import { DragService } from './modules/proyect/services/drag.service';
import { TaskService } from './modules/proyect/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-managament';
  private teamService= inject(TeamService)
  private friendService= inject(FriendService)
  private dragService = inject(DragService)
  private taskService = inject(TaskService)
  constructor() {

  }
  ngOnInit(): void {
   /*  this.teamService.getTeam();
    this.friendService.getFriends();
    this.dragService.getData();
    this.taskService.getTask(); */
  }
}
