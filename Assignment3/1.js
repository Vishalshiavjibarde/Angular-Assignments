var Arithmetic = /** @class */ (function () {
    function Arithmetic(a, b) {
        this.number1 = a;
        this.number2 = b;
    }
    Arithmetic.prototype.Addition = function () {
        var result = 0;
        result = this.number1 + this.number2;
        return result;
    };
    Arithmetic.prototype.Subtraction = function () {
        var result = 0;
        result = this.number1 - this.number2;
        return result;
    };
    Arithmetic.prototype.Multiplication = function () {
        var result = 0;
        result = this.number1 * this.number2;
        return result;
    };
    Arithmetic.prototype.Division = function () {
        var result = 0;
        result = this.number1 / this.number2;
        return result;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(10, 11);
var obj2 = new Arithmetic(20, 21);
var obj3 = new Arithmetic(30, 5);
var obj4 = new Arithmetic(10, 5);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition is : " + Ret);
Ret = obj2.Subtraction();
console.log("Substraction is : " + Ret);
Ret = obj3.Multiplication();
console.log("Multiplication is : " + Ret);
Ret = obj4.Division();
console.log("Division is : " + Ret);
