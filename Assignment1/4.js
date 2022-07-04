function main() {
    var num = 11;
    var bret;
    bret = CheckPrime(num);
    if (bret == true) {
        console.log(" prime number");
    }
    else {
        console.log("not prime number");
    }
}
function CheckPrime(Value) {
    if (Value % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
