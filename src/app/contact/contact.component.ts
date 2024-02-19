import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myForm: any;
  text :string ="verma";

  constructor(private fb: FormBuilder){

  }

ngOnInit() {
  this.myForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required], 
    message: ['', Validators.required] 
  });
}

submit(form:FormGroup){
  console.log('>>>' , form.value )
  console.log('valid' , form.valid ); //true or false
}
}


