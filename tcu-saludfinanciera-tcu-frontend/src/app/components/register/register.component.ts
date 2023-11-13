// Importa los módulos necesarios de Angular
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
  firstLastNameInvalid: boolean = false;
  secondLastNameInvalid: boolean = false;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  errorMessage: boolean = false;
  message: string = '';

  // Inyecta el FormBuilder en el constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializa el formulario y sus validadores
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      firstLastName: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      secondLastName: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]*/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[!@#$%^&*])/)]]
    });
  }

  // Función para simular el registro del usuario
  register() {
    // Simula una llamada al servicio de autenticación
    // En este caso, simplemente imprime en la consola y muestra un mensaje
    if (this.registerForm.valid) {
      console.log('Simulación: Usuario registrado exitosamente');
      // Puedes redirigir a otra página, mostrar un mensaje de éxito, etc.
      // Dependiendo de tu aplicación.
    } else {
      // Marca los campos inválidos
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
