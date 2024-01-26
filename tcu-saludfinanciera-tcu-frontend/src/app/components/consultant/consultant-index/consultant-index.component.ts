import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultant-index',
  templateUrl: './consultant-index.component.html',
  styleUrls: ['./consultant-index.component.scss']
})
export class ConsultantIndexComponent implements OnInit {
  consultantDataForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.consultantDataForm = this.fb.group({
      ingresosNetos: this.fb.group({
        salarioNeto: ['', Validators.required],
        otrosIngresos: ['', Validators.required],
        arrendamientoCarros: ['', Validators.required],
        viaticos: ['', Validators.required],
        totalIngresos: ['']
      }),
      casillaAhorro: this.fb.group({
        emergencias: ['', Validators.required],
        proyectos: ['', Validators.required],
        pension: ['', Validators.required],
        totalAhorros: ['']
      }),
      casillaDeudas: this.fb.group({
        tarjetaCredito: ['', Validators.required],
        creditoPersonal: ['', Validators.required],
        creditoHipotecario: ['', Validators.required],
        totalDeudas: ['']
      }),
      gastosRecurrentes: this.fb.group({
        viviendaAlimentacion: ['', Validators.required],
        transporte: ['', Validators.required],
        servicios: ['', Validators.required],
        educacion: ['', Validators.required],
        salud: ['', Validators.required],
        totalGastosRecurrentes: ['']
      }),
      granTotal: ['']
    });

    // Actualizar el total general cuando cambien los totales individuales
    this.consultantDataForm.valueChanges.subscribe(() => {
      this.calculateGranTotal();
    });
  }

  // Función para calcular el gran total
  private calculateGranTotal() {
    const ingresosNetosTotal = this.calculateTotal('ingresosNetos', 'totalIngresos');
    const ahorrosTotal = this.calculateTotal('casillaAhorro', 'totalAhorros');
    const deudasTotal = this.calculateTotal('casillaDeudas', 'totalDeudas');
    const gastosTotal = this.calculateTotal('gastosRecurrentes', 'totalGastosRecurrentes');
  
    const granTotal = ingresosNetosTotal + ahorrosTotal - deudasTotal - gastosTotal;
    this.consultantDataForm.get('granTotal')?.setValue(granTotal.toFixed(2));
  }

  // Función para calcular el total
  private calculateTotal(groupName: string, totalControlName: string): number {
    const group = this.consultantDataForm.get(groupName) as FormGroup;
    const total = group ? (parseFloat(group.get(totalControlName)?.value) || 0) : 0;
    return total;
  }

  submitForm() {
   
  }
}
