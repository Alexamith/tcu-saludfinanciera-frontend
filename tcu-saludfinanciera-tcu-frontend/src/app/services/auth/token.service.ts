import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }



  saveUserLocalStorage(user:any){

    localStorage.setItem("user", JSON.stringify(user));

  }




}
