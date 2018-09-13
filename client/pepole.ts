class Pepole {
  private name: string;
  private age: number;
  private action: Array<any> = [];


  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  add(...arr) {
    return arr[0]+arr[1];
  }

  info() {
    let arr = [1,2,3];
    let arr2 = [4,5];
    let arr3 = [...arr, ...arr2];
    console.log('arr3 = ', arr3);
    let [a,b,c] = arr;

    console.log(a,b,c);
    // i=0;
    // i=10;

    enum f {
      red,
      green,
      blue
    }

    console.log(f[1]);

    console.log(this.add(arr));

    return 'Name: ' + this.name + ', Age: ' + this.age;
  }
}

let some = new Pepole('Thanh Tran');

// console.log(some.name);
console.log(some.info());
