var circlex = /** @class */ (function () {
    function circlex(a, b) {
        this.PI = a;
        this.radius = b;
    }
    circlex.prototype.Circumference = function () {
        var ans = 0;
        ans = 2 * 3.14 * this.radius;
        return ans;
    };
    circlex.prototype.Area = function () {
        var ans = 0;
        ans = 3.14 * this.radius * this.radius;
        return ans;
    };
    return circlex;
}());
var Obj1 = new circlex(2, 6);
var Obj2 = new circlex(2, 2);
var ret = 0;
ret = Obj1.Circumference();
console.log("Circumference is :" + ret);
ret = Obj2.Area();
console.log("Area is  :" + ret);
