import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.scss']
})
export class FriendAddComponent {
  private dialogRef = inject(DialogRef<FriendAddComponent>);
  constructor(@Inject(DIALOG_DATA) public data:any){}


  close(){
   this.dialogRef.close()
  }
}
