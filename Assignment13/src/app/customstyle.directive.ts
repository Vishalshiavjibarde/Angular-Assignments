import { style } from '@angular/animations';
import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private obj:ElementRef) { }


   ElementRef=this.obj.nativeElement.style="background:yellow;text-align:center;font-weight:bold";

  

}
