import { ConsultantService } from 'src/app/services/consultant/consultant.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
// general-data.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent implements OnInit {
  generalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generalForm = this.fb.group({
      fechaIngreso: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      numeroCedula: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      condicionLaboral: ['', Validators.required],
      gradoAcademico: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.generalForm.valid) {
      console.log('Datos enviados:', this.generalForm.value);
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched() {
    Object.values(this.generalForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
