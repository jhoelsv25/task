import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ConfirmDeleteComponent } from '../../modals/confirm-delete/confirm-delete.component';

@Component({
  selector: 'btn-delete',
  templateUrl: './btn-delete.component.html',
})
export class BtnDeleteComponent {
  private dialog = inject(Dialog);

  deleteById() {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: 'hola como estan',
    });
    dialogRef.closed.subscribe((result) => {
      console.log('closed', {result});
    })
  }
}
