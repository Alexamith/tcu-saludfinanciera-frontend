import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {//Required
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [
        '',
        [Validators.required, Validators.pattern(/^\d{8}$/)] // Only 8 numeric digits
      ]
    });
  }

  onPhoneInput(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Only letters
  }

  onTextInput(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^a-zA-Z]/g, ''); // Solo letras
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
    }
  }
}
