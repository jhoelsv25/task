import { Component, computed, inject } from '@angular/core';
import { FriendService } from '../../../services/friend.service';

@Component({
  selector: 'friend-card',
  templateUrl: './friend-card.component.html'
})
export class FriendCardComponent {
  private friendService = inject(FriendService)
 public  friendsList = computed(() => this.friendService.friends())
  constructor() {}
}
