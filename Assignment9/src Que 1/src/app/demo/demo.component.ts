import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  template: `
  <h2>
    The Additon of two number is :{{Addition}}
  </h2>
  <h2> 
    The Subtraction of two number is :{{Subtraction}}
  </h2>
  `
  
})
export class DemoComponent implements OnInit 
{

  constructor(private _obj:ArithmaticService) { }


  public Addition:number=0;
  public Subtraction:number=0;


  ngOnInit(): void 
  {


    this.Addition=this._obj.Add(10,20);
    this.Subtraction=this._obj.Sub(10,2);


  }

}
