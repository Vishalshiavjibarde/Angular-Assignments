import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk'
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value:number, param:string):any
  
  {
    let str="";
    if(param=="Prime")
    {
      if(value%2!=0)
      {
        return str=value + " : this is prime number"
      }
      else
      {
        return str=value + " : this is not prime number"
      }
    }
    if(param=="Even")
    {
      if(value%2==0)
      {
        return str=value + " : this is Even Number";
      }
      else
      {
        return str=value + " : this is not Even number"
      }
    }
    if(param=="Perfect")
    {
      let ans:number=0;
      for(let i=1;i<=(value/2);i++)
      {
        if(value%i==0)
        {
          ans=ans+i;
        }
      }
      if(value==ans)
      {
        return str=value + " : this is a perfect number";
      }
      else
      {
        return str=value + " : this is not perfect number";
      }
    }
  }
  

}
