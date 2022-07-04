function main() {
    var radius = 5;
    var pi = 3.14;
    var ret = 0;
    ret = Area(radius, pi);
    console.log("Area of circle:" + ret);
}
function Area(Value1, Value2) {
    var result = 0;
    result = Value2 * Value1 * Value1;
    return result;
}
main();
