import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultantService } from 'src/app/services/consultant/consultant.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent {
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

  step:number;

  constructor(private fb: FormBuilder,private notificationService: NotificationsService,private consultantService:ConsultantService) {
    this.createConsultantForm();
    console.log()
    this.registerForm.disable();
  }

  createConsultantForm() {
    let today = new Date();
    this.registerForm = this.fb.group({
      date:[today],
      fullName:['', [Validators.required]],
      identification:['', [Validators.required]],
      birthdate:['', [Validators.required]],
      age:['', [Validators.required]],
      sex:['', [Validators.required]],
      civilStatus: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      workingCondition: ['', [Validators.required]],
      academicDegree: ['', [Validators.required]],
      step: [1, [Validators.required]]
    });
  }

disabledAllInputs(){
  
//   .forEach(input => {
  
//  });
}




  createConsultant(){
    
    
    
    this.spinner = true;
    this.consultantService.createConsultant(this.registerForm.value).subscribe((res:any) => {
      this.message = res!.msg;
      if (!res['ok']) {
        this.errorMessage = true;
        return;
      }
      this.consultantService.setStep$(2);
      this.notificationService.created(res['msg']);
      this.errorMessage = false;
      this.spinner = false;
    },
    error => {
      this.message = error.error.msg;
      this.errorMessage = true;
    });
  }


}
