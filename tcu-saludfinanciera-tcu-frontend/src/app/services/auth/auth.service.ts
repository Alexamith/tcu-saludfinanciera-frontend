import { Injectable } from '@angular/core';
import { HttpService } from "../../services/http/http.service"
import { ILogin } from '../../interfaces/user.interface';
import { IRegister } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService, private router: Router,
    private notificationService: NotificationsService) { }


  login(payload: ILogin) {

    return this.http.post('auth/login', payload);

  }

  register(payload: IRegister) {
    return this.http.post('users/new', payload);
  }


  loggedIn(): Boolean {
    return !!localStorage.getItem('user');
  }
  logout() {
    this.notificationService.logout().then((value) => {
      if (value!.isConfirmed) {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
      }
    });
  }

  getToken(): string {
    const user = JSON.parse(localStorage.getItem("user")!)
    return user ? user!.token : '';

  }

}
