import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.scss']
})


export class LocationDataComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      provincia: ['', Validators.required],
      canton: ['', Validators.required],
      distrito: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern("^\\d{8}$")]],
      correoElectronico: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      // Realiza la lógica para enviar los datos al servidor
      console.log('Datos enviados:', this.registerForm.value);
    } else {
      // Marcar los campos como tocados para mostrar mensajes de error si es necesario
      this.markAllFieldsAsTouched();
    }
  }
  markAllFieldsAsTouched() {
    Object.values(this.registerForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
