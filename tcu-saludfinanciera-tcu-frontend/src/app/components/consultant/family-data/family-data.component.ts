import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-family-data',
  templateUrl: './family-data.component.html',
  styleUrls: ['./family-data.component.scss']
})
export class FamilyDataComponent implements OnInit {
  familyForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.familyForm = this.fb.group({
      cantidadPersonas: [2, Validators.required],
      ingresoBrutoMensual: ['', Validators.required],
      ingresoNetoMensual: ['', Validators.required],
      ingresosAdicionales: '',
      dependenciaEconomica: ['', Validators.required],
      discapacidad: ['', Validators.required],
      enfermedadCronica: ['', Validators.required],
      enfermedadTerminal: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.familyForm.valid) {
      // Realiza la lógica para enviar los datos al servidor
      console.log('Datos enviados:', this.familyForm.value);
    } else {
      // Marcar los campos como tocados para mostrar mensajes de error si es necesario
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    Object.values(this.familyForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
