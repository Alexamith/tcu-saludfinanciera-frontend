// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { RegisterComponent } from './components/register/register.component';
// Guards
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [
  {
    path: '', component: IndexComponent,
    canActivate:[AuthGuard]
  },
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
