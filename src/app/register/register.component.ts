import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: any;
  text :string ="verma";

  constructor(private fb: FormBuilder){

  }

ngOnInit() {
  this.myForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    gender: [''],

  });
  console.log('hello', this.text)

}

submit(form:FormGroup){
  console.log('>>>' , form.value )
  console.log('valid' , form.valid ); //true or false
}

}
