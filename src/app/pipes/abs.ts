import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'absRound'
})
export class AbsPipe implements PipeTransform {

  transform(value: number): any {
    return parseFloat ((Math.abs(value)).toFixed(2));
  }

}