import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../core/sevices/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: any;
  text :string ="verma";


  constructor(private fb: FormBuilder, private apiService: ApiService, private toastr: ToastrService) { }

  sendDataToApi() {
    const data = this.myForm.value;
   
    console.log(data);
    
    this.apiService.registerAPI(data).subscribe(
      (response: any) => {
       console.log('Response:' , response);
       this.toastr.success('Registration successful', 'Success');
      },
      (error: any) => {
        console.error('Error:', error);
        this.toastr.error('Registration failed', 'Error');
      }
    );
  }

ngOnInit() {
  this.myForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],

  });
  console.log('hello', this.text)

}

submit(form:FormGroup){
  console.log('>>>' , form.value )
  console.log('valid' , form.valid ); //true or false
}

}
