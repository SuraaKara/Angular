import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/models/user';
import { first } from 'rxjs/operators';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
error = '';
loading = false;
  constructor(
    
    private authService: AuthServiceService,
    private toastrService: ToastrService,
    private fb:FormBuilder,
    private router: Router
  ) {
   
  }

 login(){
  if(this.form.valid){
     let loginModel = Object.assign({},this.form.value)

    this.authService.login(loginModel).subscribe(response=>{
      if(response.isSuccess==true){
        console.log(loginModel); 
        console.log(response); 
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.token)
        console.log(response.token); 
        this.router.navigateByUrl('/adminPage')
      }
      else{
        this.toastrService.error(response.message)
      }
    },responseError=>{
      this.toastrService.error(responseError.error)
    })
  }
}

loggedIn() {
  const token = localStorage.getItem("token");
  return !!token;
}
      
  createLoginForm(){
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
  });
  }
  logOut() {
    localStorage.removeItem("token");
    this.toastrService.success("Logged out successfully!");
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.createLoginForm();
 
  }

}
