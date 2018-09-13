var Pepole = /** @class */ (function () {
    function Pepole(name, age) {
        this.action = [];
        this.name = name;
        this.age = age;
    }
    Pepole.prototype.add = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return arr[0] + arr[1];
    };
    Pepole.prototype.info = function () {
        var arr = [1, 2, 3];
        var arr2 = [4, 5];
        var arr3 = arr.concat(arr2);
        console.log('arr3 = ', arr3);
        var a = arr[0], b = arr[1], c = arr[2];
        console.log(a, b, c);
        // i=0;
        // i=10;
        var f;
        (function (f) {
            f[f["red"] = 0] = "red";
            f[f["green"] = 1] = "green";
            f[f["blue"] = 2] = "blue";
        })(f || (f = {}));
        console.log(f[1]);
        console.log(this.add(arr));
        return 'Name: ' + this.name + ', Age: ' + this.age;
    };
    return Pepole;
}());
var some = new Pepole('Thanh Tran');
// console.log(some.name);
console.log(some.info());
