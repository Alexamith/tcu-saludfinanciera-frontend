// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { RegisterComponent } from './components/register/register.component';
import { ConsultantIndexComponent } from './components/consultant/consultant-index/consultant-index.component';
import { NewConsultantComponent } from './components/consultant/new-consultant/new-consultant.component';
// Guards
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [
  {
    path: '', component: IndexComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'consultant', component:ConsultantIndexComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'consultant/new', component:NewConsultantComponent,
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
