import { Component, computed, inject } from '@angular/core';
import { DragService } from '../../services/drag.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  private dragService = inject(DragService);
  public taskFinished = computed(() => this.dragService.finished());
  public qtyPendient = computed(()=>this.dragService.qtyPendient());
  public qtyProgress = computed(()=>this.dragService.qtyProgress());
  public qtyFinished = computed(()=>this.dragService.qtyFinished());
}
