import { Injectable, signal } from '@angular/core';
import { DragService } from './drag.service';
import { Profile } from '../models/interfaces/task.interface';
import { __classPrivateFieldGet } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  private _friends: Profile[] = [
    {
      name: 'Juan',
      lastName: 'Pérez',
      age: 30,
      description: 'Soy un desarrollador web apasionado por la programación.',
      dateCreated: '2020-01-15',
      titleWork: 'Desarrollador Web',
      avatar:
        'https://www.pulpowms.com/hs-fs/hubfs/imagen-person.webp?width=353&height=432&name=imagen-person.webp',
      cargo: 'Programador',
    },
    {
      name: 'María',
      lastName: 'González',
      age: 28,
      description:
        'Diseñadora gráfica con experiencia en diseño de interfaces de usuario.',
      dateCreated: '2019-11-20',
      titleWork: 'Diseñadora Gráfica',
      avatar:
        'https://www.pulpowms.com/hs-fs/hubfs/imagen-girl.webp?width=300&height=365&name=imagen-girl.webp',
      cargo: 'Diseñador',
    },
    {
      name: 'Carlos',
      lastName: 'Martínez',
      age: 35,
      description:
        'Ingeniero de software con experiencia en desarrollo de aplicaciones móviles.',
      dateCreated: '2018-09-10',
      titleWork: 'Ingeniero de Software',
      avatar:
        'https://www.pulpowms.com/hs-fs/hubfs/imagen-person.webp?width=353&height=432&name=imagen-person.webp',
      cargo: 'Ingeniero',
    },
    {
      name: 'Laura',
      lastName: 'Rodríguez',
      age: 29,
      description:
        'Consultora de marketing con habilidades en análisis de datos.',
      dateCreated: '2021-03-05',
      titleWork: 'Consultora de Marketing',
      avatar:
        'https://www.pulpowms.com/hs-fs/hubfs/imagen-girl.webp?width=300&height=365&name=imagen-girl.webp',
      cargo: 'Consultor',
    },
    {
      name: 'Pedro',
      lastName: 'Sánchez',
      age: 32,
      description:
        'Analista financiero con experiencia en modelado financiero y proyecciones.',
      dateCreated: '2017-07-12',
      titleWork: 'Analista Financiero',
      avatar:
        'https://www.pulpowms.com/hs-fs/hubfs/imagen-person.webp?width=353&height=432&name=imagen-person.webp',
      cargo: 'Analista',
    },
  ];

  public friends = signal<Profile[]>(this._friends);
  constructor() {}
  /*  public getFriends() {
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
  } */
}
