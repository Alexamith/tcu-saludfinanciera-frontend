import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegister } from 'src/app/interfaces/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerPayload: IRegister;
  message: string = '';
  spinner:boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder,
    private router: Router,
    private tokenService:TokenService) {
    this.createregisterForm();
  }
  successMessage: boolean = false;
  nameInvalid: boolean = false;
  firstLastNameInvalid: boolean = false;
  secondLastNameInvalid: boolean = false;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  errorMessage: boolean = false;

  createregisterForm() {
    this.registerForm = this.fb.group({
      name: ['Yordy', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      firstLastName: ['Araya', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      secondLastName: ['Araya', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['1234', [Validators.required]],
      administrator: [false]

    });
  }


  ngOnInit(): void {

  }

  register() {
    this.spinner = true;
    if (this.registerForm.valid) {

      this.registerPayload = this.registerForm.value;
      this.authService.register(this.registerPayload).subscribe((res: any) => {
        this.message = res!.msg;
        if (!res!.ok) {
          this.errorMessage = true;
          return;
        }

        this.tokenService.saveUserLocalStorage(res.data);
        this.errorMessage = false;
        this.router.navigateByUrl('/');
        
      },
      error => {
        this.message = error.error.msg;
        this.errorMessage = true;
      });
      this.spinner = false;

    } else {
      this.nameInvalid = this.registerForm.get('name')?.invalid ?? false;
      this.firstLastNameInvalid = this.registerForm.get('firstLastName')?.invalid ?? false;
      this.secondLastNameInvalid = this.registerForm.get('secondLastName')?.invalid ?? false;
      this.emailInvalid = this.registerForm.get('email')?.invalid ?? false;
      this.passwordInvalid = this.registerForm.get('password')?.invalid ?? false;
      this.errorMessage = true;
      this.message = 'Error al registrar usuario. Por favor, revisa los campos.';
    }
  }
}
