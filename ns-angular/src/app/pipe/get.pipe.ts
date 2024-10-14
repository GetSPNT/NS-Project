import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'get',
  standalone: true
})
export class GetPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
