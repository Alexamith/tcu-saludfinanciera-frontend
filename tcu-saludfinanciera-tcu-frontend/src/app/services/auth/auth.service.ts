import { Injectable } from '@angular/core';
import { HttpService } from "../../services/http/http.service"
import { ILogin } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpService) { }


  login(payload:ILogin){
    
    return this.http.post('auth/login',payload);

  }


}
