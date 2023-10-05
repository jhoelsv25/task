import { Component, Input } from '@angular/core';
import { Task } from 'src/app/modules/proyect/models/interfaces/task.interface';

@Component({
  selector: 'card-report-task',
  templateUrl: './card-report-task.component.html'
})
export class CardReportTaskComponent {

  @Input() taskList!:Task[]
}
