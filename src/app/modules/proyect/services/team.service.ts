import { Injectable, signal } from '@angular/core';
import { DragService } from './drag.service';
import { Observable, map } from 'rxjs';
import { IUser, Team } from '../models/interfaces/task.interface';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TeamService extends DragService {
  private _team:Team[]=[];
  public team = signal<Team[]>(this._team);

  constructor() {
    super();
  }
  
  public getTeam() {
    this.getData().subscribe({
      next: (response) => {
        if(response !== null){
          const team = response.data.team;
          team.forEach(t=>{
            this._team.push(t)
          })
        }
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      },
    });
  }
  
}
