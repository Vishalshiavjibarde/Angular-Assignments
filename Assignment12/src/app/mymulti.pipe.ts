import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymulti'
})
export class MymultiPipe implements PipeTransform {

  transform(value: number, param: number): number
   {
    var ans:number=0;
    ans=value*param;
    return ans;
  }

}
