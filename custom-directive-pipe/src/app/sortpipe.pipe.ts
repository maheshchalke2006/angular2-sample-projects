import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let dup_array;
    dup_array = value.slice();
     return dup_array.sort(function(a, b){ return b - a; });
  }

}
