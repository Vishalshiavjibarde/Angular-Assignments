function main() {
    var Array = [23, 89, 6, 29, 56, 45, 77, 32];
    var no = 8;
    var ret = 0;
    ret = max(Arr, no);
    console.log("Second maximum number is" + ret);
}
function max(ptr, number, _a, no) {
    var max1 = ptr[0];
    var1: number = 0;
    var max2 = 0;
    for (i = 0; i < no; i++) {
        if (ptr[i] > max1) {
            max2 = max1;
            max1 = ptr[i];
        }
        else if (ptr[i] > max2 && ptr[i] < max1) {
            max2 = ptr[i];
        }
    }
    return max2;
}
main();
