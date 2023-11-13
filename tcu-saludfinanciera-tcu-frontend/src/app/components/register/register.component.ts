import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  nameInvalid: boolean = false;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  errorMessage: string;
  message: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
    const nameControl = this.registerForm.get('name');
    const emailControl = this.registerForm.get('email');
    const passwordControl = this.registerForm.get('password');
  
    this.nameInvalid = nameControl ? nameControl.invalid : true;
    this.emailInvalid = emailControl ? emailControl.invalid : true;
    this.passwordInvalid = passwordControl ? passwordControl.invalid : true;
  
    if (this.nameInvalid || this.emailInvalid || this.passwordInvalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      return;
    }
  
    // Lógica para el registro, por ejemplo, llamada a un servicio de registro
  
    this.message = '¡Registro exitoso!';
  }
  
}
