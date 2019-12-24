import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if(!value) return '';
    const hours: number = Math.floor(value / 60);
    if(hours === 0) {
      return (value - hours * 60) + 'min';
    } else {
      return hours + 'h ' + (value - hours * 60) + 'min';
    }
  }

}
