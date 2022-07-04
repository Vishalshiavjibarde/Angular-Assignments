

class circle
{

    PI:number;
    radius:number;


    constructor(a:number,b:number)
    {
      this.PI=b;
      this.radius=a;
     }

    Area()
    {
        var ans:number=0;
        ans=3.14*this.radius*this.radius;
        return ans;
    }
}


var obj=new circle(2,2);


var ret:number=0;


ret=obj.Area();
console.log("Area of circle is :" +ret);