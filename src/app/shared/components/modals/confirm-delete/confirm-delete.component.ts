import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})
export class ConfirmDeleteComponent {
  public title: string= 'hol';
  private dialogRef = inject(DialogRef<ConfirmDeleteComponent>);

  constructor(@Inject(DIALOG_DATA)public data:any ) {
    this.title = data;
   }


  cancelModal(){
    this.dialogRef.close()
  }
  confirmDelete(){

}

}
