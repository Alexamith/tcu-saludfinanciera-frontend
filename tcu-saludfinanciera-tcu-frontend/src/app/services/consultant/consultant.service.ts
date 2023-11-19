import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../notifications/notifications.service';
import { IConsultant } from 'src/app/interfaces/consultant.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
private step$ = new BehaviorSubject<number>(1);

  constructor(private http: HttpService, private router: Router,
    private notificationService: NotificationsService) { }

    get currentStep$():Observable<number>{
      return this.step$.asObservable();
    }

    setStep$(newStep:number){
      this.step$.next(newStep);
    }



    createConsultant(payload: IConsultant) {
      return this.http.post('consultants/new', payload);
    }


}
