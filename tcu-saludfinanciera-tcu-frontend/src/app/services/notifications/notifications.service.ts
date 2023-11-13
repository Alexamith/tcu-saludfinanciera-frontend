import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  logout(){
    return Swal.fire({
      title: "Cerrar sesión",
      text: "Desea cerrar sesión?",
      icon: "question",
      confirmButtonColor:'#2A4B9E',
      confirmButtonText:'Salir'
    });
  }
}
