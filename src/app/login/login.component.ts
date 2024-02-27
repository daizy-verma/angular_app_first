import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../core/sevices/api.service';

export interface User{
  email:string;
  password:string;
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 user: User = {
  email:'',
  password:'',

 }
 constructor(private router: Router, private apiService: ApiService, private toastr: ToastrService) {}
  text:string="hello";

 ngOnInit() { }

 submit(form:any){
  console.log('>>>' , form )
  console.log('valid' , form.valid ); 
  console.log('User:', this.user);

  let data = {
    "email": form.email,
    "password": form.password,
  }
  this.apiService.loginAPI(data).subscribe(
    (response: any) => {
     console.log('Response:' , response);
    //  this.toastr.success('Login successful', 'Success');
     localStorage.setItem('userData', JSON.stringify(form));
     this.router.navigate(['/home']);
  },
    (error: any) => {
      console.error('Error:', error);
      this.toastr.error('User not found', 'Error');
    }
  );

}

}
