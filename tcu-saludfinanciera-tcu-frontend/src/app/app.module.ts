import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { IndexComponent } from './components/index/index.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';


const appRoutes:Routes=[
  {path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    IndexComponent,
    PurposeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent}
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
