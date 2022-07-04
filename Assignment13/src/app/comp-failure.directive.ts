import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private obj:ElementRef) { }
  @HostListener("mouseenter")onmouseenter()
  {

   this.obj.nativeElement.style.background="red";
   
 }
 @HostListener("mouseleave")onmouseleave()
 {
   
   this.obj.nativeElement.style="background:black;color:white";

  }


}
