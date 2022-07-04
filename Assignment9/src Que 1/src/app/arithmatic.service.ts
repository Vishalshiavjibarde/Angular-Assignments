import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService 
{
    public No1: number=0;
    public No2: number=0;
  
  public Add(value1:number,value2:number)

  {
    var Ans:number=0;
    this.No1=value1;
    this.No2=value2
    Ans=this.No1+this.No2;
    return Ans;
    
  }

  public Sub(value1:number,value2:number)

  {
    this.No1=value1;
    this.No2=value2;
    var Ans:number=0;
    Ans=this.No1-this.No2;
    return Ans;
  }
  constructor() { }
}
