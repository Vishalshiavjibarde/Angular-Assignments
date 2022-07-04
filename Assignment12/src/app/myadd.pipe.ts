import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(value: number, para:number):number
   {

     {
       var ans: number=0;
       ans=value+para;
       return ans;
     }
     

  }
}
