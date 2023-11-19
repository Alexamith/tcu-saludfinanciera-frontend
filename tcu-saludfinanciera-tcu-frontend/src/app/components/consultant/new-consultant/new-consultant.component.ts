import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IConsultant } from '../../../interfaces/consultant.interface';
import { ConsultantService } from 'src/app/services/consultant/consultant.service';

@Component({
  selector: 'app-new-consultant',
  templateUrl: './new-consultant.component.html',
  styleUrls: ['./new-consultant.component.scss']
})
export class NewConsultantComponent {
  registerForm: FormGroup;
  // registerPayload: IRegister;
  message: string = '';
  spinner:boolean = false;
  successMessage: boolean = false;
  nameInvalid: boolean = false;
  firstLastNameInvalid: boolean = false;
  secondLastNameInvalid: boolean = false;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  errorMessage: boolean = false;


  step$ = this.consultantService.currentStep$;
  currentStep$ = this.consultantService.currentStep$  ; 


  constructor(private fb: FormBuilder,
    private router: Router, private consultantService:ConsultantService) {
  }


  ngOnInit(): void {
 
    
  }

  changeStep(step:number){
    this.consultantService.setStep$(step);
  }
}
