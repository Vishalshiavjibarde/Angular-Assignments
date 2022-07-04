

class Arithmetic
{
    number1:number;
    number2:number;
    number3:number;


    constructor(a:number,b:number)
   {
     this.number1=a;
     this.number2=b;
    }
    Addition()
    {
       var result:number=0;
       result=this.number1+this.number2;
       return result;
    }

    Subtraction()
    {
        var result:number=0;
        result=this.number1-this.number2;
        return result;
    }

    Multiplication()
    {
        var result:number=0;
        result=this.number1*this.number2;
        return result;
    }

    Division()
    {
        var result:number=0;
        result=this.number1/this.number2;
        return result;
    }
    
}

var obj1= new  Arithmetic (10,11);
var obj2 = new  Arithmetic (20,21);
var obj3 = new  Arithmetic (30,5);
var obj4 = new  Arithmetic (10,5);


var Ret:number=0;


Ret=obj1.Addition();
console.log("Addition is : "+Ret);

Ret=obj2.Subtraction();
console.log("Substraction is : "+Ret);

Ret=obj3.Multiplication();
console.log("Multiplication is : "+Ret);

Ret=obj4.Division();
console.log("Division is : "+Ret);