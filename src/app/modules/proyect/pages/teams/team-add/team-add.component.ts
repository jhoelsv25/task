import { DIALOG_DATA, Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { Team } from '../../../models/interfaces/task.interface';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss']
})
export class TeamAddComponent {
  private dialogRef = inject(DialogRef<TeamAddComponent>);
  public  header:string = 'Add Team'
  constructor( @Inject(DIALOG_DATA) public data: Team) { }
  addTeam(){
    console.log('add team')
  }
  close(){
    this.dialogRef.close()
  }

}
