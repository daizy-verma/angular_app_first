import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'a-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any; 
 
 

  constructor(private router: Router, private toastr: ToastrService) {}
  
 logout() {
      
      if (this.user) {
        localStorage.removeItem('userData');
        this.user = null;
        this.router.navigate(['/']);
        this.toastr.success('Logout successful', 'Success');
      } else {
        this.toastr.warning('Cannot logout without logging in', 'Warning');
      }
    }
    // myFunction() {
    //   var element = document.getElementsByClassName("a1");
    //   // element.classList.add("a1-active");
      
    // }

  ngOnInit() {
    // currentUrl = this.router.url;
    let userData: any = localStorage.getItem('userData');
    console.log(userData);
    
    if (userData) {
    this.user = JSON.parse(userData);

    }
  }
}
