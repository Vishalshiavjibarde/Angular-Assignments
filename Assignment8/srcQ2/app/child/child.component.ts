import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  
{

  @Input() public Data:any;
  public str="Hello Parnt";
  @Output() public Myevent=new EventEmitter();
  public fun()
  {
    this.Myevent.emit(this.str)
  }

}
