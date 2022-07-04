import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public count(Value:string)
  {

    var count:number=0
    for(var i=0;i<=Value.length;i++)
    {
      var ch=Value.charAt(i);
      if(ch>='A'&& ch<='Z')
      {
        count++
      }
    }
    return count;

  }
}
