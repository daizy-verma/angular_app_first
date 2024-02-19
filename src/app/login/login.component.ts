import { Component } from '@angular/core';
import { FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface User{
  email:string;
  password:string
  gender:string
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
  gender:''
 }
 constructor(private router: Router) {}
  text:string="hello";

 ngOnInit() {

  
}

 submit(form:FormGroup){
  console.log('>>>' , form )
  console.log('valid' , form.valid ); 
  console.log('User:', this.user);
  localStorage.setItem('userData', JSON.stringify(form));
  this.router.navigate(['/home']);
}

}
