import { Component, OnInit, computed, inject } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { Dialog } from '@angular/cdk/dialog';
import { TeamAddComponent } from '../team-add/team-add.component';
import { Team } from '../../../models/interfaces/task.interface';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  private teamService = inject(TeamService);
  private dialog = inject(Dialog);
  public team!:Team
 
  ngOnInit(): void {
  //  this.data()
  }
  ShowModal(){
    const dialogRef = this.dialog.open(TeamAddComponent,{
      data:this.team
    })
    dialogRef.closed.subscribe(res =>{
    })
  }
}
