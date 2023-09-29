import { Injectable, signal } from '@angular/core';
import { DragService } from './drag.service';
import { Profile } from '../models/interfaces/task.interface';
import { __classPrivateFieldGet } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class FriendService extends DragService {
  private _friends: Profile[] = [];

  public friends = signal<Profile[]>(this._friends);
  constructor() {
    super();
  }
  public getFriends() {
    this.getData().subscribe({
      next: (value) => {
        if (value !== null) {
          const friends = value.data.team;
          friends.forEach((f) => {
            return f.friends.forEach((frien) => {
              this._friends.push(frien);
            });
          });
        }
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      },
    });
  }
}
