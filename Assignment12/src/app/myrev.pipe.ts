import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any 
  { 
      
         let str="Marvellous"
        let reversed = "Marvellous :";
        for (var i = str. length - 1; i >= 0; i--)
        {
        reversed += str[i];
        }
        return reversed;
        



  
  }
  

}
