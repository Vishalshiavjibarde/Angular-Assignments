import { Component, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 
@Output() public Myevent=new EventEmitter()
public Data="Hello "
public str="";

public SendMessage(Data:any)
{
  this.str=Data;
  this.Myevent.emit(this.str);
  
}
public Name:any;



}

