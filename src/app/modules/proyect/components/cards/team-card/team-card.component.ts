import { Component, computed, inject } from '@angular/core';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'team-card',
  templateUrl: './team-card.component.html'
})
export class TeamCardComponent {
  private teamService = inject(TeamService)
  public teamList = computed(()=>this.teamService.team());
  
  constructor() {}
}
