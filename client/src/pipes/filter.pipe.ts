import { Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})



export class FilterPipe {
  getProperty (value: { [key: string]: any}, key: string): any {
    // return true;
    // if (isNil(value) || !isObject(value)) {
    //   return undefined;
    // }
    //
    const keys: string[] = key.split('.');
    let result: any = value[keys.shift()!];
    //
    // for (const key of keys) {
    //   if (isNil(result) || !isObject(result)) {
    //     return undefined;
    //   }
    //
      result = result[key];
    // }
    //
    return result;
  }

  transform(input, fn) {
    // args = args || '';
    // return args === 'ago' ? moment(value).fromNow() : moment(value).format(args);

    const [key, value] = fn;
    // return input.filter((item: any) => this.getProperty(item, key) === value);
    // let vm = this;
    if(value === null || typeof (value) === 'undefined') {
      return input;
    }
    return input.filter((item: any) => {
      // console.log(key);
      // console.log(value);
      // console.log(item[key]);
      return (item[key] === value);
    });
  }
}
