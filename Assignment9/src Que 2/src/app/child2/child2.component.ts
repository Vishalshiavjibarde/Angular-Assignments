import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor( private _obj:StringService) { }

  public count:number=0;

  ngOnInit(): void {

    this.count=this._obj.count('Marvellous');
  }

}
