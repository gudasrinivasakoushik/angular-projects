import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortsort'
})
export class SortsortPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
