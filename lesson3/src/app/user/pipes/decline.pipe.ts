import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decline'
})
export class DeclinePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
