import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplepipe'
})
export class SimplepipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return null;
    //debugger;
    if (args) {
      return args + value;
    }
    return 'Hi ' + value;
  }

}
