import { Component, computed, inject } from '@angular/core';
import { FriendService } from '../../../services/friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {
   private friendService = inject(FriendService);
   public data = computed(() => this.friendService.friends());
  
  
}
