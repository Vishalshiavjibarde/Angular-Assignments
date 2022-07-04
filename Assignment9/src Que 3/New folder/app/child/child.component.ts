import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  public num:any;
  public str:any;
  constructor(private _obj:NumberService,private _obj1:StringService) { }

  ngOnInit(): void {
    this.num=this._obj.checkPrime(9);
    this.str=this._obj1.count('Marvellous');
  }

}
