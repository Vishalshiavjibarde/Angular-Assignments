import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }



  public checkPrime(Value:number)
  {

    if(Value%2!=0)
      
    {
      return " prime number"
    
	  }
	else
   {
        return "not prime number"
    }
   
  }
}

