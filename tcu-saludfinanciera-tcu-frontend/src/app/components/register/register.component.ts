import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegister } from 'src/app/interfaces/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerPayload: IRegister;
  message: string = '';

  constructor(private authService: AuthService, private fb: FormBuilder,
    private router: Router) {
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
      name: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      firstLastName: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      secondLastName: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      companyId: ['1'],
      administrator: ['1']

    });
  }


  ngOnInit(): void {

  }

  register() {
    if (this.registerForm.valid) {

      this.registerPayload = this.registerForm.value;
      this.authService.register(this.registerPayload).subscribe((res: any) => {
        this.message = res!.msg;
        if (!res!.ok) {
          this.errorMessage = true;
          return;
        }

        this.successMessage = true;
        this.errorMessage = false;


      },
        error => {
          this.message = error.error.msg;
          this.errorMessage = true;
        });

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
