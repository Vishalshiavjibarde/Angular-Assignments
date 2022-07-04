import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  public str="";

public Submit (value:any)
{
this.str=value;
}


  constructor() { }

  ngOnInit(): void {
  }

}
