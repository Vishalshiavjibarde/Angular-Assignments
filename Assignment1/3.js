function main() {
    var no1 = 20;
    display(no1);
}
function display(Value1) {
    var i = 0;
    for (i = 1; i <= Value1 / 2; i++) {
        if (Value1 % i == 0) {
            console.log(i);
        }
    }
}
main();
