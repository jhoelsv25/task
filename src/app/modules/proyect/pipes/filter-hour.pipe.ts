import { Pipe, PipeTransform } from '@angular/core';
import { Tasklist } from '../models/interfaces/task.interface';

@Pipe({
  name: 'HourSort'
})
export class FilterHourPipe implements PipeTransform {

  transform(hour: Tasklist[], ...args: unknown[]): Tasklist[] {
    return hour.sort((h1 , h2)=>{
      const date01 =new Date(`2023-01-01T${h1.hour}`);
      const date02 =new Date(`2023-01-01T${h2.hour}`);
      return  Number(date01) - Number(date02)
    ;
  })

}
}