import { Injectable, signal } from '@angular/core';
import { DragService } from './drag.service';
import { Observable, map } from 'rxjs';
import { IUser, Team } from '../models/interfaces/task.interface';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private _team: Team[] = [];
  public team = signal<Team[]>(this._team);

  constructor() {
    

    this.loadLocalSt();
  }

  /* public getTeam() {
    this.getData().subscribe({
      next: (response) => {
        if (response !== null) {
          const team = response.data.team;
          team.forEach((t) => {
            this._team.push(t);
          });
        }
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      },
    });
  } */

  addTeam(team: Team) {
    this._team.push(team);
    this.saveLocalSto();
  }
  private saveLocalSto() {
    localStorage.setItem('team', JSON.stringify(this._team));
  }
  private loadLocalSt() {
    const teamData = localStorage.getItem('team');
    if (teamData) {
      this._team = JSON.parse(teamData);
      this.team.set(this._team);
    }
  }
  
}
