import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(value: string): any {
    return value === '1' ? of('Active') : of('Inactive');
  }

}
