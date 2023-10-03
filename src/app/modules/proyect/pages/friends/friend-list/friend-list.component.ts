import { Component, computed, inject } from '@angular/core';
import { FriendService } from '../../../services/friend.service';
import { Dialog } from '@angular/cdk/dialog';
import { FriendAddComponent } from '../friend-add/friend-add.component';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {
   private friendService = inject(FriendService);
   private dialog = inject(Dialog)
   public data = computed(() => this.friendService.friends());
  
   showodal(){
    const dialogRef = this.dialog.open(FriendAddComponent);

    dialogRef.closed.subscribe()
   }
}
