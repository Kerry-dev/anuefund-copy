import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'lodash-es';

@Pipe({
  name: 'numberFixed',
  standalone: true,
})
export class NumberFixedPipe implements PipeTransform {
  transform(value: string | number | null, fixNum: number = 0): string {
    if (value === null) return (0).toFixed(fixNum);
    const num: number = isString(value) ? parseFloat(value) : value;
    return num.toFixed(fixNum);
  }
}
