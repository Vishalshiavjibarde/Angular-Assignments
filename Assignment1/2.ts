
function main():any
 {
    var radius:number=5;
    var pi:number=3.14; 
    var ret:number=0;
    ret=Area(radius,pi);
    console.log("Area of circle:"+ret);
 }
 function Area(Value1:number,Value2:number)
 {
   var result:number=0;
   result=Value2*Value1*Value1;
   return result;
 }
main();


