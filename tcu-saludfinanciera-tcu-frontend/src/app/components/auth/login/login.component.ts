  import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../../interfaces/user.interface';
import { AuthService } from '../../../services/auth/auth.service';
import { TokenService } from '../../../services/auth/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginPayload:ILogin;
  errorMessage:boolean = false;
  message:string ="";
  spinner:boolean = false;
  constructor(private authService:AuthService,private tokenService:TokenService, private fb:FormBuilder,
    private router:Router) { 
    this.createloginForm();
  }

  get emailInvalid(){
    return this.loginForm.get('email')!.invalid && this.loginForm.get('email')?.touched;
  }


  ngOnInit(): void {
  }

  createloginForm(){

    this.loginForm = this.fb.group({

      email:['', [Validators.required]],
      password:['', [Validators.required]],
      companyId:['1', [Validators.required]],
    });

  }

  login(){
    this.spinner = true;
    this.loginPayload = this.loginForm.value;
    this.authService.login(this.loginPayload).subscribe((res:any) => {
      this.message = res!.msg;
      if (!res!.ok) {
        this.errorMessage = true;
        return;
      }


      this.tokenService.saveUserLocalStorage(res.data);
      this.errorMessage = false;
      this.router.navigateByUrl('/');
      this.spinner = false;
    },
    error => {
      this.message = error.error.msg;
      this.errorMessage = true;
    });
  }



}