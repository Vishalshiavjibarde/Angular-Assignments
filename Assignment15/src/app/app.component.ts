import { Component } from '@angular/core';
import { FormBuilder ,Validators,FormControl,FormGroup,} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(public obj:FormBuilder){

  }


  MyForm =this.obj.group(
    {
      firstname:['', [Validators.required, Validators.pattern('[a-z A-Z ]*')] ],
      lastname:['', [Validators.required, Validators.pattern('[a-z A-Z ]*')] ],
      contact:['', [Validators.required, Validators.pattern("[0-9]{10}$") ] ],
     email:['', [Validators.required, Validators.pattern("[a-z 0-9]\.+@[a-z]+\.[a-z]{2,4}")]],
   
      City:['',[Validators.required, Validators.minLength(3)]],
      zip:['',[Validators.required, Validators.pattern("[0-9]{6}$")]],
      comment:['',[Validators.required, Validators.pattern("[0-9 'a-z A-Z']{1,30}$")]],
      

    }

  )
}
