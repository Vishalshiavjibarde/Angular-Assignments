var circle = /** @class */ (function () {
    function circle(a, b) {
        this.PI = b;
        this.radius = a;
    }
    circle.prototype.Area = function () {
        var ans = 0;
        ans = 3.14 * this.radius * this.radius;
        return ans;
    };
    return circle;
}());
var obj = new circle(2, 2);
var ret = 0;
ret = obj.Area();
console.log("Area of circle is :" + ret);
