import { Component, OnInit, computed, inject } from '@angular/core';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  private teamService = inject(TeamService)
  public data = computed(() => this.teamService.getTeam());
 
  ngOnInit(): void {
  //  this.data()
  }
}
