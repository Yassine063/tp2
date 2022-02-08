import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'militaire'
})
export class MilitairePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // const heure = value;
    
    if (typeof value === 'number') {

      let heure = value / 100;
      let suffix = '';

      if(heure>12){

        heure -= 12;
        suffix = 'PM'
      }
      else{ 

        suffix = 'AM';
      }
      return heure + ':00' + suffix;
      //return `${heure}:00`;
    }
    else {

      return value;


    }
  }

}
