import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    id: '',
    password: ''
  };

  showPassword = false;

  onSubmit() {
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    // Accede a this.user.id y this.user.password para obtener los valores ingresados.
  }
}
