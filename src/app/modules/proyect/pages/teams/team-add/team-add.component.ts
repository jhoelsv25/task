import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss']
})
export class TeamAddComponent {
  private dialogRef = inject(DialogRef);
  public  header:string = 'Add Team'

  close(){
    this.dialogRef.close()
  }

}
