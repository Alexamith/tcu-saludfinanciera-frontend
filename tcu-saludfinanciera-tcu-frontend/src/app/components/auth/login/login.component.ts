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
  constructor(private authService:AuthService,private tokenService:TokenService, private fb:FormBuilder,
    private router:Router) { 
    this.createloginForm();
  }

  get identificationInvalid(){
    return this.loginForm.get('identification')!.invalid && this.loginForm.get('identification')?.touched;
  }


  ngOnInit(): void {
  }

  createloginForm(){

    this.loginForm = this.fb.group({

      identification:['', [Validators.required]],
      password:['', [Validators.required]],
      companyId:['', [Validators.required]],
    });

  }

  login(){
    this.loginPayload = this.loginForm.value;
    this.authService.login(this.loginPayload).subscribe((res:any) => {
      this.tokenService.saveUserLocalStorage(res.data);
      this.errorMessage = false;
      this.router.navigateByUrl('/');
    },
    error => {
      this.message = error.error.msg;
      this.errorMessage = true;
    });
  }



}