function main() {
    var no = 21;
    Display(no);
}
function Display(Value) {
    var num1 = 1;
    var num2 = 1;
    var num3 = 0;
    var i = 0;
    for (i = 0; i <= Value / 3; i++) {
        console.log(num1);
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
}
main();
