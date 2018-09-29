import { Pipe } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe {
  transform(input, fn) {
    const [key, value] = fn;
    if(value === null || typeof (value) === 'undefined') {
      return input;
    }
    return input.filter((item: any) => {
      return (item[key] === value);
    });
  }
}
