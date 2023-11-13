import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes:Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
