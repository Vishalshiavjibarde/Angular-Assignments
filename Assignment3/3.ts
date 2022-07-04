class circlex
{
    PI:number;
    radius:number;


    constructor(a:number,b:number)
    {
      this.PI=a;
      this.radius=b;
     }

 Circumference()
    {
        var ans:number=0;
        ans=2*3.14*this.radius;
        return ans;
    }
  Area()
    {
        var ans:number=0;
        ans=3.14*this.radius*this.radius;
        return ans;
    }
}


 var Obj1=new circlex(2,6);
 var Obj2=new circlex(2,2);

 var ret:number=0;

 ret=Obj1.Circumference();
 console.log("Circumference is :" +ret);

 ret=Obj2.Area();
 console.log("Area is  :" +ret);