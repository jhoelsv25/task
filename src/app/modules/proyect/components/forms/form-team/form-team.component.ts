import { Component, OnInit, computed, inject } from '@angular/core';
import { DragService } from '../../../services/drag.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FriendService } from '../../../services/friend.service';
import { Profile, Team } from '../../../models/interfaces/task.interface';
import { DialogRef } from '@angular/cdk/dialog';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'form-team',
  templateUrl: './form-team.component.html'
})
export class FormTeamComponent implements OnInit{
  private dragService = inject(DragService);
  private friendsService = inject(FriendService);
  private teamService = inject(TeamService);
  
  private dialogRef = inject(DialogRef);
  public friends = computed(() => this.friendsService.friends());
  private fb = inject(FormBuilder);
  selectedUsers:any;


  team:FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    alias: ['', [Validators.required]],
    dateCreated: ['', [Validators.required]],
    friends: [[], [Validators.required]]
  });
  ngOnInit(): void {
    console.log(this.selectedUsers);
  }

  addFriends(data:Profile){
    this.selectedUsers= data
  }

  save(){
    if(this.team.valid){
      this.teamService.addTeam(this.team.value)
      this.dialogRef.close(this.team.value);
    }
  }

  
  close(){
    this.dialogRef.close()
  }
  
  getErrorMessage(field: string): string {
    const message = this.team.get(field);
    return message?.hasError('required') ? 'This fied is required' : '';
  }

}
