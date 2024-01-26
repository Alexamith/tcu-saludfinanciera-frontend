import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-finance-profile-data',
  templateUrl: './finance-profile-data.component.html',
  styleUrls: ['./finance-profile-data.component.scss']
})
export class FinanceProfileDataComponent implements OnInit {
  financeForm: FormGroup;

  // Inyecta el FormBuilder en el constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Crea el formulario con los campos necesarios
    this.financeForm = this.fb.group({
      perfilRiesgo: ['', Validators.required],
      objetivosCortoPlazo: ['', Validators.required],
      objetivosMedianoPlazo: ['', Validators.required],
      objetivosLargoPlazo: ['', Validators.required],
      diagnosticoBienestar: ['', Validators.required],
    });
  }

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    if (this.financeForm.valid) {
      console.log('Datos enviados:', this.financeForm.value);
    } else {
      // Marcar los campos como tocados para mostrar mensajes de error si es necesario
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    // Marcar todos los campos como tocados para activar las validaciones y mostrar mensajes de error
    Object.values(this.financeForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
