import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  IUser, Task } from '../models/interfaces/task.interface';
import { Nivel } from '../models/enums/nivel.enum';
import { State } from '../models/enums/state.enum';


@Injectable({
  providedIn: 'root',
})
export class DragService {
  protected _pendient: Task[] = [];
  protected _progress: Task[] = [];
  protected _finished: Task[] = [];
  public pendient = signal<Task[]>(this._pendient);
  public progress = signal<Task[]>(this._progress);
  public finished = signal<Task[]>(this._finished);
  protected http = inject(HttpClient);
  protected baseUrl = environment.baseUrl;
  
  constructor() {}
    


  public dragDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      //this.saveLocalStorage();
    } else if (
      (event.previousContainer.id === 'cdk-drop-list-0' &&
        event.container.id === 'cdk-drop-list-1') ||
      (event.previousContainer.id === 'cdk-drop-list-1' &&
        event.container.id === 'cdk-drop-list-2')
    ) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      //this.saveLocalStorage();
    }
  }

  getData(): Observable<IUser| null > {
    const email = 'admin@example.com';
    const password = 'admin';
    return this.http.get<IUser[]>(this.baseUrl).pipe(
      map((res: IUser[]) => {
        const value = res.find(
          (user) => user.email === email && user.password === password
        );
        return value ? value : {}
      }),
      catchError((err) => {
        return of('Hubo un error inesperado', err);
      })
    );
  }


}
