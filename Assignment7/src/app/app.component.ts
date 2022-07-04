import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vishal';
  
  public str="";
  public str1="";
  public data="";
  public data1="";

    public fun()
  {
    this.str1="Marvellous Infosystem....";
    return this.str1;
  }



  public myfunc()
  {
    this.str="Educating  for better tomorrow";
  }


  public case()
  {
    this.data="Marvellous Infosystem";
  }
  public case1()
  {
    this.data1="Marvellous Infosystem";
  }
}
